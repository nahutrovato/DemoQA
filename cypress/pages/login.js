class login{

    elements = {
        usernameInput: () => cy.get('#username'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('#login')
    }

}

module.exports = new login();