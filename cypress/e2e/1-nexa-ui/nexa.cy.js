// In Cypress, the "this" context is different within arrow functions compared to regular functions.
// Arrow functions do not have their own this context and instead inherit it from the enclosing lexical
// scope. To fix this issue, you need to use a regular function instead of an arrow function for the
// before hook.

describe("Nexa UI", () => {
  // Resuable function for login

  before(function () {
    cy.visit("https://nexa-enterprise-platform.web.app/authentication/sign-in");
    cy.clearCookies({ log: true });
    cy.clearLocalStorage({ log: true });

    cy.fixture("nexa.json").then((respondDate) => {
      this.respondDate = respondDate;
      cy.log("🚀 ~ cy.fixture ~ respondDate:", respondDate);
    });
  });

  // Form Validation
  it.only("Validation Test Case Empty Fields Sign Up Screen", () => {
    cy.xpath('//button[@type="submit"]').should("have.text", "sign in").click();
  });

  it("Validation Test Case Empty username Field Sign Up Screen", function () {
    //Get the input values and pass to callback function.,
    cy.get('input[type="email"]').then(($input) => {
      const emailData = $input.val();
      if (!emailData) {
        cy.get('input[type="email"]').click();
        cy.get('input[type="password"]')
          .type(this.respondDate.password)
          .click();
        cy.get(".MuiTypography-root > p").should(
          "have.text",
          "Email is required"
        );
      } else {
        cy.get('input[type="email"]').click().type(this.respondDate.email);
      }
    });

    cy.get('input[type="password"]').type(this.respondDate.password).click();
    cy.get('button[type="submit"]').should("have.text", "sign in").click();
  });

  it("Validation Test Case Empty Password Field Sign Up Screen", () => {
    cy.get('input[type="email"]').type("ahsanlive@gmail.com").click();
    cy.get('button[type="submit"]').should("have.text", "sign in").click();
  });

  it("Validation Test Case Incorrect Email/Password Field Sign Up Screen", () => {
    cy.get('input[type="email"]').type("ahsanli@gmail.com").click();
    cy.get('input[type="password"]').type("7654321").click();
    cy.get('button[type="submit"]').should("have.text", "sign in").click();
    cy.getToastMessage("Invalid email or password").should(
      "have.text",
      "Invalid email or password"
    );
  });

  it("Validation Test Case Correct Email/Password Field Sign Up Screen", () => {
    cy.get('input[type="email"]').type("ahsanlive@gmail.com").click();
    cy.get('input[type="password"]').type("12345678").click();
    cy.get('button[type="submit"]').should("have.text", "sign in").click();
    cy.getToastMessage("Organization Logged In Sucessfully");
  });

  it("Open sidebar by onclick", () => {
    cy.userCredentials();
    cy.wait(5000);
    cy.get(".css-u2vdid").click();
    cy.get('a[href="/reporting-&-analytics"]')
      .should("have.text", "reportsReporting & Analytics")
      .click();
  });
});
