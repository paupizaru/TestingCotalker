describe('Cotalker website', () => {
    beforeEach(() => {
        /* Cargamos el archivo con las credenciales */
        cy.fixture('login.json').as('loginData');

        /* cy.server();
        cy.route('POST', 'https://www.cotalker.com/auth/local').as('loginRequest');
        cy.route('GET', 'https://www.cotalker.com/api/users/me').as('loginResponse'); */

        /* Queremos que visite el sitio web */
        cy.visit('/');
        cy.get('@loginData')
            .then(({ email, password }) => {
                cy.login({ email, password });
                // cy.wait('@loginRequest');

                // cy.url().should('include', '/onboarding');
                /* Desconozco si el paso por /onboarding siempre sucede o solo en las cuentas nuevas. De momento fuerzo la redirección hacia summary. */
            });
        cy.visit('/c/g/summary');
        // cy.wait('@loginResponse');
    });

    it('Get giphy fail', () => {
        cy.get('a[id="5ee3d5108c2ca200081664d4"]').click();
        cy.get('.ng-touched > .cot-web-task-body-1 > .input-field')
            .type('/giphy {enter}');
    });

    it('Get giphy success', () => {
        cy.get('a[id="5ee3d5108c2ca200081664d4"]').click();
        cy.get('.ng-touched > .cot-web-task-body-1 > .input-field')
            .type('/giphy dolphin{enter}');
    });
});