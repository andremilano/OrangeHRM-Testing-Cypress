/// <reference types="cypress" />

describe('Attendance Punch In Out', () => {

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

  it('Project Record', () => {
    cy.visit('/web/index.php/time/displayProjectReportCriteria')
    cy.get('.oxd-table-filter-header').should('contain', 'Project Report')

    // search Project name by name
    cy.get('.oxd-autocomplete-text-input > input').type('Apache Software ') // Type in the project field
    cy.wait(2000)
    cy.get('.oxd-autocomplete-dropdown').should('be.visible') // Check if the dropdown appears
    cy.get('.oxd-autocomplete-dropdown > :nth-child(1)').click()

    cy.get('.oxd-button').click() // Click the search button

    // verify data show
    cy.get('.oxd-report-table-header').should('contain', 'Records Found')
  })
})