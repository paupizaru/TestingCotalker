describe('Cotalker website', () => {
    beforeEach(() => {
        /* Cargamos el archivo con las credenciales */
        cy.fixture('login.json').as('loginData');


        cy.server();
        cy.route('POST', 'https://www.cotalker.com/auth/local').as('loginRequest');
        cy.route('GET', 'https://www.cotalker.com/api/users/me').as('loginResponse');


        /* Queremos que visite el sitio web */
        cy.visit('/');
        cy.get('@loginData')
            .then(({ email, password }) => {
                cy.get('#userNameInput').type(email);
                cy.get('#mat-input-1').type(password, { log: false });
                cy.get('#login-button > .mat-button-wrapper').click();
                cy.wait('@loginRequest');
                cy.wait(2000);
                cy.url().should('include', '/onboarding');
            });
        cy.get('#buttonStartApp').click();
        cy.wait('@loginResponse');
        cy.wait(2000);
        cy.url().should('include', '/c/g/summary');
    });

    it('Get giphy', () => {
        cy.get('a[id="5ee3d5108c2ca200081664d4"]').click();
        cy.get('.ng-touched > .cot-web-task-body-1 > .input-field')
            .type('/giphy happy{enter}');
    });

});