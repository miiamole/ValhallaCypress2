import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Given("I am on the login page", () => {
//   cy.visit("/account/login");
// });

When("I type {string} in the username field", (username) => {
  cy.get(":nth-child(6) > .form-control").type(username);
});

When("I type {string} in the password field", (password) => {
   cy.get(":nth-child(7) > .form-control").type(password);
});

When("I click the log in button", () => {
  cy.get(".style-button").click();
});

Then("I should see the admin button", () => {
  cy.get(":nth-child(5) > form > .style-button").should("be.enabled");

});

Then("I should see {string} displayed", (username) => {
cy.get("h5").contains(username);
});