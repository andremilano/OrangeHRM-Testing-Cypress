/// <reference types="cypress" />


// job
describe('Qualification Membership', () => {

  beforeEach(() => {
    cy.login('Admin', 'admin123')
  })

  it('General', () => {
    cy.visit('/web/index.php/admin/membership')
    cy.get('.oxd-text').should('contain', 'Memberships')
    cy.get('.oxd-text').should('be.visible')
  })

  // add Skill
  it('add License', () => {
    cy.visit('/web/index.php/admin/membership')
    cy.get('.oxd-button').click()
    cy.get('.oxd-input').eq(1).type('Test Membership Name')
    cy.get('.oxd-button--secondary').contains('Save').click()
    cy.wait(3000) // wait for the save to complete
  })

  // edit & remove Skill
  it('edit and remove Licenses', () => {
    cy.visit('/web/index.php/admin/membership')

    // edit the Skill
    cy.get('.oxd-table-row')
      .contains('Test Membership Name')
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
      .contains('Test Membership Name')
      .parents('.oxd-table-row')
      .within(() => {
        cy.get('.oxd-icon-button').first().click() // click delete icon
      })
    cy.get('.oxd-button--label-danger').click() // confirm delete
  })
})