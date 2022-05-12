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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("mockarListaUsuarios", () => {
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", 
    [{
        id:"13f0e960-89ac-410c-bc76-defaa5875b3a",
        name:"charada",
        email:"charada@mail.com",
        createdAt:"2022-05-10T06:04:15.760Z",
        updatedAt:"2022-05-10T06:04:15.760Z"
    }]);

});