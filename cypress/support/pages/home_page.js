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

export default {
    accessRegisterPage() {
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
    }
}