Feature: Sign up error

Scenario: I want to sign up as a member
Given I am on the register page
When I type "user" in the register username field 
And I type "user@email.com" in the register email field
And I type "Password12345!" in the register password field
And I type "Password12345!" in the register confirm password field
And I click the register button
Then I should see an error message
  

