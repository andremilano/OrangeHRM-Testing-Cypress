/// <reference types="cypress" />


// user manajemen
describe('Report', () => {

  beforeEach(() => {
    cy.login('Admin', 'admin123')
  })

  it('General', () => {
    cy.visit('/web/index.php/pim/viewDefinedPredefinedReports')
    cy.get('.oxd-table-filter-header').should('contain', 'Employee Reports')
    cy.get('.oxd-userdropdown-tab').should('be.visible')
  })

  // search employee
  it('Search Report', () => {
    cy.visit('/web/index.php/pim/viewDefinedPredefinedReports')
    cy.get('.oxd-autocomplete-text-input').eq(0).click().type('Employee Job Details').wait(3000)
    // Tunggu sampai hasil dropdown muncul
    cy.get('.oxd-autocomplete-dropdown > :nth-child(1)')
      .should('be.visible')
      .click()

    cy.get('.oxd-button--secondary').eq(0).click()

  })

  // add employee
  it('Add Report', () => {
    cy.visit('/web/index.php/pim/viewDefinedPredefinedReports')
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get('.oxd-input').eq(1).type('Test Report Name')

    // dropdown select
    // criteria
    cy.get('.oxd-select-text-input').eq(0).click()
    cy.get('.oxd-select-dropdown').contains('Employee Name').click()
    cy.get('.oxd-select-text-input').eq(1).click()
    cy.get('.oxd-select-dropdown').contains('Past Employees Only').click()
    cy.get('.oxd-icon-button').eq(2).click() // click add criteria button
    cy.get('.oxd-autocomplete-text-input').eq(0).click().type('James Butler').wait(3000)
    cy.get('.oxd-autocomplete-dropdown > :nth-child(1)')
      .should('be.visible')
      .click()
    cy.wait(1000)
    // Display Field
    cy.get('.oxd-select-text-input').eq(2).click()
    cy.get('.oxd-select-dropdown').contains('Personal').click()
    cy.get('.oxd-select-text-input').eq(3).click()
    cy.get('.oxd-select-dropdown').contains('Employee Id').click()
    cy.get('.oxd-icon-button').eq(4).click() // click add display field button
    cy.wait(1000)
    cy.get('.oxd-button--secondary').click()
    cy.wait(2000)
    cy.visit('/web/index.php/pim/viewDefinedPredefinedReports')

  })



  it('edit and remove Report with icon-based pagination', () => {
    cy.visit('/web/index.php/pim/viewDefinedPredefinedReports')

    // Edit Employee
    cy.get('.oxd-table-row')
      .contains("Test Report Name")
      .parents('.oxd-table-row')
      .within(() => {
        cy.get('.oxd-icon-button').eq(1).click()
      })
    cy.get('.oxd-input').eq(1).type(' - Edited') // edit the name
    // click save
    cy.get('.oxd-button--secondary').click()

    cy.wait(2000)
    cy.visit('/web/index.php/pim/viewDefinedPredefinedReports')
    // remove Skill
    cy.get('.oxd-table-row')
      .contains("Test Report Name")
      .parents('.oxd-table-row')
      .within(() => {
        cy.get('.oxd-icon-button').first().click() // click delete icon
      })
    cy.get('.oxd-button--label-danger').click()
  })


})
