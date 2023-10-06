describe('My First Test Suite', () => {
    it('Test Yahoo Login', () => {

            cy.visit("https://uk.yahoo.com") //yahoo url
            cy.get("#scroll-down-btn").click()//scroll down button for cookie pop up
            cy.get(".accept-all").click() //accpet all button on cookie pop up
          // cy.get("._yb_cv4rx").click()  //sign in button after loading yahoo.com
          // cy.get("#login-username").type('FirstTestLogin_12') //username on login page
          // cy.get("#login-signin").click() //next button after entering username
          // cy.get("#login-passwd").should('be.visible') //password on login page
          // cy.get("#login-passwd").type('TestAbc_12!') ////password input field
          //  cy.get("#login-signin").click()//password on login page
            cy.get("#root_7").click() //click Finance after successful login
            cy.get("div[title='Market Data']").should('be.visible') // Market data should be visible after clicking Financ
            cy.get("div[title='Market Data']").click() // Click Market Data and a new menu opens up
            cy.get("a[title='Calendar']").click()//Click calendar from Market Data menu
            cy.get("[href='/calendar/earnings?from=2023-10-01&to=2023-10-07&day=2023-10-04'] > span")//check earnings on a date in october.
            .should('contain', 'Earnings')   
                 

    })
 
  })

