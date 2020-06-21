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
        cy.get('a[id="5ee3d5108c2ca200081664d4"]').click();
    });

    afterEach(() => {
        cy.saveLocalStorage();
    });


    it('Get giphy fail', () => {
        cy.get('.ng-touched > .cot-web-task-body-1 > .input-field')
            .type('/giphy {enter}');
        if (cy.message() == true) {
            cy.log('Gif solicitado con éxito.');
        } else {
            cy.log('Error al solicitar el gif ingresado.');
        }
    });

    it('Get giphy success', () => {
        cy.get('.ng-touched > .cot-web-task-body-1 > .input-field')
            .type('/giphy dolphin{enter}');
        if (cy.message() == true) {
            cy.log('Gif solicitado con éxito.');
        } else {
            cy.log('Error al solicitar el gif ingresado.');
        }
    });
});