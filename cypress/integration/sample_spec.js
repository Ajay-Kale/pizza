
describe('My First Test', function() {
    it('clicking "type" navigates to a new url', function() {
      cy.visit('https://www.flipkart.com')
      cy.title()
      cy.get('.LM6RPg').type("Samsung A 80")
      cy.get('.vh79eN').click()
      
      //cy.get('#myCheck').click()
      //cy.get('#myCheck1').click()
      //cy.get('#myCheck2').click()
      //cy.get('#myCheck3').click()
      //cy.pause()
      //cy.get('.primary').click()
      
      // Should be on a new URL which includes '/commands/actions'
    //   cy.url().should('include', '/commands/actions')
    })
  })