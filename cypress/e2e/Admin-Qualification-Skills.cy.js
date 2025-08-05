/// <reference types="cypress" />


// job
describe('Organization Structure', () => {

  beforeEach(() => {
    cy.login('Admin', 'admin123')
  })

  it('General', () => {
    cy.visit('/web/index.php/admin/viewSkills')
    cy.get('.oxd-text').should('contain', 'Skills')
    cy.get('.oxd-text').should('be.visible')
  })
})