import React from 'react'
import Page from '../../app/page.js'

describe('Page Component', () => {
  context('Given I am mounting the component', () => {
    beforeEach(() => {
      cy.mount(<Page />)      
    })
    it('Page mounts', () => {      
    })
    it('With no detectable a11y violations on load', () => {      
      cy.injectAxe()
      // We replace the standard cy.checkA11y() with the following to exclude checks not relevant for components
      cy.checkA11y('', {
        runOnly: {
          type: 'tag',
          values: ['wcag2a']
        },
        rules: {
          'html-has-lang': { enabled: false },
        }
      })
    })
    it('Has expected text', () => {
      cy.contains('h1', 'Hello, People, hello Code!').should('be.visible')
    })
  })
})