class bStackLogin {

    elements= {
        userName: () => cy.get('#username > .css-yk16xz-control > .css-1hwfws3'),
        userPassword: () => cy.get('#password > .css-yk16xz-control > .css-1hwfws3'),
        buttonClick: () => cy.get('#login-btn')
    }

    bStackUserName(username){
        this.elements.userName(username)
    }

    bStackUserPassword(password){
        this.elements.userPassword(password);
    }

    bStackButtonClick(){
        this.elements.buttonClick().click()
    }
}

export default bStackLogin