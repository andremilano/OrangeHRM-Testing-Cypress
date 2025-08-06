/// <reference types="cypress" />


// job
describe('Organization General', () => {

  beforeEach(() => {
    cy.login('Admin', 'admin123')
  })


  it('General', () => {
    cy.visit('/web/index.php/admin/viewOrganizationGeneralInformation')
    cy.get('.orangehrm-header-container > .oxd-text').should('contain', 'General Information')
    cy.get('.orangehrm-header-container > .oxd-text').should('be.visible')
  })

  // edit general information
  it('Edit General Information', () => {
    cy.visit('/web/index.php/admin/viewOrganizationGeneralInformation')
    cy.get('.oxd-switch-input').click() // toggle switch to enable editing
    cy.get('.oxd-input').eq(4).clear().type('0123')
    cy.get('.oxd-button').click()
  })

  // // add new employment status
  // it('add & remove Work Shift', () => {
  //   cy.visit('/web/index.php/admin/workShift')
  //   cy.get('.oxd-button--secondary').click()
  //   cy.get(':nth-child(2) > .oxd-input').type('Test Work Shift')
  //   // asign employees
  //   cy.get('.oxd-autocomplete-text-input > input').click().type('Joseph Evans').wait(3000)

  //   // Tunggu sampai hasil dropdown muncul
  //   cy.get('.oxd-autocomplete-dropdown > :nth-child(1)')
  //     .should('be.visible')
  //     .click()
  //   // working hours
  //   cy.get('.oxd-time-input').first().find('.oxd-input').clear().type('08:00 AM')
  //   cy.get('.oxd-time-input').last().find('.oxd-input').clear().type('03:00 PM')



  //   //save
  //   cy.get('.oxd-button--secondary').click()

  //   //delete the employment status
  //   cy.get('.oxd-table-row')
  //     .contains('Test Work Shift')
  //     .parents('.oxd-table-row')
  //     .within(() => {
  //       cy.get('.oxd-icon-button').first().click() // click delete icon
  //     })
  //   cy.get('.oxd-button--label-danger').click() // confirm delete
  // })
})