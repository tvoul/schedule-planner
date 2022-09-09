import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

Given("that I am logged in as admin", () =>{
    cy.visit(Cypress.env('baseUrl'))
    cy.get('#email').type(Cypress.env('email'))
    cy.get('#password').type(Cypress.env('password'))
    cy.get('#login-btn').click()
})
And("that I am on the admin page", () =>{
    cy.visit(Cypress.env('adminUrl'))
})
When("I click on the teachers button", () =>{
    cy.get('#root > div > div > div > main > div.MuiDrawer-root.RaSidebar-docked.MuiDrawer-docked.css-j24rge > div > div > div > a:nth-child(2)').click()
})
Then("the i should be able to see the data from the teachers table", () =>{
    cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.RaDatagrid-tableWrapper > table > thead > tr > th.MuiTableCell-root.MuiTableCell-head.MuiTableCell-sizeSmall.RaDatagrid-headerCell.column-initials.css-181sjsi > span > span')
    .contains('Initials')       
})

Then("i should be able to add a teacher", () =>{
    cy.get('#main-content > div > div > div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.css-1fyoe53 > div > a').click({force: true})
    cy.get('#email').type('kalle@nodehill.com')
    cy.get('#initials').type('kl')
    cy.get('#color').type('71b2de')
    cy.get('#main-content > div > div > div > form > div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.RaToolbar-desktopToolbar.css-1uwir8t > div > button').click()
})