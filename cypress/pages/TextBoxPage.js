class TextBoxPage  {

    elements = {
        userNameInput: () => cy.get('#userName'),
        userEmail: () => cy.get('#userEmail'),
        currentAdress: () => cy.get('#currentAddress'),
        permanentAdress: () => cy.get('#permanentAddress'),
        btnSubmit: () => cy.get('#submit')
    }

    enterUserName(username){
        this.elements.userNameInput().type(username)
    }

    enterMail(email) {
        this.elements.userEmail().type(email)
    }
    
    enterCurrentAdress(currentAdress){
        this.elements.currentAdress().type(currentAdress)
    }

    enterPermanentAdress(permanentAdress){
        this.elements.permanentAdress().type(permanentAdress)
    }

    btnSubmitClick(){
        this.elements.btnSubmit().click()
    };

}
module.exports = new TextBoxPage();