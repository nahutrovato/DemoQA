class loginPage{

    elements = {
        userNameLabel: () => cy.get('#userName-label'),
        passwordLabel: () => cy.get('#password-label'),
        usernameInput: () => cy.get('#userName'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('#login')
    }

    userNameLabel(text){
        this.elements.userNameLabel().contains(text);
    }

    passwordLabel(text){
        this.elements.passwordLabel().contains(text);
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