/// <reference types="cypress" />


// job
describe('Qualification Skills', () => {

  beforeEach(() => {
    cy.login('Admin', 'admin123')
  })

  it('General', () => {
    cy.visit('/web/index.php/admin/viewSkills')
    cy.get('.oxd-text').should('contain', 'Skills')
    cy.get('.oxd-text').should('be.visible')
  })

  // add Skill
  it('add Skill', () => {
    cy.visit('/web/index.php/admin/viewSkills')
    cy.get('.oxd-button').click()
    cy.get('.oxd-input').eq(1).type('Test Skill Name')
    cy.get('.oxd-textarea').eq(0).type('Test Skill Description')
    cy.get('.oxd-button--secondary').contains('Save').click()
    cy.wait(3000) // wait for the save to complete
  })

  // edit & remove Skill
  it('edit and remove Skill', () => {
    cy.visit('/web/index.php/admin/viewSkills')

    // edit the Skill
    cy.get('.oxd-table-row')
      .contains('Test Skill Name')
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
      .contains('Test Skill Name - Edited')
      .parents('.oxd-table-row')
      .within(() => {
        cy.get('.oxd-icon-button').first().click() // click delete icon
      })
    cy.get('.oxd-button--label-danger').click() // confirm delete
  })
})