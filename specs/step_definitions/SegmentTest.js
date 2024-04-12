import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on segment page", () => {
  cy.wait(2000);
  cy.visit("/account/login/");
  cy.get(":nth-child(6) > .form-control").type("user");
  cy.wait(300);
  cy.get(":nth-child(7) > .form-control").type("Password12345!");
  cy.get(".style-button").click();
  cy.wait(500);
  cy.get("body > div.page > main > article > div > div > a:nth-child(2)").click(
    { force: true }
  );
  cy.wait(2000);
  cy.get(
    "body > div.page > main > article > div > div > a:first-child"
  ).click();
  cy.wait(2000);
});

When("I click on a subcategory", () => {
  cy.wait(2000);
  cy.get(
    "body > div.page > main > article > div > div > a:nth-child(1)"
  ).click();
});

When("I click on another subcategory", () => {
  cy.wait(2000);
  cy.get(":nth-child(3) > form > .style-button").click();
  cy.wait(1000);
  cy.get(
    "body > div.page > main > article > div > div > a:nth-child(2)"
  ).click();
  cy.wait(1000);
  cy.get(
    "body > div.page > main > article > div > div > a:nth-child(2)"
  ).click();
  cy.wait(1000);
  cy.get("body > div.page > main > article > div > div > a").click();
  cy.wait(1000);
});

When("I get answers wrong", () => {
  cy.get(":nth-child(2) > .form-check > .form-check-input").click();
  cy.wait(2000);
  cy.get(".card-footer > .btn-primary").click();
  cy.wait(2000);
  cy.get(".card-footer > :nth-child(3)").click();
  cy.wait(2000);
  cy.get(":nth-child(2) > .form-check > .form-check-input").click();
  cy.wait(2000);
  cy.get(".card-footer > .btn-primary").click();
  cy.wait(2000);
  cy.get(".card-footer > :nth-child(3)").click();
  cy.wait(200);
  cy.get(":nth-child(2) > .form-check > .form-check-input").click();
  cy.wait(200);
  cy.get(".card-footer > .btn-primary").click();
  cy.wait(200);
  cy.get(".card-footer > :nth-child(3)").click();
  cy.wait(200);
  cy.get(":nth-child(2) > .form-check > .form-check-input").click();
  cy.wait(200);
  cy.get(".card-footer > .btn-primary").click();
  cy.wait(200);
  cy.get(".card-footer > :nth-child(3)").click();
  cy.wait(200);
  cy.get(":nth-child(2) > .form-check > .form-check-input").click();
  cy.wait(200);
  cy.get(".card-footer > .btn-primary").click();
  cy.wait(200);
  cy.get(".card-footer > :nth-child(3)").click();
  cy.wait(200);
  cy.get(":nth-child(2) > .form-check > .form-check-input").click();
  cy.wait(200);
  cy.get(".card-footer > .btn-primary").click();
  cy.wait(200);
  cy.get(".card-footer > :nth-child(3)").click();
  cy.wait(300);
});

When("I go back into same segment", () => {
  cy.get(":nth-child(3) > form > .style-button").click();
  cy.wait(300);
  cy.get(
    "body > div.page > main > article > div > div > a:nth-child(2)"
  ).click();
  cy.wait(300);
  cy.get(
    "body > div.page > main > article > div > div > a:nth-child(2)"
  ).click();
  cy.wait(200);
});

When("I click back button", () => {
  cy.get("body > div.page > main > article > div > button").click();
});

Then("I should be in category page", () => {
  cy.url().should("include", "/DisplayAllCategories/DisplayCategory");
});

Then("Next subcategory is locked", () => {
  cy.get(".list-group-item.disabled").should("exist");
});

When("I navigate to segment page", () => {
  cy.get(":nth-child(3) > form > .style-button").click();
  cy.wait(1000);
  cy.get(
    "body > div.page > main > article > div > div > a:nth-child(2)"
  ).click();
  cy.wait(200);
  cy.get(
    "body > div.page > main > article > div > div > a:nth-child(1)"
  ).click();
  cy.wait(200);
});

Then("I can open the next subcategory", () => {
  cy.get(
    "body > div.page > main > article > div > div > a:nth-child(2)"
  ).click();
  cy.wait(200);
  cy.url().should(
    "include",
    "/DisplayAllCategories/DisplayCategory/DisplaySegment/DisplayQuestions/7"
  );
});

When("I get answers right", () => {
  cy.wait(200);
  cy.get(":nth-child(1) > .form-check > .form-check-input").click();
  cy.get(".card-footer > .btn-primary").click({ force: true });
  cy.wait(200);
  cy.get(".card-footer > :nth-child(3)").click();
  cy.wait(200);
  cy.get(":nth-child(1) > .form-check > .form-check-input").click();
  cy.wait(200);
  cy.get(".card-footer > .btn-primary").click();
  cy.wait(200);
  cy.get(".card-footer > :nth-child(3)").click();
  cy.wait(200);
  cy.get(":nth-child(1) > .form-check > .form-check-input").click();
  cy.wait(200);
  cy.get(".card-footer > .btn-primary").click();
  cy.wait(200);
  cy.get(".card-footer > :nth-child(3)").click();
  cy.wait(200);
  cy.get(":nth-child(1) > .form-check > .form-check-input").click();
  cy.wait(200);
  cy.get(".card-footer > .btn-primary").click();
  cy.wait(200);
  cy.get(".card-footer > :nth-child(3)").click();
  cy.wait(200);
  cy.get(":nth-child(1) > .form-check > .form-check-input").click();
  cy.wait(200);
  cy.get(".card-footer > .btn-primary").click();
  cy.wait(200);
  cy.get(".card-footer > :nth-child(3)").click();
  cy.wait(200);
});
