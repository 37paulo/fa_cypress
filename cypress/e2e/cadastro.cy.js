/// <reference types="cypress" />

import cadastroPage from '../pages/cadastroPage'

describe('Cadastro de usuário', () => {

  beforeEach(function () {
    cy.fixture('usuario').as('usuario')
    cadastroPage.visit()
  })

  it('Deve preencher o cadastro com dados válidos', function () {
    cadastroPage.preencherNome(this.usuario.valido.nome)
    cy.get('input[name="name"]')
      .should('have.value', this.usuario.valido.nome)

    cadastroPage.preencherEmail(this.usuario.valido.email)
    cy.get('input[name="email"]')
      .should('have.value', this.usuario.valido.email)

    cadastroPage.preencherCep(this.usuario.valido.cep)
    cy.get('input[placeholder="CEP"]')
      .should('have.value', this.usuario.valido.cep)

    cadastroPage.buscarCep()

    cadastroPage.preencherNumero(this.usuario.valido.numero)
    cy.get('input[name="addressNumber"]')
      .should('have.value', this.usuario.valido.numero)

    cadastroPage.preencherComplemento(this.usuario.valido.complemento)

    cadastroPage.selecionarPets()
    cadastroPage.submeterCadastro()

    cy.contains('Você fez a diferença!')
      .should('be.visible')
  })

  it('Deve cadastrar usuario sem preencher nome', function () {

    cadastroPage.preencherEmail(this.usuario.valido.email)
    cy.get('input[name="email"]')
      .should('have.value', this.usuario.valido.email)

    cadastroPage.preencherCep(this.usuario.valido.cep)
    cy.get('input[placeholder="CEP"]')
      .should('have.value', this.usuario.valido.cep)

    cadastroPage.buscarCep()

    cadastroPage.preencherNumero(this.usuario.valido.numero)
    cy.get('input[name="addressNumber"]')
      .should('have.value', this.usuario.valido.numero)

    cadastroPage.preencherComplemento(this.usuario.valido.complemento)

    cadastroPage.selecionarPets()
    cadastroPage.submeterCadastro()

    cy.get('span.alert-error')
      .should('be.visible')
      .and('have.text', 'Informe o seu nome completo')
  })

  it('Deve preencher o cadastro sem informar e-mail', function () {
    cadastroPage.preencherNome(this.usuario.valido.nome)
    cy.get('input[name="name"]')
      .should('have.value', this.usuario.valido.nome)

    cadastroPage.preencherCep(this.usuario.valido.cep)
    cy.get('input[placeholder="CEP"]')
      .should('have.value', this.usuario.valido.cep)

    cadastroPage.buscarCep()

    cadastroPage.preencherNumero(this.usuario.valido.numero)
    cy.get('input[name="addressNumber"]')
      .should('have.value', this.usuario.valido.numero)

    cadastroPage.preencherComplemento(this.usuario.valido.complemento)

    cadastroPage.selecionarPets()
    cadastroPage.submeterCadastro()

    cy.get('span.alert-error')
      .should('be.visible')
      .and('have.text', 'Informe o seu melhor email')
  })

  it('Deve preencher o cadastro sem informar cep', function () {
    cadastroPage.preencherNome(this.usuario.valido.nome)
    cy.get('input[name="name"]')
      .should('have.value', this.usuario.valido.nome)

    cadastroPage.preencherEmail(this.usuario.valido.email)
    cy.get('input[name="email"]')
      .should('have.value', this.usuario.valido.email)

    cadastroPage.preencherNumero(this.usuario.valido.numero)
    cy.get('input[name="addressNumber"]')
      .should('have.value', this.usuario.valido.numero)

    cadastroPage.preencherComplemento(this.usuario.valido.complemento)

    cadastroPage.buscarCep()

    cy.get('span.alert-error')
      .should('be.visible')
      .and('have.text', 'Informe um CEP válido')
  })

  it('Deve preencher o cadastro com numero negativo', function () {

    cadastroPage.preencherNome(this.usuario.valido.nome)
    cy.get('input[name="name"]')
      .should('have.value', this.usuario.valido.nome)

    cadastroPage.preencherEmail(this.usuario.valido.email)
    cy.get('input[name="email"]')
      .should('have.value', this.usuario.valido.email)

    cadastroPage.preencherCep(this.usuario.valido.cep)
    cy.get('input[placeholder="CEP"]')
      .should('have.value', this.usuario.valido.cep)

    cadastroPage.buscarCep()

    cadastroPage.preencherNumero(this.usuario.numero.negativo)
    cy.get('input[name="addressNumber"]')
      .should('have.value', this.usuario.numero.negativo)

    cadastroPage.preencherComplemento(this.usuario.valido.complemento)

    cadastroPage.selecionarPets()
    cadastroPage.submeterCadastro()

    cy.get('span.alert-error')
      .should('be.visible')
      .and('have.text', 'Informe um número maior que zero')
  })

  it('Deve preencher o cadastro com numero zerado', function () {

    cadastroPage.preencherNome(this.usuario.valido.nome)
    cy.get('input[name="name"]')
      .should('have.value', this.usuario.valido.nome)

    cadastroPage.preencherEmail(this.usuario.valido.email)
    cy.get('input[name="email"]')
      .should('have.value', this.usuario.valido.email)

    cadastroPage.preencherCep(this.usuario.valido.cep)
    cy.get('input[placeholder="CEP"]')
      .should('have.value', this.usuario.valido.cep)

    cadastroPage.buscarCep()

    cadastroPage.preencherNumero(this.usuario.numero.invalido)
    cy.get('input[name="addressNumber"]')
      .should('have.value', this.usuario.numero.invalido)

    cadastroPage.preencherComplemento(this.usuario.valido.complemento)

    cadastroPage.selecionarPets()
    cadastroPage.submeterCadastro()

    cy.get('span.alert-error')
      .should('be.visible')
      .and('have.text', 'Informe um número maior que zero')
  })

  it('Deve preencher o cadastro sem numero', function () {
    cadastroPage.preencherNome(this.usuario.valido.nome)
    cy.get('input[name="name"]')
      .should('have.value', this.usuario.valido.nome)

    cadastroPage.preencherEmail(this.usuario.valido.email)
    cy.get('input[name="email"]')
      .should('have.value', this.usuario.valido.email)

    cadastroPage.preencherCep(this.usuario.valido.cep)
    cy.get('input[placeholder="CEP"]')
      .should('have.value', this.usuario.valido.cep)

    cadastroPage.buscarCep()

    cadastroPage.semPreencherNumero(this.usuario.numero.vazio)
    cy.get('input[name="addressNumber"]')
      .should('have.value', this.usuario.numero.vazio)

    cadastroPage.preencherComplemento(this.usuario.valido.complemento)

    cadastroPage.selecionarPets()
    cadastroPage.submeterCadastro()

    cy.get('span.alert-error')
      .should('be.visible')
      .and('have.text', 'Informe um número maior que zero')
  })

  it('Deve preencher o cadastro com email sem @', function () {

    cadastroPage.preencherNome(this.usuario.valido.nome)
    cy.get('input[name="name"]')
      .should('have.value', this.usuario.valido.nome)

    cadastroPage.preencherEmail(this.usuario.email.invalido)
    cy.get('input[name="email"]')
      .should('have.value', this.usuario.email.invalido)

    cadastroPage.preencherCep(this.usuario.valido.cep)
    cy.get('input[placeholder="CEP"]')
      .should('have.value', this.usuario.valido.cep)

    cadastroPage.buscarCep()

    cadastroPage.preencherNumero(this.usuario.valido.numero)
    cy.get('input[name="addressNumber"]')
      .should('have.value', this.usuario.valido.numero)

    cadastroPage.preencherComplemento(this.usuario.valido.complemento)

    cadastroPage.selecionarPets()
    cadastroPage.submeterCadastro()

    cy.contains('Informe um email válido')
      .should('be.visible')
  })
})

