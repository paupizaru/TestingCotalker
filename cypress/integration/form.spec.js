describe('Cotalker website', () => {

    before(() => {
        cy.visit('/');
        cy.login();
        cy.saveLocalStorage();
    });

    beforeEach(() => {
        cy.restoreLocalStorage();
        cy.data();
        cy.visit('/c/g/summary');
    });

    afterEach(() => {
        cy.saveLocalStorage();
    });

    it('Send correct form', (form) => {
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
        if (cy.message() == true) {
            cy.log('Formulario enviado con éxito.');
        } else {
            cy.log('Error al enviar el formulario.');
        }
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
        if (cy.message() == true) {
            cy.log('Formulario enviado con éxito.');
        } else {
            cy.log('Error al enviar el formulario.');
        }
    });
});