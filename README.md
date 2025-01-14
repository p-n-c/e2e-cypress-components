# e2e Cypress component testing

How to test components with Cypress.

Created by [People and Code](https://people-and-code.com/)

## Requires Cypress

### Installation

`npm install cypress --save-dev`

### Script

Add a script:

`"cy:open": "cypress open"`

### Setting up Cypress for components

When first running Cypress for component testing, you have to select a front-end framework, in this case, Next.js.

You are then required to run a script to add the [necessary dependencies](https://docs.cypress.io/app/component-testing/get-started), in this case:

`npm install -D next react react-dom`

NB We had already installed these dependencies when we created this app using the web project generator.  
The script set the dependencies to specific versions (instead of latest).

Cypress adds a number of files at this point.

Cypress failed at this point and requested earlier versions of next, react and react-dom (see package.json)

### Axe

Add the [axe plugin](https://www.npmjs.com/package/cypress-axe):

`npm i -D cypress-axe`

Add the e2e.js file and the axe terminal logger under /support.

Both e2e.js and command.js need the line `import 'cypress-axe'` for, respectively, page testing and component testing.
