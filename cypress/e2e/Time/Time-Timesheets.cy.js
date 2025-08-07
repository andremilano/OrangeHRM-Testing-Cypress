/// <reference types="cypress" />

describe('Timesheets', () => {

  beforeEach(() => {
    // cy.session('login', () => {
    //   cy.visit('/')
    //   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    //   cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    //   cy.get('.oxd-button').click()
    //   cy.url().should('include', 'dashboard')
    // })

    cy.login('Admin', 'admin123')
  })

  it('forwarding dashboard', () => {
    cy.visit('/web/index.php/time/viewEmployeeTimesheet')
    cy.get('.orangehrm-header-container').should('contain', 'Timesheets Pending Action')
    cy.get('.oxd-userdropdown-tab').should('be.visible')
  })

  // search employee by name
  it('Search Employee by Name', () => {
    cy.visit('/web/index.php/time/viewEmployeeTimesheet')
    cy.get('.oxd-autocomplete-text-input > input').type('James Butler') // Type in the employee field
    cy.wait(3000)
    cy.get('.oxd-autocomplete-dropdown').should('be.visible') // Check if the dropdown appears
    cy.get('.oxd-autocomplete-dropdown > :nth-child(1)').click()
    cy.get('.oxd-form-actions > .oxd-button').click() // Click the search button

    cy.get('.oxd-alert')
      .should('be.visible')
      .and('contain', 'No Timesheets Found')
  })
})