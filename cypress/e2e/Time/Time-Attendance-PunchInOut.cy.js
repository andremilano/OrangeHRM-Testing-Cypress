/// <reference types="cypress" />

describe('Attendance Punch In Out', () => {

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

  it('Punch in/ out', () => {
    cy.visit('/web/index.php/attendance/punchIn')
    cy.get('.oxd-text--h6').should('contain', 'Punch In')
    cy.get('.oxd-userdropdown-tab').should('be.visible')

    // Punch In
    cy.get('.oxd-date-input > .oxd-input').type('testing punch in') // Type in the comment
    cy.get('.oxd-date-input > .oxd-input').eq(0).click().clear().type('2023-10-01') // Set date
    cy.get('.oxd-date-input > .oxd-input').eq(1).click().clear().type('10:00 AM') // Set time

    cy.get('.oxd-button--secondary').eq(0).click() // Click Punch In button
  })
})