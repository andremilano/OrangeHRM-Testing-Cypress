/// <reference types="cypress" />


// job
describe('Admin - Employment Status', () => {

  beforeEach(() => {
    cy.login('Admin', 'admin123')
  })


  it('Job Category', () => {
    cy.visit('/web/index.php/admin/jobCategory')
    cy.get('.orangehrm-header-container').should('contain', 'Job Categories')
    cy.get('.orangehrm-container').should('be.visible')
  })

  // add new employment status
  it('add & remove Job Categories', () => {
    cy.visit('/web/index.php/admin/jobCategory')
    cy.get('.oxd-button--secondary').click()
    cy.get(':nth-child(2) > .oxd-input').type('Test Job Category')

    // save 
    cy.get('.oxd-button--secondary').click()

    //delete the employment status
    cy.get('.oxd-table-row')
      .contains('Test Job Category')
      .parents('.oxd-table-row')
      .within(() => {
        cy.get('.oxd-icon-button').first().click() // click delete icon
      })
    cy.get('.oxd-button--label-danger').click() // confirm delete
  })
})