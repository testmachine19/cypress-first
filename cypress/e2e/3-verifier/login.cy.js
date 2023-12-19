describe("Checking login", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.fixture("login-fixtures.json").as("loginData");
  });

  it("check correct", function () {
    const { username, password } = this.loginData.tests[0];
    cy.login(username, password);
  });

  it("check null username", function () {
    const { username, password } = this.loginData.tests[1];
    cy.login(username, password);
  });

  it("check null password", function () {
    const { username, password } = this.loginData.tests[2];
    cy.login(username, password);
  });

  it("check numbers username", function () {
    const { username, password } = this.loginData.tests[3];
    cy.login(username, password);
  });

  it("check null both", function () {
    const { username, password } = this.loginData.tests[4];
    cy.login(username, password);
  });

  it("check incorrect password", function () {
    const { username, password } = this.loginData.tests[5];
    cy.login(username, password);
  });
});
