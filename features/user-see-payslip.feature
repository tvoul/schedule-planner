Feature: See information on payslip
    As a user, I want to be able to see information on the payslip

Scenario: See the salary for the present month 
    Given I am logged into the page 
    And I am on the payment page
    When I click the current month 
    Then I can see my salary 

Scenario: See the history of all salaries 
    Given I am logged in the page   
    And I am on the payment page
    When I click history 
    And I can see all old payslips until now 