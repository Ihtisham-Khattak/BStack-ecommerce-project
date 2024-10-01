class stackLogin {
  elements = {
    userName: () => cy.get("#username > .css-yk16xz-control > .css-1hwfws3"),
    selectUserName: () => cy.xpath("//div[text()='demouser']"),
    userPassword: () =>
      cy.get("#password > .css-yk16xz-control > .css-1hwfws3"),
    selectUserPassword: () => cy.xpath("//div[text()='testingisfun99']"),
    submitButton: () => cy.get("#login-btn"),
    errorValidation: () => cy.get(".api-error"),
  };

  loginFunctionality() {
    this.elements.userName().click();
    this.elements.selectUserName().click();
    this.elements.userPassword().click();
    this.elements.selectUserPassword().click();
    this.elements.submitButton().click();
  }

  loginEmptyFunctionality() {
    this.elements.submitButton().click();   
    this.elements.errorValidation().should("have.text", "Invalid Username");
  }
}

export default stackLogin;
