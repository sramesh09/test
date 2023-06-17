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

Cypress.Commands.add('login', (email, Password) => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type(email)
    cy.get('#password').type(Password)
    cy.get('#login-button').click()
})

Cypress.Commands.add('checkItems', (index, item) => {
    let section = 'div.inventory_item_description';
    cy.get(section).eq(index).contains(item.name)
    cy.get(section).eq(index).contains(item.price)
    cy.get('div#inventory_container button').eq(index).should('be.visible')
});








