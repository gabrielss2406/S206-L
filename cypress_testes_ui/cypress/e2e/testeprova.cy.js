/// <reference types="cypress"/>

describe('Criando cenário de teste para o site globalsqa.', () => {
    it('Caso de teste: Logando como usuário e mudando o número da conta com logout no final', () => {
        userLogin("Harry Potter");

        cy.get('.borderM > :nth-child(3) > :nth-child(1)').should('have.text', '1004 ');

        cy.get('#accountSelect').select("1005")
        cy.get('.borderM > :nth-child(3) > :nth-child(1)').should('have.text', '1005 ');

        cy.get('.logout').click()
        cy.get('label').should('have.text', "Your Name :")
    })

    it('Caso de teste: Logando como manager, adicionar novo usuário e verificando se aparece na lista', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/');
        cy.get(':nth-child(3) > .btn').click()
        
        // criando user
        cy.get('[ng-class="btnClass1"]').click()
        createUser("Rodrigo", "Maruyama", "1234")
        cy.get('form.ng-dirty > .btn').click()

        // verificando
        cy.get('[ng-class="btnClass3"]').click()
        cy.get(':nth-child(6) > :nth-child(1)').should('have.text', "Rodrigo")
        cy.get(':nth-child(6) > :nth-child(2)').should('have.text', "Maruyama")
        cy.get(':nth-child(6) > :nth-child(3)').should('have.text', "1234")
    })

    it('Caso de teste: (Negativo) Tentando sacar dinheiro inexistente da conta de usuario', () => {
        userLogin("Harry Potter");
        
        cy.get('[ng-class="btnClass3"]').click()
        cy.get('.form-control').type("9999")
        cy.get('form.ng-dirty > .btn').click()

        cy.get('.error').should('have.text', 'Transaction Failed. You can not withdraw amount more than the balance.')
    
        cy.get('.logout').click()
        cy.get('label').should('have.text', "Your Name :")
    })
})

function userLogin(userName){
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/');
    cy.get('.borderM > :nth-child(1) > .btn').click();
    cy.get('#userSelect').select(userName);
    cy.get('form.ng-valid > .btn').click();
}
function createUser(firstName, lastName, code){
    cy.get(':nth-child(1) > .form-control').type(firstName)
    cy.get(':nth-child(2) > .form-control').type(lastName)
    cy.get(':nth-child(3) > .form-control').type(code)
}