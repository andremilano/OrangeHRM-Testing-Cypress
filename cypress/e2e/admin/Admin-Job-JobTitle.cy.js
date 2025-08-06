/// <reference types="cypress" />


// job
describe('Admin - Job', () => {

  beforeEach(() => {
    cy.login('Admin', 'admin123')
  })

  it('Job Titles', () => {
    cy.visit('/web/index.php/admin/viewJobTitleList')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain', 'Job')
    cy.get('.oxd-userdropdown-tab').should('be.visible')
  })

  // add new job
  it('add job title', () => {
    cy.visit('/web/index.php/admin/viewJobTitleList')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(2) > .oxd-input').type('Test Job Title')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('This is a test job title description')

    // upload file
    cy.get('input[type="file"]').selectFile('cypress/fixtures/test-upload.png', { force: true })

    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('This is a test job title note')

    // click save
    cy.get('.oxd-button--secondary').click()
    cy.wait(2000)
  })
  // edit and remove
  it('edit and remove job title', () => {
    cy.visit('/web/index.php/admin/viewJobTitleList')

    // edit the job title
    cy.get('.oxd-table-row')
      .contains('Test Job Title')
      .parents('.oxd-table-row')
      .within(() => {
        cy.get('.oxd-icon-button').last().click()
      })
    cy.get('.oxd-textarea').eq(0).type(' - Edited') // edit the description
    // click save
    cy.get('.oxd-button--secondary').click()
    cy.wait(2000)

    // delete the job title
    cy.get('.oxd-table-row')
      .contains('Test Job Title')
      .parents('.oxd-table-row')
      .within(() => {
        cy.get('.oxd-icon-button').first().click() // klik icon delete
      })
    cy.get('.oxd-button--label-danger').click() // konfirmasi delete
  })

})