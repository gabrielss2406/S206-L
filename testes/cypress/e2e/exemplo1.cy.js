/// <reference types="cypress"/>

describe('Criando cenário de teste para o site globalsqa', () => {

  it('Caso de teste: Registrando um usuário com sucesso', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login');
    cy.get('.btn-link').click()
    cy.get('#firstName').type('inatel')
    cy.get('#Text1').type('inatel')
    cy.get('#username').type('inatel')
    cy.get('#password').type('inatel')
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text', 'Registration successful')
  })

  it('Caso de teste: Registrando um usuáriocom falha (faltando senha)', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register');
    cy.get('#firstName').type('inatel')
    cy.get('#Text1').type('inatel')
    cy.get('#username').type('inatel')
    cy.get('#password').type('inatel')
    cy.get('#password').clear()
    cy.get('.has-error > .help-block').should('have.text', 'Password is required')
    cy.get('.btn-primary').should('be.disabled')
  })

  it('Caso de teste: Realizando login com sucesso', () => {
    let info = createUser();

    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should('contain.text', info[0])
 })

 it('Caso de teste: Realizando login com erro', () => {
  let info = createUser();

  cy.get('#username').type(info[0]+1)
  cy.get('#password').type(info[1]+1)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should('have.text', 'Username or password is incorrect')
})

 it('Caso de teste: Realizando logout com sucesso', () => {
  let info = createUser();

  cy.get('#username').type(info[0])
  cy.get('#password').type(info[1])
  cy.get('.btn-primary').click()
  cy.get('h1.ng-binding').should('contain.text', info[0])

  cy.get('.btn').click()
  cy.get('h2').should('have.text', 'Login')
 })
})


function createUser(){
  let hours = new Date().getHours().toString()
  let minutes = new Date().getMinutes().toString()
  let seconds = new Date().getSeconds().toString()
  let user = hours+minutes+seconds+'id'
  let password = hours+minutes+seconds+'pass'
  let userInfo = [user,password]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login');
  cy.get('.btn-link').click()
  cy.get('#firstName').type(user)
  cy.get('#Text1').type(user)
  cy.get('#username').type(user)
  cy.get('#password').type(password)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should('contain.text', 'Registration successful')

  return userInfo
}