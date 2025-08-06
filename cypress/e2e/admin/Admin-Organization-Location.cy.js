/// <reference types="cypress" />


// job
describe('Organization Location', () => {

  beforeEach(() => {
    cy.login('Admin', 'admin123')
  })

  it('General', () => {
    cy.visit('/web/index.php/admin/viewLocations')
    cy.get('.oxd-text').should('contain', 'Location')
    cy.get('.oxd-text').should('be.visible')
  })

  // add Location
  it('add Location', () => {
    cy.visit('/web/index.php/admin/viewLocations')
    cy.get('.oxd-button--secondary').eq(1).click()
    cy.get('.oxd-input').eq(1).type('Test Name')
    cy.get('.oxd-input').eq(2).type('Test City')
    cy.get('.oxd-input').eq(3).type('Test State')
    cy.get('.oxd-input').eq(4).type('Test Zip')
    cy.get('.oxd-select-text').click()
    cy.contains('.oxd-select-option', 'Albania').click()
    cy.get('.oxd-input').eq(5).type(8737824)
    cy.get('.oxd-input').eq(6).type(1231)
    // text area
    cy.get('.oxd-textarea').eq(0).type('Test Address')
    cy.get('.oxd-textarea').eq(1).type('Test Notes')

    cy.get('.oxd-button--secondary').contains('Save').click()
    cy.wait(3000) // wait for the save to complete
  })

  // edit & remove Location
  it('edit and remove Location', () => {
    cy.visit('/web/index.php/admin/viewLocations')

    // edit the Location
    cy.get('.oxd-table-row')
      .contains('Test Name')
      .parents('.oxd-table-row')
      .within(() => {
        cy.get('.oxd-icon-button').last().click()
      })
    cy.get('.oxd-input').eq(1).type(' - Edited') // edit the name
    // click save
    cy.get('.oxd-button--secondary').click()
    cy.wait(2000)
    // remove Location
    cy.get('.oxd-table-row')
      .contains('Test Name')
      .parents('.oxd-table-row')
      .within(() => {
        cy.get('.oxd-icon-button').first().click() // click delete icon
      })
    cy.get('.oxd-button--label-danger').click() // confirm delete
  })

})