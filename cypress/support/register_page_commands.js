/// <reference types="cypress" />

Cypress.Commands.add('saveRegister', () => {
    cy.get('#btnRegister')
        .should('be.visible')
        .click()
})

Cypress.Commands.add('fillName', (name) => {
    cy.get('#user')
        .should('be.visible')
        .type(name)
})

Cypress.Commands.add('fillEmail', (email) => {
    cy.get('#email')
        .should('be.visible')
        .type(email)
})

Cypress.Commands.add('fillPassword', (password) => {
    cy.get('#password')
        .should('be.visible')
        .type(password)
})

Cypress.Commands.add('checkMessage', (message) => {
    cy.get('#errorMessageFirstName')
        .should('be.visible')
        .should('have.text', message)
})

Cypress.Commands.add('checkRegisterSuccess', (name) => {
    cy.get('#swal2-title') 
        .should('be.visible')
        .should('have.text', 'Cadastro realizado!')

    cy.get('#swal2-html-container', {timeout: 3000})
        .should('be.visible')
        .should('contain', `Bem-vindo ${name}`)
})