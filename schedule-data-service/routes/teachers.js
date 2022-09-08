const encrypt = require('../modules/encrypt.js')
const setResultHeaders = require("../modules/set-result-headers");

module.exports = function(server, db){

  server.get('/data/teachers', (req, res)=>{
    let query = "SELECT id, firstname, lastname, initials, phone, email, color, hide  FROM teachers ORDER BY initials"
    let result = db.prepare(query).all()
    setResultHeaders(res, result)
    res.json(result)
  })

  // begär ändring av lösenord för användare
  server.delete('/data/teachers/password', (request, response) => {
    let user = request.body
    let result
    try{
      result = db.prepare('UPDATE teachers SET password = NULL WHERE email = ? AND hide = 0').run([user.email])
    }catch(e){
      console.error(e)
    }
    response.json(result)
  })


  // ändra lösenord för användare
  server.patch('/data/teachers/password', (request, response) => {
    let user = request.body
    let encryptedPassword = encrypt(user.password)
    let result
    try{
      result = db.prepare('UPDATE teachers SET password = ? WHERE password IS NULL AND email = ?').run([encryptedPassword, user.email])
    }catch(e){
      console.error(e)
    }
    response.json(result)
  })


}