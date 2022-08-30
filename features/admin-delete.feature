Feature: Admin delete request
    As an admin i want to be able to delete information in all tables 

    Scenario: Delete a class
        Given that I am logged in as admin
        And on the classes information page 
        When I click on the delete button on a "class" row
        Then that "class" sould no longer be in the list of classes

    Scenario: Delete a course
        Given that I am logged in as admin
        And on the courses information page 
        When I click on the delete button on the row of a "course"
        Then that "cours" sould no longer be in the list of courses

    Scenario: Delete a holiday
        Given that I am logged in as admin
        And on the holidays information page 
        When I click on the delete button on the row of a "holiday"
        Then that "holiday" sould no longer be in the list of holidays

    Scenario: Delete a invoice item
        Given that I am logged in as admin
        And on the invoice items information page 
        When I click on the delete button on the row of an "invoice item"
        Then that "invoice item" sould no longer be in the list of invoice items

    Scenario: Delete a invoice
        Given that I am logged in as admin
        And on the invoices information page 
        When I click on the delete button on a row of an "invoice"
        Then that "invoice" sould no longer be in the list of invoices

    Scenario: Delete a schedule                         
        Given that I am logged in as admin
        And on the schedules information page 
        When I click on the delete button on a row of a "schedule"
        Then that "schedule" sould no longer be in the list of schedules     

    Scenario: Delete a school
        Given that I am logged in as admin
        And on the school information page 
        When I click on the delete button on a row of a "school"
        Then that "school" sould no longer be in the list of schools

    Scenario: Delete a teacher
        Given that I am logged in as admin
        And on the teachers information page 
        When I click on the delete button on a row of a "teacher"
        Then that "teacher" sould no longer be in the list of teachers

   
Feature: Log out function 
    As a user i want to be able to log out. 

    Scenario: Log out
        Given that I am logged in as user 
        When I click de logout button 
        Then I sould come back to the login page
