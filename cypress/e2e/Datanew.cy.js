describe("My First Test||Fixtures", ()=> {
    before(() => {
    cy.visit("https://uk.yahoo.com")
      
    });
})

    it('FixtureDemotest', () => {
        cy.fixture("credentials").then((data) => {
        cy.visit("https://uk.yahoo.com") //yahoo url
        cy.get("#scroll-down-btn").click() //scroll down button for cookie pop up
        cy.get(".accept-all").click() //accpet all button on cookie pop up
        cy.get("._yb_cv4rx").click()   //sign in button after loading yahoo.com
        cy.get("#login-username").type(data.username) //username on login page
        cy.get("#login-signin").click()   //next button after entering username

        if(data.username=='FirstTestLogin_12' && data.password=='TestAbc_12!')
           {   
            
            cy.get("#login-passwd").type(data.password) //password input field
            cy.get("#root_7").click() // click Finance after successful login
            cy.get("div[title='Market Data']").should('be.visible') // Market data should be visible after clicking Finance
            cy.get("div[title='Market Data']").click() // Click Market Data and a new menu opens up
            cy.get("a[title='Calendar']").click() //Click calendar from Market Data menu
            cy.get("[href='/calendar/ipo?from=2023-10-01&to=2023-10-07&day=2023-10-04']").click() //Click on 4th october and get earnings
            cy.get("._yb_14o97._yb_zvf1c._yb_1aohw").click()//sign out
           }

        else{
                cy.get("#username-error")
                .should("be.visible")
                
                

            }
        })
    })