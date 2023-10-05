describe('My First Test', ()=> {
    let userdata
    before(() => {
    cy.fixture('credentials').then((data) => {
    userdata = data;         
    })
    })
})
  
    it('FixtureDemotest', () => {

        cy.visit("https://uk.yahoo.com")
        cy.get("#scroll-down-btn").click()
        cy.get(".accept-all").click()
        cy.get("._yb_cv4rx").click()    
        cy.get("#login-username").type(userdata.username)
        cy.get("#login-passwd").type(userdata.password)
        cy.get("#login-signin").click()

        if(userdata.username=='FirstTestLogin_12' && userdata.password=='TestAbc_12!')
           {   
            cy.get("#root_7").click()
            cy.get("div[title='Market Data']").should('be.visible')
            cy.get("div[title='Market Data']").click()
            cy.get("a[title='Calendar']").click()
            cy.get("[href='/calendar/ipo?from=2023-10-01&to=2023-10-07&day=2023-10-04']").click()
           }

        else{
                cy.get("div[title='Market Data']").click()

            }
        })
         