Feature: Search

Background: 
Given that I am logged in

Scenario Outline: Find a specific term
Given I am on the category page
When I click in the search bar
And I type "<SearchTerm>" 
And I click on the search button
Then I should see "<SearchTerm>" in the filtered list

Examples:
    |SearchTerm|         
    |Cyber|
    |Att|
    