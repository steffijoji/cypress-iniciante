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

// Elementos
const elements = {
    buttons: {
        registerPage: '.fa-lock'
    },
    messages: {
        homePageTitle: '#top_header',
        registerPageTitle: '.account_form > h3'
    }
}


// Ações/Métodos/Funções
Cypress.Commands.add('accessRegisterPage', () => {
    // acessa a homepage do site
    cy.visit('/')
        .get(elements.messages.homePageTitle)
        .should('contain', 'Promoções especiais disponíveis.')

    // clica em 'Cadastro'
    cy.get(elements.buttons.registerPage)
        .should('be.visible')
        .click()

    // confere se está na tela de cadastro
    cy.get(elements.messages.registerPageTitle)
        .should('be.visible')
        .should('have.text', 'Cadastro de usuário')
})