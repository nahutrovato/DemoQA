/// <reference types="cypress" />

describe('Smoke tests group',()=>{
    let title = 'ToolsQA';
    it('Title demoqa.com test',()=>{
        cy.visit('/');
        cy.title().should('eq',title)
    })
})