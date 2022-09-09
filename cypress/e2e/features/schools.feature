Feature: Schools
    Scenario: See school
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the schools button
        Then the i should be able to see the data from the schools table
        
    Scenario: Add school
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the schools button
        Then i should be able to add a school

#     Scenario: Add school
#         Given that I am logged in as admin
#         And that I am on the admin page
#         When I click on the schools button
#         Then i should be able to edit a school

#     Scenario: Add school
#         Given that I am logged in as admin
#         And that I am on the admin page
#         When I click on the schools button
#         Then i should be able to delete a school
