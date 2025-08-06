/// <reference types="cypress" />


// user manajemen
describe('Employee List', () => {

  beforeEach(() => {
    cy.login('Admin', 'admin123')
  })

  it('General', () => {
    cy.visit('/web/index.php/pim/viewEmployeeList')
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('contain', 'Employee Information')
    cy.get('.oxd-userdropdown-tab').should('be.visible')
  })

  // search employee
  it('Search Employee', () => {
    cy.visit('/web/index.php/pim/viewEmployeeList')
    cy.get('.oxd-autocomplete-text-input').eq(0).click().type('Albert').wait(3000)
    // Tunggu sampai hasil dropdown muncul
    cy.get('.oxd-autocomplete-dropdown > :nth-child(1)')
      .should('be.visible')
      .click()

    cy.get('.oxd-button--secondary').eq(0).click()

  })

  // add employee
  it('Add Employee', () => {
    cy.visit('/web/index.php/pim/viewEmployeeList')
    cy.get('.oxd-button').eq(2).click()

    cy.get('.oxd-input').eq(1).click().type('First')
    cy.get('.oxd-input').eq(2).click().type('Mid')
    cy.get('.oxd-input').eq(3).click().type('End')
    cy.get('.oxd-input').eq(4).click().clear().type(111)

    cy.get('.oxd-button--secondary').click()
    cy.wait(2000)
  })



  it('edit and remove Employee with icon-based pagination', () => {
    cy.visit('/web/index.php/pim/viewEmployeeList')

    // Edit Employee
    cy.get('.oxd-table-row')
      .contains(111)
      .parents('.oxd-table-row')
      .within(() => {
        cy.get('.oxd-icon-button').first().click()
      })
    cy.get('.oxd-input').eq(1).type(' - Edited') // edit the name
    // click save
    cy.get('.oxd-button').eq(0).click()
    cy.wait(2000)
    cy.visit('/web/index.php/pim/viewEmployeeList')

    cy.wait(2000)
    // remove Skill
    cy.get('.oxd-table-row')
      .contains(111)
      .parents('.oxd-table-row')
      .within(() => {
        cy.get('.oxd-icon-button').last().click() // click delete icon
      })
    cy.get('.oxd-button--label-danger').click()
  })


})
