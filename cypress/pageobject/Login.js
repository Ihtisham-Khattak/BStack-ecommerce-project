class Login {
  elements = {
    userEmail: () => cy.get('input[type="email"]'),
    userPassword: () => cy.get('input[type="password'),
    submitButton: () => cy.get('.my-4')
  };

  enterUserEmail(useremail){
    this.elements.userEmail().clear()
    this.elements.userEmail().type(useremail)
  }

  enterUserPassword(userpassword){
    this.elements.userPassword().clear();
    this.elements.userPassword().type(userpassword)
  }

  clickSubmit(){
    this.elements.submitButton().click()
  }
}

export default Login;
