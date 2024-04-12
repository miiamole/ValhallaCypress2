Cypress.Commands.add("login", (username, password) => {
  cy.visit("/account/login");
  cy.get(":nth-child(6) > .form-control").type(username);
  cy.get(":nth-child(7) > .form-control").type(password);
  cy.get(".style-button").click();
});

Cypress.Commands.add(
  "register",
  (newUsername, newEmail, newPassword, newConfirmedPassword) => {
    cy.visit("/account/register");
    cy.get(":nth-child(6) > .form-control").type(newUsername);
    cy.get(":nth-child(7) > .form-control").type(newEmail);
    cy.get(":nth-child(8) > .form-control").type(newPassword);
    cy.get(":nth-child(9) > .form-control").type(newConfirmedPassword);
    cy.get(".style-button").click();
  }
);
