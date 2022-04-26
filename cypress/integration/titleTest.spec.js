/// <reference types="cypress" />

describe('Title tests group',()=>{
    let title = 'ToolsQA';
    it('Title demoqa.com test',()=>{
        cy.visit('/');
        cy.title().should('eq',title)
    })
})