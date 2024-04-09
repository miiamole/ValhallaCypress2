Feature: Dashboard

Background:
Given I am logged in as admin

Scenario: Admin is on admin dashboard

Given I am at the admin dashboard
And I see different buttons
When I click the answer button
Then I should get options to post answers

