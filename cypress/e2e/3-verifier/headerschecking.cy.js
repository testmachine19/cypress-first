describe("Checking header", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-cy="accountMenu"]').click();
    cy.get('[data-cy="login"]').click();
    cy.get("#username").type("st_st");
    cy.get("#password").type("student_1");
    cy.get('[data-cy="submit"]').click();
  });

  it("check entities", () => {
    cy.get('[data-cy="entity"]').click();
    cy.get(".dropdown-item").contains("Task").click();
  });

  it("check entities", () => {
    cy.get('[data-cy="entity"]').click();
    cy.get(".dropdown-item").contains("User Task").click();
  });

  it("check swagger", () => {
    cy.get('[data-cy="docsMenu"]').click();
    cy.get(".dropdown-item").contains("API").click();
  });

  it("check language", () => {
    cy.get(".dropdown show nav-item").click();
    y.get(".dropdown-item").contains("English").click();
  });

  it("check language", () => {
    cy.get(".dropdown show nav-item").click();
    cy.get(".dropdown-item").contains("Русский").click();
  });

  it("check language", () => {
    cy.get(".dropdown show nav-item").click();
    cy.get(".dropdown-item").contains("Français").click();
  });

  it("check language", () => {
    cy.get(".dropdown show nav-item").click();
    cy.get(".dropdown-item").contains("Українська").click();
  });

  it("check account menu", () => {
    cy.get('[data-cy="accountMenu"]').click();
    cy.get(".dropdown-item").contains("Settings").click();
  });

  it("check account menu", () => {
    cy.get('[data-cy="accountMenu"]').click();
    cy.get(".dropdown-item").contains("Password").click();
  });

  it("check account menu", () => {
    cy.get('[data-cy="accountMenu"]').click();
    cy.get(".dropdown-item").contains("Sign out").click();
  });

  it("check home button", () => {
    cy.get(".nav-item").click();
  });
});
