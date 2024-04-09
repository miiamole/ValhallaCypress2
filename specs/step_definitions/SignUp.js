import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the register page", () => {
  cy.visit("account/register/");
});

When("I type {string} in the register username field", (newUsername) => {
  cy.get(":nth-child(6) > .form-control").type(newUsername);
});

When("I type {string} in the register email field", (newEmail) => {
  cy.get(":nth-child(7) > .form-control").type(newEmail);
});

When("I type {string} in the register password field", (newPassword) => {
  cy.get(":nth-child(8) > .form-control").type(newPassword);
});

When("I type {string} in the register confirm password field", (newConfirmedPassword) => {
  cy.get(":nth-child(9) > .form-control").type(newConfirmedPassword);
});

When("I click the register button", () => {
  cy.get(".style-button").click();
});

Then("I should see an error message", () => {
  cy.get(".alert").should("be.visible");
});
