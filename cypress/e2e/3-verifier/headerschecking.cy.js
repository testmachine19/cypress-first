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

  describe("User Registration", () => {
    it("check correct", () => {
      cy.registration("John", "new12345@gmail.com", "student_1", "student_1");
    });

    it("check numbers in a name", () => {
      cy.registration("12345", "new12346@gmail.com", "student_2", "student_2");
    });

    it("check null in a name", () => {
      cy.registration("", "new12347@gmail.com", "student_3", "student_3");
    });

    it("check russian name", () => {
      cy.registration("Олег", "new12347@gmail.com", "student_4", "student_4");
    });

    it("check incorrect mail", () => {
      cy.registration("Олег", "123456", "student_5", "student_5");
    });

    it("check wrong confirmation", () => {
      cy.registration("loki", "123456567df@mail.ru", "student_6", "student_5");
    });

    it("check null password", () => {
      cy.registration("Floki", "123456567sf@mail.ru", "", "student_5");
    });

    it("check null name and password", () => {
      cy.registration("", "123456567as@mail.ru", "", "student_5");
    });

    it("check special signs", () => {
      cy.registration("#%$&#**$*#", "#$%#$%#%#", "student_1", "student_1");
    });

    it("check same data", () => {
      cy.registration("John", "new12345@gmail.com", "student_1", "student_1");
    });
  });
});
