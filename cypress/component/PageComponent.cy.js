import React from 'react'
import Page from '../../app/page.js'

describe('Page Component', () => {
  it('mounts', () => {
    cy.mount(<Page />)
  })
})