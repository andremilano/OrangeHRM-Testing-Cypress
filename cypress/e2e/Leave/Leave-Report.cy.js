/// <reference types="cypress" />

describe('Dashboard', () => {

  beforeEach(() => {
    cy.login('Admin', 'admin123')
  })

  it('General Information', () => {
    cy.visit('/web/index.php/leave/viewLeaveBalanceReport')
    cy.get('.oxd-table-filter-header').should('contain', 'Leave Entitlements and Usage Report')
    cy.get('.oxd-userdropdown-tab').should('be.visible')
  })

  // Generate report employee
  it('Generate Report Employee', () => {
    cy.visit('/web/index.php/leave/viewLeaveBalanceReport')
    cy.get('.oxd-radio-wrapper > label').eq(1).click() // Click on the second radio button for "Employee"
    cy.get('.oxd-autocomplete-text-input > input').type('James Butler') // Type in the employee field
    cy.wait(3000)
    cy.get('.oxd-autocomplete-dropdown').should('be.visible') // Check if the dropdown appears
    cy.get('.oxd-autocomplete-dropdown > :nth-child(1)').click()
    // leave period dropdown
    cy.get('.oxd-select-text-input').eq(0).click()
    cy.get('.oxd-select-dropdown').should('be.visible')
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()
    cy.get('.oxd-button').click()

  })


})