Feature: Classes

    Scenario: Add class
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the classes button
        Then i should be able to add a class

    Scenario: See class
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the classes button
        Then i should be able to see the class in the class list

    Scenario: Edit class
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the classes button
        Then i should be able to edit a class

    Scenario: Delete class
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the classes button
        Then i should be able to delete a class
