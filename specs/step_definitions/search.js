import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("that I am logged in", () => {
  cy.login("admin", "Password12345!");
});

Given('I am on the category page', () => {
  cy.visit("/DisplayAllCategories");
});

When('I click in the search bar', () => {
  cy.wait(1000);
  
  cy.get(".container > input").click({ force: true });
});

When('I type {string}', (SearchTerm) => {
  cy.get(".container > input").type((SearchTerm));
});

When('I click on the search button', () => {
  cy.wait(1000);
  cy.get(".container > button").click({ force: true });
});

Then('I should see {string} in the filtered list', (SearchTerm) => {
  cy.get(".list-group-item").contains(SearchTerm);
});