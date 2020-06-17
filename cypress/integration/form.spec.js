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

    it('Send correct form', () => {
        cy.get('a[id="5ee3d5108c2ca200081664d4"]').click();
        cy.get('.survey-button').click();
        cy.get('.cont-textinput').type('TestPaula1');
        cy.get('.number').type(24);
        cy.get(':nth-child(1) > .field > .field-button').click();
        cy.get(':nth-child(2) > .field > .field-button').click();
        cy.get('.mat-datepicker-toggle > .mat-icon-button').click();
        cy.get('[aria-label="15 June 2020"] > .mat-calendar-body-cell-content').click();
        cy.get('.time > .form').type(1400);
        cy.get('.survey-content-send-button').click();
    });

    it('Send fail, incorrect form ', () => {
        cy.get('a[id="5ee3d5108c2ca200081664d4"]').click();
        cy.get('.survey-button').click();
        cy.get('.cont-textinput').type('462@-_cd');
        /* Ingresaremos un número muy grande */
        cy.get('.number').type(10100);

        /* No seleccionaremos ninguno */
        // cy.get(':nth-child(1) > .field > .field-button').click();
        // cy.get(':nth-child(2) > .field > .field-button').click();
        cy.get('.mat-datepicker-toggle > .mat-icon-button').click();
        cy.get('[aria-label="18 June 2020"] > .mat-calendar-body-cell-content').click();
        /* Ingresaremos una hora que no existe */
        cy.get('.time > .form').type(2500);
        cy.get('.survey-content-send-button').click();
    });
});