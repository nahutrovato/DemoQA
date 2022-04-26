/// <reference types="cypress" />

describe('Login group tests',()=>{
    
    before(()=>{
        cy.visit('/login');
    })

    it('Test wrong user',()=>{
        
        cy.loginTest('testUserName','testPassword');
        
    })
})