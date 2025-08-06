/// <reference types="cypress" />

describe('Dashboard', () => {

  beforeEach(() => {
    // cy.session('login', () => {
    //   cy.visit('/')
    //   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    //   cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    //   cy.get('.oxd-button').click()
    //   cy.url().should('include', 'dashboard')
    // })

    cy.login('Admin', 'admin123')
  })

  it('forwarding dashboard', () => {
    cy.visit('/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain', 'Dashboard')
    cy.get('.oxd-userdropdown-tab').should('be.visible')
  })
})