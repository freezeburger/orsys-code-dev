/// <reference types="Cypress" />


context( __filename , function() {
    

    it('Invalid User Input', () => {
        cy.visit('/login').wait(1000)
        
        cy.fixture('com.conduit/stranger.json').then( stranger => {

            cy.get('input')
                .first()
                .type(stranger.email, {delay:100})
                .get('input')
                .eq(1)
                .type(stranger.password, {delay:100})
                .get('button')
                .click()
                .get('body')
                .should('contain','email or password is invalid')
                .screenshot()
        });
      
    });



})

