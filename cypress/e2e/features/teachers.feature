Feature: Teachers
    Scenario: See teachers
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the teachers button
        Then the i should be able to see the data from the teachers table
        
    Scenario: Add teacher
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the teachers button
        Then i should be able to add a teacher

    Scenario: Edit teacher
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the teachers button
        Then i should be able to edit a teacher

    Scenario: Delete teacher
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the teachers button
        Then i should be able to delete a teacher
