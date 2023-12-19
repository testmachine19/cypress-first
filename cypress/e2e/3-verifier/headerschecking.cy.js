describe("Checking header", () => {
  beforeEach(() => {
    cy.login("st_st", "student_1");
  });

  it("check entities - Task", () => {
    cy.selectEntity("Task");
  });

  it("check entities - User Task", () => {
    cy.selectEntity("User Task");
  });

  it("check swagger", () => {
    cy.get('[data-cy="docsMenu"]').click();
    cy.get(".dropdown-item").contains("API").click();
  });

  it("check language - English", () => {
    cy.selectLanguage("English");
  });

  it("check language - Русский", () => {
    cy.selectLanguage("Русский");
  });

  it("check language - Français", () => {
    cy.selectLanguage("Français");
  });

  it("check language - Українська", () => {
    cy.selectLanguage("Українська");
  });

  it("check account menu - Settings", () => {
    cy.selectAccountMenuItem("Settings");
  });

  it("check account menu - Password", () => {
    cy.selectAccountMenuItem("Password");
  });

  it("check account menu - Sign out", () => {
    cy.selectAccountMenuItem("Sign out");
  });

  it("check home button", () => {
    cy.get(".nav-item").click();
  });
});
