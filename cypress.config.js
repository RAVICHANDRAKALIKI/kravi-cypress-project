const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "bun8kb",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

