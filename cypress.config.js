const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "3dq5hc",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
