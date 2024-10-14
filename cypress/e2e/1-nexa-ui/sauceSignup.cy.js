import sauceSignup from "../../pageobject/sauceAuth/sauceSignup";

it("Test Case Number 01", function () {
  const sauce_signup = new sauceSignup();

  // Load fixture data
  cy.fixture("profile.json").then((responseData) => {
    // Continue with the test steps
    // sauce_signup.sauceVisit("/");
    cy.log(responseData);
    sauce_signup.sauceFirstName(responseData.fname);
    sauce_signup.sauceLastName(responseData.lname);
    sauce_signup.sauceEmailAddress(responseData.email);
    sauce_signup.saucePassword(responseData.password);
    sauce_signup.saucePasswordBtn();
  });
});

// cy.setAllLocalStorage(
//   "user",
//   JSON.stringify({ email: "john18@gmail.com", isLoggedIn: true })
// );
// cy.getAllLocalStorage("user").then((userData) => {
//   const user = JSON.parse(userData);
//   expect(user.isLoggedIn).to.be.true;
// });
// cy.clearAllLocalStorage()
