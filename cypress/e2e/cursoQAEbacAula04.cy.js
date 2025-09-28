/// <reference types="cypress" />


describe('US-O12-Funcionalidade: Cadastro de membros', () => {
  it('Cadastros de campos obrigatórios', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#signup-firstname').type('Gustavo')
    cy.get('#signup-lastname').type('Motta')
    cy.get('#signup-email').type('guskrei3@gmail.com')
    cy.get('#signup-phone').type('51989908994')
    cy.get('#signup-password').type('Janela123!')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')



  })
})