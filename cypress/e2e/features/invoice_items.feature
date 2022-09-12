Feature: Invoice items

    Scenario: Add invoice item
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the invoice items button
        Then i should be able to add an invoice item

    Scenario: See invoice item
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the invoice items button
        Then i should be able to see the invoice item in the invoice item list

    Scenario: Edit invoice item
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the invoice items button
        Then i should be able to edit an invoice item

    Scenario: Delete invoice item
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the invoice items button
        Then i should be able to delete an invoice item
