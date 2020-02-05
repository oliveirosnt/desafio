context('teste desafio', () => {
    beforeEach(() => {
        cy.visit('localhost:8080/')
    })
  
    it('fluxo principal', () => {

        const alerta_confirmacao = cy.stub()

        cy.on('window:alert', alerta_confirmacao)
      
        cy.xpath('//*[@id="app"]/div/form/div[2]/div/input')
            .type('nome teste desafio').should('have.value', 'nome teste desafio')

        cy.xpath('//*[@id="app"]/div/div/div[2]/span')
            .contains('nome teste desafio')

        cy.xpath('//*[@id="app"]/div/form/div[3]/div/input')
            .type('sobrenome teste desafio').should('have.value', 'sobrenome teste desafio')

        cy.xpath('//*[@id="app"]/div/div/div[3]/span')
            .contains('sobrenome teste desafio')

        cy.xpath('//*[@id="app"]/div/form/div[4]/div/input')
            .type('email@testedesafio.com').should('have.value', 'email@testedesafio.com')

        cy.xpath('//*[@id="app"]/div/div/div[4]/span')
            .contains('email@testedesafio.com')

        cy.xpath('//*[@id="app"]/div/form/div[5]/div/input')
            .type('senhatestedesafio').should('have.value', 'senhatestedesafio') 
            
        cy.xpath('//*[@id="app"]/div/div/div[5]/span')
            .contains('senhatestedesafio')

        cy.xpath('//*[@id="app"]/div/form/button')
            .click()
            .then(() => {
              expect(alerta_confirmacao.getCall(0)).to.be.calledWith('Enviado!')              
            })  
        
    })

})