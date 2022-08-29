Feature: Admin sees data
    As an admin I want to be able to see the information that is available in the different tables

    Scenario: See classes
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the classes button
        Then the i should be able to see the data from the classes table

    Scenario: See courses
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the courses button
        Then the i should be able to see the data from the courses table
    
    Scenario: See holidays
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the holidays button
        Then the i should be able to see the data from the holidays table
    
    Scenario: See invoice items
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the invoice items button
        Then the i should be able to see the data from the invoice items table

    Scenario: See invoices
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the invoices button
        Then the i should be able to see the data from the invoices table
    
    Scenario: See schedule
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the schedule button
        Then the i should be able to see the data from the schedule table
    
    Scenario: See schools
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the schools button
        Then the i should be able to see the data from the schools table
    
    Scenario: See teachers
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the teachers button
        Then the i should be able to see the data from the teachers table

    Scenario: See course blog URL
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the teachers button
        Then the i should be able to see the data from the teachers table
