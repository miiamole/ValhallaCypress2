import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/* No duplicate steps, this one already in dashboard.js
Given('I am logged in as admin', () => {});*/

Given('I have clicked the answer button', () => {
  cy.visit("/admin");
  cy.wait(500);
  cy.get("#B5").click();
});

Given('I see a search bar', () => {
   cy.get(".form-check-label").should("exist");
});

Given('I type in {string} and press enter', (heltFel) => {
  cy.get("textarea.valid").type(heltFel + "{enter}", { force: true });
});

When('I see the filtered list', () => {
  cy.get("tbody > :nth-child(1) > :nth-child(1)");
});

When('I click on the edit button of the choosen answer', () => {
  cy.get(":nth-child(1) > :nth-child(4) > :nth-child(2)").click({
     force: true,
  });
});

When('I should see the edit section', () => {
   cy.get(":nth-child(16) > textarea.valid");
});

When('I type {string} in the edit answer field', (thisWillBeUpdated) => {
   cy.get(":nth-child(16) > textarea.valid").type(thisWillBeUpdated);
});

When("I change question to {string}", (newQuestion) => {
  // Klicka på rullmenyn
  cy.get(":nth-child(16) > select");
});

When('I choose {string} to change if answer is correct', (yes) => {
  cy.get(":nth-child(16) > #IsCorrect");
});

When('I press the edit button', () => {
  cy.get(":nth-child(16) > .btn").click();
});

When('a question pops upp', () => {
  cy.get(
    '[style="border: 1px solid RED; width:400px; height:150px"] > :nth-child(1)'
  ).should("be.visible");
});

When('I press the yes button', () => {
  cy.get(
    '[style="border: 1px solid RED; width:400px; height:150px"] > :nth-child(4)'
 ).click();
});

Then('the edited question will be visible on the page', () => {
  cy.contains("this will be updated").should("be.visible"); 
});