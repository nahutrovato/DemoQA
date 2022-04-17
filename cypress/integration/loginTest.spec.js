/// <reference types="cypress" />

describe('Login group tests',()=>{
    before(()=>{
        cy.visit('https://demoqa.com/login');
    })
    it('Test wrong user',()=>{
        cy.loginTest('testUserName','testPassword');
        
        let wrong = cy.get('#name');
        if(wrong){
            cy.log('Test pass')
        }
        
    })
})