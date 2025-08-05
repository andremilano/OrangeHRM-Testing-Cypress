/// <reference types="cypress" />


// job
describe('Organization Structure', () => {

  beforeEach(() => {
    cy.login('Admin', 'admin123')
  })

  it('General', () => {
    cy.visit('/web/index.php/admin/viewCompanyStructure')
    cy.get('.oxd-text').should('contain', 'Organization Structure')
    cy.get('.oxd-text').should('be.visible')
  })

  // enable add structure
  it('Add & remove Structure', () => {
    cy.visit('/web/index.php/admin/viewCompanyStructure')
    cy.get('.oxd-switch-input').click() // toggle switch to enable adding structure
    cy.get('.oxd-button').click()

    // fill form
    // Tunggu sampai dialog muncul
    cy.get('.oxd-dialog-container-default--inner').should('be.visible')

    // Lalu cari input di dalam dialog itu
    cy.get('.oxd-dialog-container-default--inner')
      .find('.oxd-input').eq(0)
      .should('be.visible')
      .type('11') // Unit ID

    cy.get('.oxd-dialog-container-default--inner')
      .find('.oxd-input').eq(1)
      .should('be.visible')
      .type('Testing Name Unit ID')

    cy.get('.oxd-dialog-container-default--inner')
      .find('.oxd-textarea')
      .should('be.visible')
      .type('Testing Description')

    cy.get('.oxd-dialog-container-default--inner')
      .find('.oxd-button--secondary')
      .click()

    cy.wait(2000) // wait for the structure to be added
    // remove Structure
    cy.get('.org-container')
    cy.contains('.oxd-sheet', 'Testing Name Unit ID')
      .within(() => {
        cy.get('.oxd-icon-button').eq(0).click() // klik delete, asumsi tombol ke-2
      })
    cy.get('.oxd-button--label-danger').click() // confirm delete
  })




})