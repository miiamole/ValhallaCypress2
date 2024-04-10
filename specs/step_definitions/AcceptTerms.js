import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the home page', () => {
  cy.visit("/")
});

Given('I see a box where I can accept terms and conditions', () => {
 cy.get("input");
});

When('I click in the box', () => {
  cy.wait(500);
  cy.get("input").click();
});

When('I click on the sign up link that appears', () => {
  cy.get('[href="/account/register/"]').should("be.visible").click();
});

Then('I get redirected to the sign up page', () => {
  cy.url().should("include", "/register");
});