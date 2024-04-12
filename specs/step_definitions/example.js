import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("That I am on the Home Page", () => {
  cy.visit("/");
  cy.experimentalSessionAndOrigin;
});

Given("I have accepted cookies", () => {
  cy.wait(1000);
  cy.get("input").click();
});

When("I click on the Not a member yet? Register here link", () => {
  cy.get('[href="/account/register/"]').click();
});

When("I Write in a new Username, email, Password, Confirm Password", () => {
  cy.get(":nth-child(6) > .form-control").type("UserTesting");
  cy.get(":nth-child(7) > .form-control").type("UserTesting@email.com");
  cy.get(":nth-child(8) > .form-control").type("UserTesting123!");
  cy.get(":nth-child(9) > .form-control").type("UserTesting123!");
  cy.get(".style-button").click();
});

When("I click Click here to confirm your account", () => {
  cy.get(".style-link").click();
});

Then("I can see Thank you for confirming your email.", () => {
  cy.get(".alert").should("exist");
});

Given("That I Have just completed -Create New Account- Scenario", () => {
  cy.wait(1000);
});

When("Write UserName And Password", () => {
  cy.get(":nth-child(6) > .form-control").type("UserTesting");
  cy.get(":nth-child(7) > .form-control").type("UserTesting123!");
});

When("I Click on Log In Button", () => {
  cy.get(".style-link").click();
});

When("Click Log In Button", () => {
  cy.get(".style-button").click();
});

Then("I should arrive at the DisplayAllCategories page", () => {
  cy.get("h1").should("contain", "Categories");
  cy.get("h5").should("contain", "UserTesting");
  cy.get(":nth-child(2) > form > .style-button").should("contain", "Home");
  cy.get(".container > button").should("contain", "Search");
  cy.get(":nth-child(5) > form > .style-button").should("contain", "Log out");
});

Then("I Test going into the first category", () => {
  cy.wait(1000);
  cy.get(
    '[href="https://localhost:7255/DisplayAllCategories/DisplayCategory/1"]'
  ).click({ force: true });
  cy.get(".text-muted").should("exist").should("not.be.empty");
  cy.get(".btn").should("exist");
  cy.get(".list-group-item-action").should("exist");
});
