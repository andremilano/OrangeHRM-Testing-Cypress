/// <reference types="cypress" />


// user manajemen
describe('Recruitment', () => {

    beforeEach(() => {
        cy.login('Admin', 'admin123')
    })

    it('General', () => {
        cy.visit('/web/index.php/buzz/viewBuzz')
        cy.get('.orangehrm-buzz-newsfeed > .oxd-text--card-title').should('be.visible')
    })

    // create a post
    it('Create Post', () => {

        cy.visit('/web/index.php/buzz/viewBuzz')
        cy.get('.oxd-buzz-post-input').type('This is a test post for Buzz feature')
        cy.get('.oxd-button').eq(0).click()
        cy.wait(2000) // wait for the post to be created

        cy.get('.orangehrm-buzz-post-body-text').should('contain', 'This is a test post for Buzz feature')
        cy.get('.oxd-buzz-post').should('be.visible')
        cy.get('.orangehrm-buzz-post-footer').first().within(() => {
            cy.get('#heart-svg').click()
        })

        // edit
        cy.get('.orangehrm-buzz-post').first().within(() => {
            cy.get('.oxd-icon-button').click()
            cy.get('.oxd-dropdown-menu').contains('Edit').click()
        })
        cy.get('.orangehrm-buzz-post-modal-header-text > .oxd-buzz-post > .oxd-buzz-post-input').type(' - Edited')
        cy.get('.oxd-form-actions > .oxd-button').click()
        cy.wait(2000) // wait for the post to be edited

        // comment 
        cy.visit('/web/index.php/buzz/viewBuzz')
        cy.get('.orangehrm-buzz-post-footer').first().within(() => {
            cy.get('.oxd-icon').eq(0).click()
        })
        cy.get('.oxd-input').eq(1)
            .type('This is a test comment for Buzz feature{enter}')

        cy.visit('/web/index.php/buzz/viewBuzz')
        cy.get('.orangehrm-buzz-post').first().within(() => {
            cy.get('.oxd-icon-button').click()
            cy.get('.oxd-dropdown-menu').contains('Delete').click()
        })
        cy.get('.oxd-button--label-danger').click() // confirm delete

    })

})