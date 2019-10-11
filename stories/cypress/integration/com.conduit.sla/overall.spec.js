/// <reference types="Cypress" />

export function overall( url = '/') {

    context('com.conduit.sla : overall', () => {

        beforeEach(() => {
            cy.visit( url )
        });

        it('page.title : should be branded', () => {
            cy.get('title').should('have.text', 'Conduit')
        });

        it('page.return.home-button : should exist', () => {
            cy.get('a.navbar-brand[href="/"]').should('exist');
        });

        it('page.navigation.home : should exist', () => {
            cy.get('nav a.nav-link[href="/"]')
                //.eq(0)
                .should('exist')
                .should('contain', 'Home');
        });

        it('page.navigation.signin : should exist', () => {
            cy.get('nav a.nav-link')
                .eq(1)
                .should('exist')
                .should('have.attr', 'href', '/login')
                .should('contain', 'Sign in');
        });

        it('page.navigation.signup : should exist', () => {
            cy.get('nav a.nav-link')
                .eq(2)
                .should('exist')
                .and('have.attr', 'href', '/register')
                .and('contain', 'Sign up');
        });

        it.skip('page.external.link : should open in new tab', () => {

            if (
                cy.$$('a[href^="http"]').length > 12
            ) {
                cy.get('a[href^="http"]').should('have.attr', 'target', '_blank');
            } else {
                cy.log('No External Links Found');
                // cy.debug();
            }

        });

    });
}

//overall()