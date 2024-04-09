Feature: Dashboard23

Background:
Given I am logged in as admin

Scenario: Admin wants to update en answer

Given I have clicked the answer button 
And I see a search bar 
And I type in "helt fel" and press enter
When I see the filtered list 
And I click on the edit button of the choosen answer
And I should see the edit section
And I type "this will be updated" in the edit answer field
And I change question to "Vilken typ av data kan krypteras med assymetrisk kryptering?"
And I choose "yes" to change if answer is correct
When I press the edit button
And a question pops upp
And I press the yes button
Then the edited question will be visible on the page