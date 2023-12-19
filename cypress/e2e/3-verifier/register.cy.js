describe("User Registration", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.fixture("registration-fixtures.json").as("registrationData");
  });

  it("check correct", function () {
    const { name, email, password, confirmation } =
      this.registrationData.registrationTests[0];
    cy.registration(name, email, password, confirmation).then((response) => {
      console.log(response);
    });
  });

  it("check numbers in a name", function () {
    const { name, email, password, confirmation } =
      this.registrationData.registrationTests[1];
    cy.registration(name, email, password, confirmation).then((response) => {
      console.log(response);
    });
  });

  it("check null in a name", function () {
    const { name, email, password, confirmation } =
      this.registrationData.registrationTests[2];
    cy.registration(name, email, password, confirmation).then((response) => {
      console.log(response);
    });
  });

  it("check russian name", function () {
    const { name, email, password, confirmation } =
      this.registrationData.registrationTests[3];
    cy.registration(name, email, password, confirmation).then((response) => {
      console.log(response);
    });
  });

  it("check incorrect mail", function () {
    const { name, email, password, confirmation } =
      this.registrationData.registrationTests[4];
    cy.registration(name, email, password, confirmation).then((response) => {
      console.log(response);
    });
  });

  it("check wrong confirmation", function () {
    const { name, email, password, confirmation } =
      this.registrationData.registrationTests[5];
    cy.registration(name, email, password, confirmation).then((response) => {
      console.log(response);
    });
  });
});
