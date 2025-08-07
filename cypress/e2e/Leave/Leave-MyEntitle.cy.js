/// <reference types="cypress" />

describe('Dashboard', () => {

  beforeEach(() => {
    cy.login('Admin', 'admin123')
  })

  it('General Information', () => {
    cy.visit('/web/index.php/leave/viewMyLeaveEntitlements')
    cy.get('.oxd-table-filter-header').should('contain', 'My Leave Entitlements')
    cy.get('.oxd-userdropdown-tab').should('be.visible')
  })

  // add Entitlement
  it('Add Entitlement', () => {
    cy.visit('/web/index.php/leave/viewMyLeaveEntitlements')
    cy.get('.oxd-button').eq(1).click() // Click on the first button which is "Add Entitlement"

    cy.get('.oxd-autocomplete-text-input > input').type('Emily Jones') // Type in the employee field
    cy.wait(3000)
    cy.get('.oxd-autocomplete-dropdown').should('be.visible') // Check if the dropdown appears
    cy.get('.oxd-autocomplete-dropdown > :nth-child(1)').click()

    // leave type dropdown
    cy.get('.oxd-select-text-input').eq(0).click()
    cy.get('.oxd-select-dropdown').should('be.visible')
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()

    // leave period
    cy.get('.oxd-select-text-input').eq(1).click()
    cy.get('.oxd-select-dropdown').should('be.visible')
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()

    // entitlement
    cy.get('.oxd-input').eq(1).click().type('10') // Enter entitlement value

    // save
    cy.get('.oxd-button--secondary').click()
    cy.wait(2000)

    // dialog check
    cy.get('.oxd-sheet').should('be.visible')
    cy.get('.orangehrm-modal-footer > .oxd-button--secondary').click() // Close the dialog

    // // edit and remove
    // cy.get('.oxd-table-row')
    //   .contains('CAN - Bereavement')
    //   .parents('.oxd-table-row')
    //   .within(() => {
    //     cy.get('.oxd-icon-button').last().click() // Click edit icon
    //   })
  })

})