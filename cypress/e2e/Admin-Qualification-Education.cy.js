/// <reference types="cypress" />


// job
describe('Qualification Education', () => {

  beforeEach(() => {
    cy.login('Admin', 'admin123')
  })

  it('General', () => {
    cy.visit('/web/index.php/admin/viewEducation')
    cy.get('.oxd-text').should('contain', 'Education')
    cy.get('.oxd-text').should('be.visible')
  })

  // add Skill
  it('add Education ', () => {
    cy.visit('/web/index.php/admin/viewEducation')
    cy.get('.oxd-button').click()
    cy.get('.oxd-input').eq(1).type('Test Level Education Name')
    cy.get('.oxd-button--secondary').contains('Save').click()
    cy.wait(3000) // wait for the save to complete
  })

  // edit & remove Skill
  it('edit and remove Education Level', () => {
    cy.visit('/web/index.php/admin/viewEducation')

    // edit the Skill
    cy.get('.oxd-table-row')
      .contains('Test Level Education Name')
      .parents('.oxd-table-row')
      .within(() => {
        cy.get('.oxd-icon-button').last().click()
      })
    cy.get('.oxd-input').eq(1).type(' - Edited') // edit the name
    // click save
    cy.get('.oxd-button--secondary').click()
    cy.wait(2000)
    // remove Skill
    cy.get('.oxd-table-row')
      .contains('Test Level Education Name - Edited')
      .parents('.oxd-table-row')
      .within(() => {
        cy.get('.oxd-icon-button').first().click() // click delete icon
      })
    cy.get('.oxd-button--label-danger').click() // confirm delete
  })
})