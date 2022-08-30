Feature: Edit information in React-Admin page
    As an admin, I want to able to edit each information in tables in admin page. 

Scenario: Edit class information 
    Given I am logged in the admin page
    And I am on the page for "Classes"
    And I see the "Edit" button on the class table
    When I click "Edit" button for a chosen class
    And I open the edit page
    And I inputs new information
    And I click the "Save" button
    Then I should be able to update new information and it is saved


Scenario: Edit course information 
    Given I am logged in the admin page
    And I am on the page for "courses"
    And I see the "Edit" button on the course table
    When I click "Edit" button for a chosen course
    And I open the edit page
    And I inputs new information
    And I click the "Save" button
    Then I should be able to update new information and it is saved


Scenario: Edit holiday information
    Given I am logged in the admin page
    And I am on the page for "holidays"
    And I see the "Edit" button on the holiday table
    When I click "Edit" button for a chosen day
    And I open the edit page
    And I inputs new information
    And I click the "Save" button
    Then I should be able to update new information and it is saved


Scenario: Edit invoice item information
    Given I am logged in the admin page
    And I am on the page for "invoice_item"
    And I see the "Edit" button on the invoice item table 
    When I click "Edit" button for a chosen item
    And I open the edit page
    And I inputs new information
    And I click the "Save" button
    Then I should be able to update new information and it is saved


Scenario: Edit invoices information
    Given I am logged in the admin page
    And I am on the page for "invoices"
    And I see the "Edit" button on the invoice invoice table
    When I click "Edit" button for a chosen invoice
    And I open the edit page
    And I inputs new information
    And I click the "Save" button
    Then I should be able to update new information and it is saved


Scenario: Edit schedule information
    Given I am logged in the admin page
    And I am on the page for "schedule"
    And I see the "Edit" button on the invoice schedule table
    When I click "Edit" button for a chosen schedule 
    And I open the edit page
    And I inputs new information
    And I click the "Save" button
    Then I should be able to update new information and it is saved


Scenario: Edit school item information
    Given I am logged in the admin page
    And I am on the page for "schools"
    And I see the "Edit" button on the schools table
    When I click "Edit" button for a chosen school
    And I open the edit page
    And I inputs new information
    And I click the "Save" button
    Then I should be able to update new information and it is saved


Scenario: Edit invoice teachers information
    Given I am logged in the admin page
    And I am on the page for "teachers"
    And I see the "Edit" button on the teachers table
    When I click "Edit" button for a chosen teacher
    And I open the edit page
    And I inputs new information
    And I click the "Save" button
    Then I should be able to update new information and it is saved



