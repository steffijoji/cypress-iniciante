describe('Get Texts', () => {

    it('Obter texto de um elemento', () => {

        cy.visit('/')
            .get('#top_header')

        cy.get('.top_header_left >  p')
            .then( (element) => {
                console.log(element.text())
            })
    })
})