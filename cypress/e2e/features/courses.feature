Feature: Courses

    Scenario: Add course
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the courses button
        Then i should be able to add a course

    Scenario: See course
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the courses button
        Then i should be able to see the course in the courses list

    Scenario: Edit course
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the courses button
        Then i should be able to edit a course

    Scenario: Delete course
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the courses button
        Then i should be able to delete a course
