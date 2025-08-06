/// <reference types="cypress" />


// job
describe('Admin - Grades', () => {

  beforeEach(() => {
    cy.login('Admin', 'admin123')
  })


  it('Job Grades', () => {
    cy.visit('/web/index.php/admin/viewPayGrades')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain', 'Job')
    cy.get('.oxd-userdropdown-tab').should('be.visible')
  })

  // add new job grade
  it('add & remove new job grade', () => {
    cy.visit('/web/index.php/admin/viewPayGrades')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(2) > .oxd-input').type('Test Job Grade')
    cy.get('.oxd-button--secondary').click()
    cy.wait(2000)
    cy.visit('/web/index.php/admin/viewPayGrades')


    // edit currency grade
    cy.get('.oxd-table-row')
      .contains('Test Job Grade')
      .parents('.oxd-table-row')
      .within(() => {
        cy.get('.oxd-icon-button').last().click() // klik icon edit
      })
    cy.get('.orangehrm-action-header > .oxd-button').click() // klik icon add currency
    cy.wait(2000)
    cy.get('.oxd-select-text').click()

    cy.get('.oxd-select-dropdown')
      .should('be.visible') // tunggu dropdown muncul
      .contains('IDR - Indonesian Rupiah')
      .click()

    // Mengisi input "Minimul salary"
    cy.contains('Minimum Salary')
      .parents('.oxd-input-group')
      .find('input')
      .type('1000')

    // Mengisi input "Maximum salary"
    cy.contains('Maximum Salary')
      .parents('.oxd-input-group')
      .find('input')
      .type('2000')

    // klik save
    cy.get('.oxd-button--secondary').eq(1).click()


  })
})