/// <reference types="cypress" />

describe('First tests group',()=>{
    it('First test',()=>{
        cy.visit('/');
        cy.log('esto es un log cypress');
    })
})