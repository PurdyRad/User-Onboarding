// const { iteratee } = require("lodash")
// const { hasUncaughtExceptionCaptureCallback } = require("process")

import { nth } from "lodash"

describe ('testing the inputs', () => {

    beforeEach(() =>{
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[type=text]')
    const emailInput = () => cy.get('input[type=email]')
    const passInput = () => cy.get('input[type=password]')
    const termBox = () => cy.get('input[name=terms]')
    const finalBtn = () => cy.get('button[id=finalBtn]')

    it('testing UI with the name input', () => {
        nameInput()
        .type('Hugh Jass')
        .should('have.value', 'Hugh Jass')
    })

    it('testing UI with the email input', () => {
        emailInput()
        .type('slim@thiccc.com')
        .should('have.value', 'slim@thiccc.com')
        
    })

    it('testing UI with the password input', () => {
        passInput()
        .type('doubleCheekedUp')
        .should('have.value', 'doubleCheekedUp')
        
    })

    it('testing UI with the checkbox', () => {
        termBox().click()
    })

    it('letting the Finalize button run wild?', () => {
        finalBtn().click()
    })
})  