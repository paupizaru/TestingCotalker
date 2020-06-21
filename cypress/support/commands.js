// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/* Comando para ejecutar login */
Cypress.Commands.add('login', () => {
    /* API Login */
    cy.request({
        method: 'POST',
        url: Cypress.env('apiURL'),
        body: {
            email: Cypress.env('demoUser'),
            password: Cypress.env('demoPass')
        }
    })
        .then((resp) => {
            expect(resp.status).eq(200);
            if (resp.status == 200) {
                const token = resp.body.token;
                window.localStorage.setItem('authtoken', token);
                expect(localStorage.getItem('authtoken')).to.be.a('string');
                cy.setCookie('authtoken', token, { log: false });
            }
        })
});

/* Comando para obtener user data */
Cypress.Commands.add('data', () => {
    const token = cy.getCookie('authtoken', { log: false });
    cy.server();
    cy.route({
        method: 'GET',
        url: 'https://www.cotalker.com/api/users/me',
        headers: {
            Authorization: token,
        }
    })
        .then((resp) => {
            if (resp.status == 200) return
        })
});

Cypress.Commands.add('message', () => {
    const token = cy.getCookie('authtoken', { log: false });
    cy.server();
    cy.route({
        method: 'GET',
        url: 'https://www.cotalker.com/api/messages/multi',
        headers: {
            Authorization: token,
        }
    })
        .then((resp) => {
            if (resp.status == 200) {
                return true;
            } else {
                return false;
            }
        })
});

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorage", () => {
    Object.keys(localStorage).forEach(key => {
        LOCAL_STORAGE_MEMORY[key] = localStorage[key];
    });
});

Cypress.Commands.add("restoreLocalStorage", () => {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
        localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
    });
});