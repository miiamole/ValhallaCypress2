Feature: Login as Admin

Scenario: Login as admin
  Given I am on the login page
  When I type "admin" in the username field 
  And I type "Password12345!" in the password field
  And I click the log in button
  Then I should see the admin button
  Then I should see "admin" displayed
  