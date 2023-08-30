// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />

Cypress.Commands.add('accessRegisterPage', () => {
    // acessa a homepage do site
    cy.visit('/')
        .get('#top_header')
        .should('contain', 'Promoções especiais disponíveis.')

    // clica em 'Cadastro'
    cy.get('.fa-lock')
        .should('be.visible')
        .click()

    // confere se está na tela de cadastro
    cy.get('.account_form > h3')
        .should('be.visible')
        .should('have.text', 'Cadastro de usuário')
})