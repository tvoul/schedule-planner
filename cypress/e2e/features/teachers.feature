Feature: Teachers
    Scenario: See teachers
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the teachers button
        Then the i should be able to see the data from the teachers table
        
    Scenario: add teacher
        Given that i have logged in as a admin
        And im on the admin page
        When i click on teachers
        Then i should be able to add a teacher

    # Scenario: Edit invoice teachers information
    #     Given I am logged in the admin page
    #     And I am on the page for "teachers"
    #     And I see the "Edit" button on the teachers table
    #     When I click "Edit" button for a chosen teacher
    #     And I open the edit page
    #     And I inputs new information
    #     And I click the "Save" button
    #     Then I should be able to update new information and it is saved

    # Scenario: Delete a teacher
    #     Given that I am logged in as admin
    #     And on the teachers information page 
    #     When I click on the delete button on a row of a "teacher"
    #     Then that "teacher" sould no longer be in the list of teachers
