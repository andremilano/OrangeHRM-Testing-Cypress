/// <reference types="cypress" />

describe('Customers', () => {

  beforeEach(() => {
    cy.login('Admin', 'admin123')
  })

  it('Project Record', () => {
    cy.visit('/web/index.php/time/viewCustomers')
    cy.get('.orangehrm-header-container').should('contain', 'Customers')


    // add new customer
    cy.get('.oxd-button').click() // Click the Add button

    // fill form
    cy.get('.oxd-input').eq(1).type('Test Customer') // Type in the customer name
    cy.get('.oxd-textarea').type('This is a test customer') // Type in the description

    cy.get('.oxd-button--secondary').click() // Click the Save button
  })

  // edit & delete customer
  it('Edit and Delete Customer', () => {
    cy.visit('/web/index.php/time/viewCustomers')

    // edit Customer data
    cy.get('.oxd-table-row')
      .contains('Test Customer')
      .parents('.oxd-table-row')
      .within(() => {
        cy.get('.oxd-icon-button').last().click()
      })
    cy.get('.oxd-input').eq(1).type(' - Edited') // edit the name
    // click save
    cy.get('.oxd-button--secondary').click()
    cy.wait(2000)

    // remove 
    cy.get('.oxd-table-row')
      .contains('Test Customer')
      .parents('.oxd-table-row')
      .within(() => {
        cy.get('.oxd-icon-button').first().click() // click delete icon
      })
    cy.get('.oxd-button--label-danger').click() // confirm delete
  })
})