/// <reference types="cypress"/>

describe('Criando cenário de teste para o site do Moodle Graduação do Inatel.', () => {

  it('Caso de teste: Login com erro (sem usuário e senha)', () => {
    cy.visit('https://graduacao.inatel.br/');
    cy.get('#loginbtn').click()
    cy.get('.alert').should('have.text', 'Nome de usuário ou senha errados. Por favor tente outra vez.')
  })

  it('Caso de teste: Entrando como visitante e mudando o site de português para inglês.', () => {
    guestAccess()

    cy.get('#lang-menu-toggle').click()
    cy.get('#lang-action-menu > [href="https://graduacao.inatel.br/?lang=en"]').click()
    
    cy.get('.login').should('contain.text', 'You are currently using guest access')
  })

  it('Caso de teste: Entrando como visitante e tendo acesso bloqueado no curso M01.', () => {
    guestAccess()

    cy.get('.first > .info > .coursename > .aalink').click()
    cy.get('#notice').should('have.text', 'Visitantes não podem acessar este curso. Por favor faça login.')
  })

  it('Caso de teste: Requisitando nova senha no serviço "Perdeu a senha?".', () => {
    cy.visit('https://graduacao.inatel.br/');
    cy.get('.login-form-forgotpassword > a').click()
    
    cy.get('#id_email').type("random@email.com")
    cy.get('#id_submitbuttonemail').click()

    cy.get('#notice > :nth-child(1)').should('have.text', 'Se o nome de usuário ou o email estiverem corretos, um email deve ter sido enviado a você.')
  })

  it('Caso de teste: Mudar linguagem na tela inicial, de português para inglês.', () => {
    cy.visit('https://graduacao.inatel.br/');

    cy.get('.mb-4').should('have.text', 'Acesso a Moodle Inatel - Graduação')

    cy.get('#action-menu-toggle-0').click()
    cy.get('[href="https://graduacao.inatel.br/login/index.php?lang=en"]').click()
    
    cy.get('.mb-4').should('have.text', 'Log in to Moodle Inatel - Graduação')
  })

  it('Caso de teste: Entrando como visitante e tendo acesso bloqueado ao perfil de professor.', () => {
    guestAccess()

    cy.get('.first > .content > .d-flex > .flex-grow-1 > .teachers > :nth-child(1) > a').click()

    cy.get('p').should('have.text', 'Visitantes não podem acessar os perfis de usuário. Acesse com uma conta completa de usuário para continuar.')
  })

})


function guestAccess(){
  cy.visit('https://graduacao.inatel.br/');
  cy.get('#loginguestbtn').click()
  cy.get('.login').should('contain.text', 'Você acessou como visitante')
}