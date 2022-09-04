const encrypt = require('../modules/encrypt.js')
const setResultHeaders = require("../modules/set-result-headers");

module.exports = function(server, db){

  server.get('/data/classes', (req, res)=>{
    let query = "SELECT id, name, shortName, school, blog, , deFaultStartTime, deFaultEndTime, defaultInvoiceItem, defaultHoursPerDay, hide FROM classes ORDER BY initials"
    let result = db.prepare(query).all()
    setResultHeaders(res, result)
    res.json(result)
  })

  // registrera en ny klass
  server.post('/data/classes', (request, response) => {
    let user = request.body
    let encryptedPassword = encrypt(user.password)
    let result
    try{
      result = db.prepare('INSERT INTO classes (name, shortName, school, deFaultStartTime, deFaultEndTime ) VALUES(?,?)').run([user.email])
    }catch(e){
      console.error(e)
    }
    response.json(result)
  })


  // komplettera profil för användare
  server.put('/data/classes', (request, response) => {
    let user = request.body
    let result
    try{
      result = db.prepare('UPDATE classes SET name = ?, shortName = ?, school = ?, deFaultStartTime = ?, deFaultEndTime = ?, hide = ? WHERE email = ?').run([user.name, user.shortName, user.hide])
    }catch(e){
      console.error(e)
    }
    response.json(result)
  })

  // Delete class
  server.delete('/data/classes', (request, response) => {
    let user = request.body
    let result
    try {
      result = db.prepare('DELETE FROM classes WHERE id = ?')
    } catch (e) {
      response.json(result)
    }
  })



}