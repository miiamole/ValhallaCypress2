import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the login page", () => {
  cy.visit("https://localhost:7255/account/login/");
});

When(
  "I log in with username {string} and password {string}",
  (username, password) => {
    cy.get('input[placeholder="username"]').type(username);
    cy.get('input[placeholder="password"]').type(password);
    cy.contains("button", "Log in").click();
  }
);

Then("I should see {string} in the nav bar", (text) => {
  cy.wait(1000);
  cy.contains("button", text).should("be.visible");
});

When("I navigate to the Admin page", () => {
  cy.contains("button", "Admin").click();
});

Then("I should be on the {string} page", (pageName) => {
  cy.url().should("include", pageName.toLowerCase());
});

When("I click the button containing {string}", (buttonText) => {
  cy.wait(1000);
  cy.contains("button", buttonText).click();
});

Then("A box containing {string} should be visible", (message) => {
  cy.contains("div", message).should("be.visible");
});

When(
  "I create a new category with name {string} and info {string}",
  (categoryName, categoryInfo) => {
    cy.contains("label", "Category Name")
      .next()
      .next()
      .type(categoryName, { force: true });
    cy.contains("label", "Category Info")
      .next()
      .next()
      .type(categoryInfo, { force: true });
    cy.get('input[type="submit"]').click({ force: true });
  }
);

Then("A Category called {string} should be visible", (categoryName) => {
  cy.contains("table", categoryName).should("be.visible");
});

Given(
  "that searchbox with placeholder containing {string} is visible",
  (placeholder) => {
    cy.get(`input[placeholder*="${placeholder}"]`).should("be.visible");
  }
);

When(
  "I search for the newly created category with name {string}",
  (categoryName) => {
    cy.get('input[placeholder="Search by category"]')
      .type(categoryName, { force: true })
      .type("{enter}");
  }
);

Then("Only one category named {string} should be visible", (categoryName) => {
  cy.get("tbody > tr").should("have.length", 1);
  cy.contains("td", categoryName);
});

When("I edit the category name to {string}", (newCategoryName) => {
  cy.get("label")
    .contains("New Category Name")
    .next()
    .next()
    .clear()
    .type(newCategoryName);
});

When("I confirm the edit", () => {
  cy.contains("button", "Edit now").click();
  cy.contains("div", "Are you sure that you want to edit this?").should(
    "be.visible"
  );
  cy.contains("button", "Yes").click();
});

Then("The Category should be named {string}", (expectedName) => {
  cy.contains("table", expectedName).should("exist");
});

When("I delete the category", () => {
  cy.contains("button", "Delete").click();
  cy.contains("div", "Are you sure that you want to delete this?").should(
    "be.visible"
  );
});

When("I confirm the action", () => {
  cy.contains("button", "Yes").click();
});

Then("The Category {string} should not be visible", (categoryName) => {
  cy.contains("table", categoryName).should("not.exist");
});
