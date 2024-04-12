Feature: Log In

    Scenario: Create New Account
        Given That I am on the Home Page
        And I have accepted cookies
        When I click on the Not a member yet? Register here link
        And I Write in a new Username, email, Password, Confirm Password
        And I click Click here to confirm your account
        Then I can see Thank you for confirming your email.

    Scenario: Log Into Newly Created Account And Go into the first category
        Given That I Have just completed -Create New Account- Scenario 
        When I Click on Log In Button
        And Write UserName And Password
        And Click Log In Button
        Then I should arrive at the DisplayAllCategories page
        And I Test going into the first category 