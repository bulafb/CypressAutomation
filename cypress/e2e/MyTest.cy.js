describe('Yahoo Tests', () => {
    it('Tests for Yahoo Finance', () => {

            cy.visit("https://uk.yahoo.com") //yahoo url
            cy.get("#scroll-down-btn").click()//scroll down button for cookie pop up
            cy.get(".accept-all").click() //accpet all button on cookie pop up)
       //     cy.get("._yb_1505y").click()  //sign in button after loading yahoo.com
       //     cy.get("#login-username").type('FirstTestLogin_12') //username on login page
       //     cy.get("#login-signin").click() //next button after entering username
       //     cy.get("#login-passwd").should('be.visible') //password on login page
       //     cy.get("#login-passwd").type('TestAbc_12!') ////password input field
       //     cy.get("#login-signin").click()//password on login page
            cy.get("#root_7").click() //click Finance after successful login
            cy.get("div[title='Market Data']").should('be.visible') // Market data should be visible after clicking Financ
            cy.wait(1000)
            cy.get("div[title='Market Data']").click() // Click Market Data and a new menu opens up
            cy.wait(1000)
            cy.get("a[title='Calendar']").click()//Click calendar from Market Data menu
            cy.wait(1000)
            cy.get("[href='/calendar/earnings?from=2023-10-08&to=2023-10-14&day=2023-10-13']")//check earnings on a date in october.
            .should('contain', '42')
            . and('contain', 'Earnings')
            cy.get("[href='/calendar/splits?from=2023-10-08&to=2023-10-14&day=2023-10-13']")//check earnings on a date in october.
            .should('contain', '13')
            . and('contain', 'Stock splits')            

    })
 
  })

