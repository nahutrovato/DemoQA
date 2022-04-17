/// <reference types="cypress" />

describe('Smoke tests group',()=>{
    it('Smoke demoqa.com test',()=>{
        cy.visit('/');
    })
})