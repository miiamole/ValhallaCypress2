Feature: Admin Page Functionality
    As an admin user
    I want to perform various actions on the admin page
    So that I can manage categories efficiently

Scenario: Category Management
    Given I am on the login page
    When I log in with username "admin" and password "Password12345!"
    Then I should see "Admin" in the nav bar
    
    When I navigate to the Admin page
    Then I should be on the "admin" page
    
    When I click the button containing "Category"
    Then A box containing "Category Name" should be visible
    
    When I create a new category with name "New Category" and info "New Info"
    Then A Category called "New Category" should be visible
    
    Given that searchbox with placeholder containing "Search by category" is visible
    When I search for the newly created category with name "New Category"
    Then Only one category named "New Category" should be visible
    
    When I click the button containing "Press To Edit"
    Then A box containing "Editing" should be visible
    
    When I edit the category name to "New Category 2"
    And I confirm the edit
    Then The Category should be named "New Category 2"
    
    When I click the button containing "Delete"
    Then A box containing "Are you sure that you want to delete this?" should be visible
    And I confirm the action
    Then The Category "New Category 2" should not be visible