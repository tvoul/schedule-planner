import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

// Given("that I am logged in as admin", () =>{
//     cy.visit(Cypress.env('baseUrl'))
//     cy.get('#email').type(Cypress.env('email'))
//     cy.get('#password').type(Cypress.env('password'))
//     cy.get('#login-btn').click()
// })
// And("that I am on the admin page", () =>{
//     cy.visit(Cypress.env('adminUrl'))
// })
When("I click on the teachers button", () =>{
    cy.get('#root > div > div > div > main > div.MuiDrawer-root.RaSidebar-docked.MuiDrawer-docked.css-j24rge > div > div > div > a:nth-child(2)').click()
})
Then("the i should be able to see the data from the teachers table", () =>{
    cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.RaDatagrid-tableWrapper > table > thead > tr > th.MuiTableCell-root.MuiTableCell-head.MuiTableCell-sizeSmall.RaDatagrid-headerCell.column-initials.css-181sjsi > span > span')
    .should('contain','Initials')       
})

Then("i should be able to add a teacher", () =>{
    cy.get('#main-content > div > div > div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.css-1fyoe53 > div > a').click({force: true})
    cy.get('#initials').type('kl')
    cy.get('#email').type('kalle@nodehill.com')
    cy.get('#color').type('#71b2de')
    cy.get('#main-content > div > div > div > form > div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.RaToolbar-desktopToolbar.css-1uwir8t > div > button').click()
    cy.get('#root > div.MuiSnackbar-root.MuiSnackbar-anchorOriginBottomCenter.css-pvddw4 > div').should('contain', 'Element created')
})

Then("i should be able to edit a teacher", () =>{
    cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.RaDatagrid-tableWrapper > table > tbody > tr').last().click({force: true})
    cy.get('#firstname').type('Kalle')
    cy.get('#lastname').type('Svensson')
    cy.get('#main-content > div > div > div > form > div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.RaToolbar-desktopToolbar.css-1uwir8t > div > button.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-1ou5ev1').click({force: true})
    cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.RaDatagrid-tableWrapper > table > tbody > tr').last().should('contain', 'Kalle').and('contain', 'Svensson')
})

Then("i should be able to delete a teacher", () =>{
    cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.RaDatagrid-tableWrapper > table > tbody > tr').last().click({force: true})
    cy.get('#main-content > div > div > div > form > div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.RaToolbar-desktopToolbar.css-1uwir8t > div > button.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeSmall.MuiButton-textSizeSmall.MuiButtonBase-root.ra-delete-button.css-dd2tjh').click({force: true})
    cy.get('#root > div.MuiSnackbar-root.MuiSnackbar-anchorOriginBottomCenter.css-pvddw4 > div > div.MuiSnackbarContent-message.css-1w0ym84').should('contain', 'Element deleted')
    cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.RaDatagrid-tableWrapper > table > tbody > tr').last().should('not.contain', 'Kalle').and('not.contain', 'Svensson')
})