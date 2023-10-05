describe('My First Test', () => {
    it.only('FixtureDemotest', () => {

            cy.visit("https://uk.yahoo.com")
            cy.get("#scroll-down-btn").click()
            cy.get(".accept-all").click()
            cy.get("._yb_cv4rx").click() 
            cy.get("#login-username").type('FirstTestLogin_12')
            cy.get("#login-signin").click()
            cy.get("#login-passwd").should('be.visible')
            cy.get("#login-passwd").type('TestAbc_12!')
            cy.get("#login-signin").click()
            cy.get("#root_7").click()
            cy.get("div[title='Market Data']").should('be.visible')
            cy.get("div[title='Market Data']").click()
            cy.get("a[title='Calendar']").click()
            cy.get("[href='/calendar/ipo?from=2023-10-01&to=2023-10-07&day=2023-10-04']").click()     
            cy.get("._yb_14o97._yb_zvf1c._yb_1aohw").click()//sign out           

    })

    it('click sign in from yahoo', () => {

            cy.get("._yb_cv4rx").click()
            cy.get("#login-username").type('FirstTestLogin_12')
            cy.get("#login-signin").click()
            cy.get("#login-passwd").type('TestAbc_12!')
            cy.get("#login-signin").click()
            cy.get("#root_7").click()
            cy.get("div[class='Mih(32px) Mb(10px) D(ib)--mobp']").click()
   
    })
  })

