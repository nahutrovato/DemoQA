class loginPage{

    elements = {
        usernameInput: () => cy.get('#userName'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('#login')
    }

    typeUserName(username){
        this.elements.usernameInput().type(username);
    }

    typepassword(password){
        this.elements.passwordInput().type(password);
    }

    clickLoginBtn(){
        this.elements.loginBtn().click();
    }

}

module.exports = new loginPage();