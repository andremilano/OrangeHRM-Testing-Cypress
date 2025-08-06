/// <reference types="cypress" />


// job
describe('Nationalities', () => {

  beforeEach(() => {
    cy.login('Admin', 'admin123')
  })

  it('General', () => {
    cy.visit('/web/index.php/admin/nationality')
    cy.get('.oxd-text').should('contain', 'Nationalities')
    cy.get('.oxd-text').should('be.visible')
  })

  // add Skill
  it('add Nationality ', () => {
    cy.visit('/web/index.php/admin/nationality')
    cy.get('.oxd-button').click()
    cy.get('.oxd-input').eq(1).type('Nationality Test Name')
    cy.get('.oxd-button--secondary').contains('Save').click()
    cy.wait(3000) // wait for the save to complete
  })

  // edit & remove Skill
  function findAndActOnNationality(action = 'edit') {
    function searchInPages() {
      cy.get('body').then(($body) => {
        if ($body.text().includes('Nationality Test Name')) {
          cy.get('.oxd-table-row')
            .contains('Nationality Test Name')
            .parents('.oxd-table-row')
            .within(() => {
              if (action === 'edit') {
                cy.get('.oxd-icon-button').last().click()
              } else {
                cy.get('.oxd-icon-button').first().click()
              }
            })

          if (action === 'edit') {
            cy.get('.oxd-input').eq(1).type(' - Edited')
            cy.get('.oxd-button--secondary').click()
          } else {
            cy.get('.oxd-button--label-danger').click()
          }
        } else {
          // Selector Next berdasarkan icon chevron
          cy.get('.oxd-icon.bi-chevron-right')
            .parents('.oxd-pagination-page-item')
            .then($nextBtn => {
              if (!$nextBtn.hasClass('disabled')) {
                cy.wrap($nextBtn).click()
                cy.wait(1000)
                searchInPages()
              } else {
                throw new Error('Nationality Test Name tidak ditemukan di semua halaman!')
              }
            })
        }
      })
    }

    searchInPages()
  }

  it('edit and remove Nationality with icon-based pagination', () => {
    cy.visit('/web/index.php/admin/nationality')

    findAndActOnNationality('edit')
    cy.wait(2000)
    findAndActOnNationality('delete')
  })


})