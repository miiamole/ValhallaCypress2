import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am logged in as admin", () => {
  cy.login("admin", "Password12345!");
});

Given("I am at the admin dashboard", () => {
  cy.visit("/admin");
  cy.contains("Admin dashboard").should("be.visible"); // Kolla att orden "Admin dashboard" syns på sidan
});

Given("I see different buttons", () => {
  cy.get(".content > div").should("exist"); // Kolla att adminknapparna finns
});

When("I click the answer button", () => {
  cy.wait(1000)
  cy.get("#B5").click();
});


Then("I should get options to post answers", () => {
  cy.get(".content > div > :nth-child(5)").should("exist");
});

// Given("I have clicked the answer button", () => {
//   cy.visit("/admin");
//   cy.get(".content > div > :nth-child(6)").click();
// });

// Given("I see a search bar", () => {
//  //cy.get(".form-check-label").should("exist"); // denna funkar ej
//   cy.get(".content > :nth-child(11)").should("be.visible");
// });

// Given("I type in {string} and press enter", (heltFel) => {
//  cy.get("textarea.valid").type(heltFel + "{enter}");

// });

// When("I see the filtered list", () => {
//   cy.get("tbody > :nth-child(1) > :nth-child(1)"); // här skulle jag säkert kunna göra det bättre
// });

// When("I click on the edit button of the choosen answer", () => {
//   cy.get(":nth-child(1) > :nth-child(4) > :nth-child(2)").click();
// });

// Then("I should see the edit section", () => {
//   cy.get(":nth-child(16) > textarea.valid");
// });





// Given("I change question to {string}", (a) => {
//  
// });

// Given("I choose {string} to change if answer is correct", (yes) => {
//   cy.get(":nth-child(16) > #IsCorrect");
// });

// When("I press the edit button", () => {
//   cy.get(":nth-child(16) > .btn").click();
// });

// When("a question pops upp", () => {
//   cy.get(
//     '[style="border: 1px solid RED; width:400px; height:150px"] > :nth-child(1)'
//   ).should("be.visible");
// });

// When("I press the yes button", () => {
//   cy.get(
//     '[style="border: 1px solid RED; width:400px; height:150px"] > :nth-child(4)'
//   ).click();
// });

// Then("the edited question will be visible on the page", () => {
//   cy.contains("this will be updated").should("be.visible"); 
// });