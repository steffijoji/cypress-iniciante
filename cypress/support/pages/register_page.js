/// <reference types="cypress" />


// Elementos
const elements = {
    buttons: {
        register: '#btnRegister'
    },
    fields: {
        name: '#user',
        email: '#email',
        password: '#password'
    },
    messages: {
        error: '#errorMessageFirstName',
        successTitle: '#swal2-title',
        successSubtitle: '#swal2-html-container'
    }
}


// Ações/Métodos/Funções
export default {
    saveRegister() {
        cy.get(elements.buttons.register)
            .should('be.visible')
            .click()
    },
    
    fillName(name) {
        cy.get(elements.fields.name)
            .should('be.visible')
            .type(name)
    },
    
    fillEmail(email) {
        cy.get(elements.fields.email)
            .should('be.visible')
            .type(email)
    },
    
    fillPassword(password) {
        cy.get(elements.fields.password)
            .should('be.visible')
            .type(password)
    },
    
    checkMessage(message) {
        cy.get(elements.messages.error)
            .should('be.visible')
            .should('have.text', message)
    },
    
    checkRegisterSuccess(name) {
        cy.get(elements.messages.successTitle) 
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')
    
        cy.get(elements.messages.successSubtitle, {timeout: 3000})
            .should('be.visible')
            .should('contain', `Bem-vindo ${name}`)
    }
}