/// <reference types="Cypress" />

context('Admin', () => {
    it('Logs in', () =>{
      cy.visit(Cypress.env('baseUrl'))
      cy.get('#email').type(Cypress.env('email'))
      cy.get('#password').type(Cypress.env('password'))
      cy.get('#login-btn').click()
      cy.visit(Cypress.env('adminUrl'))
      cy.get('#root > div > div > div > main > div.MuiDrawer-root.RaSidebar-docked.MuiDrawer-docked.css-j24rge > div > div > div > a:nth-child(2)').click()
    })
  })
  