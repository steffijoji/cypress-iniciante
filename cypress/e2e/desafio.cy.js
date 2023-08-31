/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import home_page from '../support/pages/home_page';
import register_page from '../support/pages/register_page';


const valid_data = require('./..\\fixtures\\desafio_valid_data.json')


describe('Cadastro de usuário', () => {

    beforeEach('Acessar página de cadastro', () => {

        // comando para acessar a página de cadastro
        // usando js em vez do command:
        home_page.accessRegisterPage()
    })

    it('Validar campo nome vazio', () => {

        cy.get('#user').should('not.have.text')
        cy.saveRegister()
        cy.checkMessage('O campo nome deve ser prenchido')
    })

    it('Validar campo e-mail vazio', () => {

        // usando faker para gerar nome
        cy.fillName(faker.person.fullName)
        cy.get('#email').should('not.have.text')
        cy.saveRegister()
        cy.checkMessage('O campo e-mail deve ser prenchido corretamente')
    })

    it('Validar campo e-mail inválido', () => {

        // usando constante declarada em fixtures
        cy.fillName(valid_data.name)
        // digitando o valor diretamente no parâmetro
        cy.fillEmail('email_invalido') 
        cy.saveRegister()
        cy.checkMessage('O campo e-mail deve ser prenchido corretamente')
    })

    it('Validar campo senha vazia', () => {

        cy.fillName(valid_data.name)
        cy.fillEmail(valid_data.email)
        cy.get('#password').should('not.have.text')
        cy.saveRegister()
        cy.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Validar campo senha inválida', () => {

        cy.fillName(valid_data.name)
        cy.fillEmail(valid_data.email)
        cy.fillPassword('123')
        cy.saveRegister()
        cy.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Validar cadastro realizado com sucesso', () => {

/*         cy.fillName(valid_data.name)
        cy.fillEmail(valid_data.email)
        cy.fillPassword(valid_data.password)
        cy.saveRegister()
        cy.checkRegisterSuccess(valid_data.name) */

        // usando js em vez do command:
        register_page.fillName(valid_data.name)
        register_page.fillEmail(valid_data.email)
        register_page.fillPassword(valid_data.password)
        register_page.saveRegister()
        register_page.checkRegisterSuccess(valid_data.name)      
    })
})