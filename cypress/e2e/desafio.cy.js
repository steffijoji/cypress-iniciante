/// <reference types="cypress" />

import { faker } from '@faker-js/faker';


const valid_data = require('./..\\fixtures\\desafio_valid_data.json')


describe('Cadastro de usuário', () => {

    beforeEach('Acessar página de cadastro', () => {
        // comando para acessar a página de cadastro
        cy.accessRegisterPage()
    })

    it('Validar campo nome vazio', () => {
        cy.get('#user')
            .should('not.have.text')

        cy.saveRegister()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo nome deve ser prenchido')
    })

    it('Validar campo e-mail vazio', () => {       
        
        //usando faker para gera nome
        cy.fillName(faker.person.fullName)

        cy.get('#email')
           .should('not.have.text')

        cy.saveRegister()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    })

    it('Validar campo e-mail inválido', () => {           

        //usando constante declarada em fixtures
        cy.fillName(valid_data.name)

        //digitando o valor diretamente no parâmetro
        cy.fillEmail('email_invalido')
            
        cy.saveRegister()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    })

    it.only('Validar campo senha vazia', () => {          

        cy.fillName(valid_data.name)
        cy.fillEmail(valid_data.email)

        cy.get('#password')
            .should('not.have.text')
            
        cy.saveRegister()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Validar campo senha inválida', () => {      

        cy.fillName(valid_data.name)
        cy.fillEmail(valid_data.email)
        cy.fillPassword('123')
        cy.saveRegister()

        cy.get('#errorMessageFirstName')
            .should('be.visible')
            .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Validar cadastro realizado com sucesso', () => {

        cy.fillName(valid_data.name)
        cy.fillEmail(valid_data.email)
        cy.fillPassword(valid_data.password)
        cy.saveRegister()

        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')
        
        cy.get('#swal2-html-container')
        .should('be.visible')
        .should('contain', `Bem-vindo ${valid_data.name}`)
    })
})