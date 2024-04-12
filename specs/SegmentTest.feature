Feature: SegmentTest

Scenario: Clicking back button
Given I am on segment page
When I click back button
Then I should be in category page

Scenario: Passing a subcategory
Given I am on segment page
When I click on a subcategory
And I get answers right
And I navigate to segment page
Then I can open the next subcategory

Scenario: failing a subcategory
Given I am on segment page
When I click on another subcategory
And I get answers wrong
And I go back into same segment
Then Next subcategory is locked