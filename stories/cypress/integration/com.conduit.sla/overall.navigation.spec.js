/// <reference types="Cypress" />

context('com.conduit.sla : overall', () => {

    it('page.navigation.selection.home : should exist', () => {
        cy.wait(500).visit('/')
            .get('nav a.nav-link.active')
            .should('not.exist');

    });

    it('page.navigation.selection.signin : should exist', () => {
        cy.wait(500).visit('/login')
            .get('nav a.nav-link')
            .eq(1)
            .should('exist')
            .and('have.class', 'active')
    });

    it('page.navigation.selection.signup : should exist', () => {
        cy.wait(500).visit('/register')
            .get('nav a.nav-link')
            .eq(2)
            .should('exist')
            .and('have.class', 'active')

    });
});
