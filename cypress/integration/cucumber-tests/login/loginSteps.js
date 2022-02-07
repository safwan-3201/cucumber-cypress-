import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given ('I open login page', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
})

When ('I submit login', () => {
    //fill username 
    cy.get('#user_login').type('username')
    //fill password
    cy.get('#user_password').type('password')
    //submit form 
    cy.get('input[name="submit"]').click()
})

Then ('I should see homepage', () => {
    cy.get('#account_summary_tab').should('be.visible')
})

