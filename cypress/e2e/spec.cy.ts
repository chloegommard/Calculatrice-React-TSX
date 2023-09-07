/// <reference types="cypress" />

describe('My First Test', () => {
  it('operations qui marchent', () => {
    cy.visit("http://localhost:5173/calculatrice-react-tsx"); 
    cy.get('button[id=1]').click();
    cy.get('button[id=\'+\']').click();
    cy.get('button[id=3]').click();
    cy.get('button[id=equal]').click();
    cy.get('#screen').should('have.value', '4');
    cy.get('button[id=\'/\']').click();
    cy.get('button[id=2]').click();
    cy.get('button[id=equal]').click();
    cy.get('#screen').should('have.value', '2');
    cy.get('button[id=clear]').click();
    cy.get('#screen').should('have.value', '');

  })
  it('operations qui marchent pas', () => {
    cy.visit("http://localhost:5173/calculatrice-react-tsx"); 
    cy.get('button[id=1]').click();
    cy.get('#screen').should('have.value', '1');

    cy.get('button[id=\'+\']').click();
    cy.get('#screen').should('have.value', '1+');

    cy.get('button[id=equal]').click();
    
    cy.get('#screen').should('have.value', '');


  })
  it('operations avec decimales', () => {
    cy.visit("http://localhost:5173/calculatrice-react-tsx"); 
    cy.get('button[id=1]').click();
    cy.get('#screen').should('have.value', '1');

    cy.get('button[id=\'.\']').click();
    cy.get('#screen').should('have.value', '1.');
    cy.get('button[id=2]').click();
    cy.get('#screen').should('have.value', '1.2');
    cy.get('button[id=\'+\']').click();
    cy.get('button[id=3]').click();
    cy.get('button[id=equal]').click();
    cy.get('#screen').should('have.value', '4.2');


  })
  it('operations soustraction', () => {
    cy.visit("http://localhost:5173/calculatrice-react-tsx"); 
    cy.get('button[id=1]').click();

    cy.get('button[id=\'—\']').click();
    cy.get('button[id=\'-\']').click();
    cy.get('button[id=2]').click();
    cy.get('button[id=equal]').click();
    cy.get('#screen').should('have.value', '3');


  })
})