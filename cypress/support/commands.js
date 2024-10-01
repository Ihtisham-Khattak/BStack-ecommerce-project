// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//xPath
///<reference types="cypress-xpath" />;

// Custom Command for Toast Message
Cypress.Commands.add("getToastMessage", (expectedMessage) => {
  const toastSelector = ".Toastify__toast-body > :nth-child(2)";
  // Wait for the toast message to appear
  cy.get(toastSelector, { timeout: 10000 }).should("be.visible");
  cy.get(toastSelector).should("contain.text", expectedMessage);
});

//Login user
Cypress.Commands.add("userCredentials", () => {
  cy.get('input[type="email"]').type("ahsanlive@gmail.com");
  cy.get('input[type="password"]').type("12345678");
  cy.get('button[type="submit"]').should("have.text", "sign in").click();
  cy.contains("Organization Logged In Sucessfully"); // Assuming this is a standard way to check toast message
});
