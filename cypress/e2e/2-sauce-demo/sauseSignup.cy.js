import sauceSignup from "../../pageobject/sauceAuth/sauceSignup";

describe("Sauce demo Side", () => {
  before(() => {
    cy.clearCookies({ log: true });
    cy.clearLocalStorage({ log: true });
    cy.visit("/register");
  });

  it("Test Case No 1 for SignUp Screen", () => {
    const signUp = new sauceSignup();
    signUp.sauceFirstName("Values")
    signUp.sauceLastName("source");
    signUp.sauceEmailAddress("values_source@gmail.com");
    signUp.saucePassword("1234567");
    signUp.saucePasswordBtn();
    cy.wait(5000)
  });

  it('Product Add into the Cart', () => {
    cy.visit("/")
    cy.get('#product-1 > .product').click()
  });
});
