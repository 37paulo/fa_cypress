class CadastroPage {

  visit() {
    cy.visit('https://petlov.vercel.app/signup')
  }

  preencherNome(nome) {
    cy.get('input[name="name"]').type(nome)
  }

  preencherEmail(email) {
    cy.get('input[name="email"]').type(email)
  }

  preencherCep(cep) {
    cy.get('input[placeholder="CEP"]').type(cep)
  }

  buscarCep() {
    cy.get('input[value="Buscar CEP"]').click()

  }

  preencherNumero(numero) {
    cy.get('[name="addressNumber"]').type(numero)

  }

   semPreencherNumero(numeroVazio) {
    cy.get('input[name="addressNumber"]').clear()
  }

  preencherComplemento(complemento) {
    cy.get('input[name="addressDetails"]').type(complemento)

  }

  selecionarPets(pet){
    cy.contains('span', 'Cachorros').click()
  }

  submeterCadastro(){

    cy.get('button[type="submit"]').click()
  }

}

export default new CadastroPage()
