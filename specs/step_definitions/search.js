import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("that I am logged in", () => {
  cy.login("admin", "Password12345!");
});

Given('I am on the category page', () => {
  cy.visit("/DisplayAllCategories");
});

When('I click in the search bar', () => {
  cy.get(".container > input").click();
});

When('I type {string}', (SearchTerm) => {
  cy.get(".container > input").type((SearchTerm));
});

When('I click on the search button', () => {
  cy.get(".container > button").click();
});

Then('I should see {string} in the filtered list', (SearchTerm) => {
  cy.get(".list-group-item").contains(SearchTerm);
});