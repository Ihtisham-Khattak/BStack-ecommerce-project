class sauceSignup {
  constructor() {
      (this.firstName = () => cy.get(":nth-child(4) > #first_name")),
      (this.lastName = () => cy.get(":nth-child(5) > #last_name")),
      (this.emailAddress = () => cy.xpath("//input[@type='email']")),
      (this.password = () => cy.xpath("//input[@type='password']")),
      (this.signUpBtn = () => cy.xpath("//input[@value='Create']"));
  }

  sauceVisit() {
    cy.visit("/register");
  }
  sauceFirstName(firstname) {
    this.firstName().type(firstname);
  }
  sauceLastName(lastname) {
    this.lastName().type(lastname);
  }
  sauceEmailAddress(emailaddress) {
    this.emailAddress().type(emailaddress);
  }
  saucePassword(password) {
    this.password().type(password);
  }
  saucePasswordBtn() {
    this.signUpBtn().click();
  }
}

export default sauceSignup;
