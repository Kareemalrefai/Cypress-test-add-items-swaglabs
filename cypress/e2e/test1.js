///<reference types ="Cypress"/>



it('add all item', () => {
    cy.visit("https://www.saucedemo.com/")
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()


cy.get('[id^=add-to-cart]').its('length').then((idCount) => {
    for (let i = 0; i <= idCount; i++) {
       
      cy.get('[id^=add-to-cart]').eq(i).click();}}
    )

    })