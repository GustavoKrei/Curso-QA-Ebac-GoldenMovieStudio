/// <reference types="cypress" />


describe('US-O12-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  
    it('Cadastros de campos obrigatórios', () => {
    var email = `gus${Date.now()}@gmail.com`
    cy.preencherCadastro('Gustavo', 'Motta' , email, '51999999999', 'Teste123!')
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')


 
  })
    
  it('Deve validar mensagem de erro com o campo nome inválido', () => {
     cy.preencherCadastro('Gustavo10', 'Motta' , 'guskrei@teste.com', '51999999999', 'Teste123!')
     cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  });




})