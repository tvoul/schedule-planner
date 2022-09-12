Feature: Schools

    Scenario: Add school
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the schools button
        Then i should be able to add a school

    Scenario: See school
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the schools button
        Then i should be able to see the school in the school list

    Scenario: Edit school
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the schools button
        Then i should be able to edit a school

    Scenario: Delete school
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the schools button
        Then i should be able to delete a school
