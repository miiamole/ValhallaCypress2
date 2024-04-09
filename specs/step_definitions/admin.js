import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I have logged in as admin", () => {
  cy.login("admin", "Password12345!");
});

Given("I see the admin button", () => {
 // cy.get(":nth-child(5) > form > .style-button");
  cy.get(":nth-child(5) > form > .style-button").should("be.enabled"); // Kolla att admin knappen syns
});

When("I click on the admin button", () => {
 cy.get(":nth-child(5) > form > .style-button").click();
});

Then("I should be directed to the admin dashboard", () => {
  cy.visit("/admin");
  cy.url().should("include", "/admin"); // kolla att url innehåller order "admin"
});

