/// <reference types="cypress" />

describe('Attendance Punch In Out', () => {

  beforeEach(() => {
    cy.login('Admin', 'admin123')
  })

  it('Project Record', () => {
    cy.visit('/web/index.php/time/displayEmployeeReportCriteria')
    cy.get('.oxd-table-filter-header').should('contain', 'Employee Report')

    // search name
    cy.get('.oxd-autocomplete-text-input > input').eq(0).type('John Doe') // Employee name
    cy.wait(2000)
    cy.get('.oxd-autocomplete-dropdown').should('be.visible') // Check if the dropdown appears
    cy.get('.oxd-autocomplete-dropdown > :nth-child(1)').click()

    // search project
    cy.get('.oxd-autocomplete-text-input > input').eq(1).type('Software') // Employee name
    cy.wait(2000)
    cy.get('.oxd-autocomplete-dropdown').should('be.visible') // Check if the dropdown appears
    cy.get('.oxd-autocomplete-dropdown > :nth-child(1)').click()

    // activity name dropdown
    cy.get('.oxd-select-text-input').eq(0).click()
    cy.get('.oxd-select-dropdown').should('be.visible')
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()

    // View
    cy.get('.oxd-button').click() // Click the search button


  })
})