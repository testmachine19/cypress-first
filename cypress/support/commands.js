// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("login", (username, password) => {
  cy.visit("/");
  cy.get('[data-cy="accountMenu"]').click();
  cy.get('[data-cy="login"]').click();
  cy.get("#username").type(username);
  cy.get("#password").type(password);
  cy.get('[data-cy="submit"]').click();
});

Cypress.Commands.add("selectEntity", (entityName) => {
  cy.get('[data-cy="entity"]').click();
  cy.get(".dropdown-item").contains(entityName).click();
});

Cypress.Commands.add("selectLanguage", (language) => {
  cy.get(".dropdown.show.nav-item").click();
  cy.get(".dropdown-item").contains(language).click();
});

Cypress.Commands.add("selectAccountMenuItem", (menuItem) => {
  cy.get('[data-cy="accountMenu"]').click();
  cy.get(".dropdown-item").contains(menuItem).click();
});

Cypress.Commands.add("clickHomeButton", () => {
  cy.get(".nav-item").click();
});
