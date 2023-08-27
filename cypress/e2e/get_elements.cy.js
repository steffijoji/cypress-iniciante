describe('Get Elementos', () => {       //1º parâmentro é o nome do que vamos testar, 2º é o nome da função (nesse caso função anônima/aerofunction)
    
    it('Procurar/selecionar elementos', () => {

        // get() - selecionar elementos
        cy.visit('/')
            .get('.header-logo')

        // contains() - para encontrar elementos por texto
        // geralmente diminuimos o escopo com um get()
        cy.get('#top_header')
            .contains('Login')


        // find() - para encontrar elementos por selector
        // geralmente diminuimos o escopo com um get()
        cy.get('#top_header')
            .find('.fa-user')

        // as() - alias - criar apelidos (atalhos) para grandes comandos
        cy.get('#top_header').as('cabecalho')
        cy.get('cabecalho')
    }) 

}) 