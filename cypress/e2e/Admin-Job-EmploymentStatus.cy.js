/// <reference types="cypress" />


// job
describe('Admin - Employment Status', () => {

  beforeEach(() => {
    cy.login('Admin', 'admin123')
  })


  it('Employment Status Dashboard', () => {
    cy.visit('/web/index.php/admin/employmentStatus')
    cy.get('.orangehrm-header-container').should('contain', 'Employment Status')
    cy.get('.orangehrm-container').should('be.visible')
  })

  // add new employment status
  it('add new employment status', () => {
    cy.visit('/web/index.php/admin/employmentStatus')
    cy.get('.oxd-button--secondary').click()
    cy.get(':nth-child(2) > .oxd-input').type('Test Employment Status')

    // save 
    cy.get('.oxd-button--secondary').click()
    cy.wait(3000) // wait for the save to complete
  })

  // edit & remove
  it('edit and remove employment status', () => {
    cy.visit('/web/index.php/admin/employmentStatus')

    // edit the job title
    cy.get('.oxd-table-row')
      .contains('Test Employment Status')
      .parents('.oxd-table-row')
      .within(() => {
        cy.get('.oxd-icon-button').last().click()
      })
    cy.get('.oxd-input').eq(1).type(' - Edited') // edit the description
    // click save
    cy.get('.oxd-button--secondary').click()
    cy.wait(2000)
    //delete the employment status
    cy.get('.oxd-table-row')
      .contains('Test Employment Status')
      .parents('.oxd-table-row')
      .within(() => {
        cy.get('.oxd-icon-button').first().click() // click delete icon
      })
    cy.get('.oxd-button--label-danger').click() // confirm delete
  })
})