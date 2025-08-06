/// <reference types="cypress" />


// job
describe('Corporate Building', () => {

  beforeEach(() => {
    cy.login('Admin', 'admin123')
  })

  it('General', () => {
    cy.visit('/web/index.php/admin/addTheme')
    cy.get('.oxd-text').should('contain', 'Corporate Branding')
    cy.get('.oxd-text').should('be.visible')
  })

  // Modify theme 
  it('Modify Theme', () => {
    cy.visit('/web/index.php/admin/addTheme')
    // Primary Color
    cy.get('.oxd-color-input-preview').eq(0)
      .click().get('.oxd-input').last().clear().type('#FF5733')
    // Secondary Color
    cy.get('.oxd-color-input-preview').eq(1)
      .click().get('.oxd-input').last().clear().type('#33FF57')
    // Primary Font Color
    cy.get('.oxd-color-input-preview').eq(2)
      .click().get('.oxd-input').last().clear().type('#3357FF')
    // Secondary Font Color
    cy.get('.oxd-color-input-preview').eq(3)
      .click().get('.oxd-input').last().clear().type('#FF33A1')
    // primary gradient
    cy.get('.oxd-color-input-preview').eq(4)
      .click().get('.oxd-input').last().clear().type('#FF5733')
    // secondary gradient
    cy.get('.oxd-color-input-preview').eq(5)
      .click().get('.oxd-input').last().clear().type('#33FF57')

    // file upload
    // logo
    cy.get('input[type="file"]').eq(0).selectFile('cypress/fixtures/test-upload.png', { force: true })
    // client banner
    cy.get('input[type="file"]').eq(1).selectFile('cypress/fixtures/client-banner-test.png', { force: true })
    // login banner
    cy.get('input[type="file"]').eq(2).selectFile('cypress/fixtures/login-banner-test.png', { force: true })

    // publish
    cy.get('.oxd-button--secondary').click()

  })

})