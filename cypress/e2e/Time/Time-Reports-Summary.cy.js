/// <reference types="cypress" />

describe('Attendance Punch In Out', () => {

  beforeEach(() => {
    cy.login('Admin', 'admin123')
  })

  it('Project Record', () => {
    cy.visit('/web/index.php/time/displayAttendanceSummaryReportCriteria')
    cy.get('.oxd-table-filter-header').should('contain', 'Attendance Total Summary Report')

    // search name
    cy.get('.oxd-autocomplete-text-input > input').eq(0).type('John Doe') // Employee name
    cy.wait(2000)
    cy.get('.oxd-autocomplete-dropdown').should('be.visible') // Check if the dropdown appears
    cy.get('.oxd-autocomplete-dropdown > :nth-child(1)').click()

    cy.get('.oxd-button').click() // Click the search button


  })
})