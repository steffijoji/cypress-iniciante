/// <reference types="cypress" />

describe('Interações', () => {

it('Digitar em um campo', () => {

    cy.visit('/')
        .get('#top_header')

    cy.get('.form-control')
        .type('email@teste.com')
})

it('Click', () => {
    cy.visit('/')
        .get('#top_header')

    // click normal
    cy.get('.fa-user')
        .click()

    // click duplo: .dbclick()
    // click botão direito: rightclick()

    //click por coordenadas
    cy.get('.fa-user')
        .click(100, 100, {force: true})
})

it('Pressionar tecla enter', () => {
    cy.get('.form-control')
        .type('email@teste.com{enter}')

})

it('Select', () => {

    cy.visit('/')
        .get('#top_header')

    cy.get('.footer_one_widget')
        .contains('Checkout View Two')
        .click()
})

it.only('Checkbox e Radio Button', () => {
    cy.visit('/')
        .get('#top_header')

    cy.get('.footer_one_widget')
        .contains('Checkout View One')
        .click()

    cy.get('#materialUnchecked')
        .check()
        .uncheck()

    cy.get('#country')
        .select('Afghanistan')
}) 
    
})