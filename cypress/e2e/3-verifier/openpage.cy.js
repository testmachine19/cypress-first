describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit(
      "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc"
    );
  });

  it("can check an item on a page", () => {
    cy.get(".nav-item").should("be.visible");
  });
});
