Feature: Admin swaps views
    As an admin I want to be able to swap, back and forth, between the schedule and admin views

    Scenario: Swap to admin
        Given that I am logged in as admin
        And that I am on the schedule page
        When I click on the admin button
        Then the i should be taken to the admin page

    Scenario: Swap to schedule
        Given that I am logged in as admin
        And that I am on the admin page
        When I click on the schedule button
        Then the i should be taken to the schedule page
