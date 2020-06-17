describe('Cotalker website', () => {
    beforeEach(() => {
        /* Cargamos el archivo con las credenciales */
        cy.fixture('login.json').as('loginData');


        cy.server();
        cy.route({
            url: 'https://www.cotalker.com/auth/local',
            method: 'POST'
        }).as('loginRequest');

        /* Queremos que visite el sitio web */
        cy.visit('/');
        cy.get('@loginData')
            .then(({ email, password }) => {
                cy.get('#userNameInput').type(email);
                cy.get('#mat-input-1').type(password, { log: false });
                cy.get('#login-button > .mat-button-wrapper').click();
                cy.wait('@loginRequest');
                // cy.wait(2000);
                cy.url().should('include', '/onboarding');
            });
        cy.wait(2000);
        cy.get('#buttonStartApp').click();
        cy.wait(2000);
        cy.url().should('include', '/c/g/summary');
    });

    it('Send form', () => {
        cy.get('a[id="5ee3d5108c2ca200081664d4"]').click();
        cy.get('.survey-button').click();
        cy.get('.cont-textinput').type('TestPaula');
        cy.get('.number').type(23);
        cy.get(':nth-child(1) > .field > .field-button').click();
        cy.get(':nth-child(3) > .field > .field-button').click();
        cy.get('.mat-datepicker-toggle > .mat-icon-button').click();
        cy.get('[aria-label="16 June 2020"] > .mat-calendar-body-cell-content').click();
        cy.get('#mat-input-7').type(1500);
        cy.get('.survey-content-send-button').click();
    });

});