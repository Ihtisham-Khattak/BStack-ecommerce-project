const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
    baseUrl: "https://bstackdemo.com/",
    // baseUrl: "https://sauce-demo.myshopify.com/account",
  },
});
