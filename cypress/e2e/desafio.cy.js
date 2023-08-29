/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

const valid_data = require('./..\\fixtures\\desafio_valid_data.json')


describe('Cadastro de usuário', () => {

    beforeEach('Acessa a tela de cadastro', () => {
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

    it('Validar campo nome vazio', () => {
        cy.get('#user')
            .should('not.have.text')

        cy.get('#btnRegister')
            .click()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo nome deve ser prenchido')
    })

    it('Validar campo e-mail vazio', () => {       
        cy.get('#user')
            //.type(valid_data.name)
            .type(faker.person.fullName())

        cy.get('#email')
            .should('not.have.text')
            
        cy.get('#btnRegister')
            .click()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    })

    it('Validar campo e-mail inválido', () => {           
        cy.get('#user')
            .type(valid_data.name)

        cy.get('#email')
            .type('email_invalido')
            
        cy.get('#btnRegister')
            .click()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    })

    it('Validar campo senha vazia', () => {          
        cy.get('#user')
            .type(valid_data.name)

        cy.get('#email')
            .type(valid_data.email)

        cy.get('#password')
            .should('not.have.text')
            
        cy.get('#btnRegister')
            .click()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Validar campo senha inválida', () => {      
        cy.get('#user')
            .type(valid_data.name)

        cy.get('#email')
            .type(valid_data.email)

        cy.get('#password')
            .type('12345')
            
        cy.get('#btnRegister')
            .click()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro realizado com sucesso', () => {  
        cy.get('#user')
            .type(valid_data.name)

        cy.get('#email')
            .type(valid_data.email)

        cy.get('#password')
            .type(valid_data.password)
            
        cy.get('#btnRegister')
            .click()

        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')
        
        cy.get('#swal2-html-container')
        .should('be.visible')
        .should('contain', `Bem-vindo ${valid_data.name}`)
    })
})