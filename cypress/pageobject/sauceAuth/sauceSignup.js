class sauceSignup {
  elements = {
    firstName: () => cy.get(":nth-child(4) > #first_name"),
    lastName: () => cy.get(":nth-child(5) > #last_name"),
    emailAddress: () => cy.xpath("//input[@type='email']"),
    password: () => cy.xpath("//input[@type='password']"),
    signUpBtn: () => cy.get(".action_bottom > input"),
  };

  sauceFirstName(firstname) {
    this.elements.firstName().type(firstname);
  }
  sauceLastName(lastname) {
    this.elements.lastName().type(lastname);
  }
  sauceEmailAddress(emailaddress) {
    this.elements.emailAddress().type(emailaddress);
  }
  saucePassword(password) {
    this.elements.password().type(password);
  }
  saucePasswordBtn() {
    this.elements.signUpBtn().click();
  }
}

export default sauceSignup;
