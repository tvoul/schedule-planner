Feature: As a visitor I want to see the login form

  Scenario: Firstpage login form
      Given that I'm on the firstpage
      When I navigate the firstpage
      Then I should see the login form



Feature: As a visitor I want to be able to login

  Scenario: visitor login
      Given that I'm on the login page
      When I enter my email in username/email field
      And I enter my password in the password field
      And I press the "login" button
      Then I should see the home page


