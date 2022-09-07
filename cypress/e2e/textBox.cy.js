const TextBox = require('../pages/TextBoxPage')

describe('Test text box',() => {

    before('Enter to the text box page', () => {
        cy.visit('/text-box');
    });

    it('Enter name', () => {
        const name = 'Nahuel';
        TextBox.enterUserName(name);
    });

    it('Enter email', () => {
        const email = 'test@test.com';
        TextBox.enterMail(email);
    });

    it('Enter adress', () => {
        const currentAdress = 'Test 01';
        const permanentAdress = 'Test 02';
        TextBox.enterCurrentAdress(currentAdress);
        TextBox.enterPermanentAdress(permanentAdress);
    });

    it('Click submit button', () => {
        TextBox.btnSubmitClick();
    })
})