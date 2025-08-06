/// <reference types="cypress" />


// user manajemen
describe('User Manajemen', () => {

  beforeEach(() => {
    cy.login('Admin', 'admin123')
  })

  it('forwarding Admin', () => {
    cy.visit('/web/index.php/admin/viewAdminModule')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain', 'Admin')
    cy.get('.oxd-userdropdown-tab').should('be.visible')
  })

  // add new admin
  it('add new admin', () => {
    cy.visit('/web/index.php/admin/viewSystemUsers')
    cy.get('.orangehrm-header-container > .oxd-button').click()
    // user role
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()
    // employee name
    cy.get('.oxd-autocomplete-text-input > input').click().type('Joseph Evans').wait(3000)

    // Tunggu sampai hasil dropdown muncul
    cy.get('.oxd-autocomplete-dropdown > :nth-child(1)')
      .should('be.visible')
      .click()
    // username
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('joseph.evans')
    // status
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()
    // password
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    // confirm password
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

    // click save
    cy.get('.oxd-button--secondary').click()
    cy.wait(3000)
  })

  // search admin
  it('search admin', () => {
    cy.visit('/web/index.php/admin/viewSystemUsers')
    cy.get('.oxd-input-group > :nth-child(2) > .oxd-input').type('joseph.evans')
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()

    // check if the admin is found
    cy.get('.oxd-table-row').should('contain', 'joseph.evans')

  })
  // edit admin
  it('edit & remove admin', () => {
    // edit the admin
    cy.visit('/web/index.php/admin/viewSystemUsers')

    cy.get('.oxd-table-row')
      .contains('joseph.evans')
      .parents('.oxd-table-row')
      .within(() => {
        cy.get('.oxd-icon-button').last().click() // klik icon edit
      })
    // Tunggu sampai dialog muncul
    cy.get('.oxd-input').eq(1).type(' - Edited') // edit username
    cy.get('.oxd-button--secondary').click() // click save
    cy.wait(3000) // wait for the admin to be edited

    // delete the admin
    cy.get('.oxd-table-row')
      .contains('joseph.evans')
      .parents('.oxd-table-row')
      .within(() => {
        cy.get('.oxd-icon-button').first().click() // klik icon delete
      })
    cy.get('.oxd-button--label-danger').click() // konfirmasi delete
  })

})
