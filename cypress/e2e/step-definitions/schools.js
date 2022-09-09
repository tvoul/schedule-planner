import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

When("I click on the schools button", () =>{
    cy.get('#root > div > div > div > main > div.MuiDrawer-root.RaSidebar-docked.MuiDrawer-docked.css-j24rge > div > div > div > a:nth-child(3)').click()
})
Then("the i should be able to see the data from the schools table", () =>{
    cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.RaDatagrid-tableWrapper > table > thead > tr > th.MuiTableCell-root.MuiTableCell-head.MuiTableCell-sizeSmall.RaDatagrid-headerCell.column-shortName.css-181sjsi > span')
    .should('contain','Short name')       
})

Then("i should be able to add a school", () =>{
    cy.get('#main-content > div > div > div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.css-1fyoe53 > div > a').click({force: true})
    cy.get('#main-content > div > div > div > form > div.MuiCardContent-root.css-1qw96cp > div > div.MuiFormControl-root.MuiFormControl-marginDense.MuiTextField-root.ra-input.ra-input-name.css-1oxxqy9 > div').type('Nodehill Skolan')
    cy.get('#main-content > div > div > div > form > div.MuiCardContent-root.css-1qw96cp > div > div.MuiFormControl-root.MuiFormControl-marginDense.MuiTextField-root.ra-input.ra-input-shortName.css-1oxxqy9 > div').type('Ndh')
    cy.get('#main-content > div > div > div > form > div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.RaToolbar-desktopToolbar.css-1uwir8t > div > button').click()
    cy.get('#root > div.MuiSnackbar-root.MuiSnackbar-anchorOriginBottomCenter.css-pvddw4 > div').should('contain', 'Element created')
})

// Then("i should be able to edit a school", () =>{
//     cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.RaDatagrid-tableWrapper > table > tbody > tr').last().click({force: true})
//     cy.get('#name-label').type('Kalle')
//     cy.get('#lastname').type('Svensson')
//     cy.get('#main-content > div > div > div > form > div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.RaToolbar-desktopToolbar.css-1uwir8t > div > button.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-1ou5ev1').click({force: true})
//     cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.RaDatagrid-tableWrapper > table > tbody > tr').last().should('contain', 'Kalle').and('contain', 'Svensson')
// })

// Then("i should be able to delete a school", () =>{
//     cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.RaDatagrid-tableWrapper > table > tbody > tr').last().click({force: true})
//     cy.get('#main-content > div > div > div > form > div.MuiToolbar-root.MuiToolbar-gutters.MuiToolbar-regular.RaToolbar-desktopToolbar.css-1uwir8t > div > button.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeSmall.MuiButton-textSizeSmall.MuiButtonBase-root.ra-delete-button.css-dd2tjh').click({force: true})
//     cy.get('#root > div.MuiSnackbar-root.MuiSnackbar-anchorOriginBottomCenter.css-pvddw4 > div > div.MuiSnackbarContent-message.css-1w0ym84').should('contain', 'Element deleted')
//     cy.get('#main-content > div > div > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.RaList-content.css-s18byi > div > div.RaDatagrid-tableWrapper > table > tbody > tr').last().should('not.contain', 'Kalle').and('not.contain', 'Svensson')
// })