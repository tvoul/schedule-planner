Feature: Log out function 
    As a user i want to be able to log out. 

    Scenario: Log out
        Given that I am logged in as user 
        When I click de logout button 
        Then I sould come back to the login page