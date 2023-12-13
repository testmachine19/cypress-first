const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "3dq5hc",
  e2e: {
    baseUrl:
      "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
