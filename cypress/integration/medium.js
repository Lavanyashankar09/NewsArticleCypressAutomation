describe ('visit medium website', function() {
// visit the medium website and assert the title

    it("get the title - Pass", function() {
        cy.visit("https://medium.com/@lavanyashankarsv09")
        cy.title().should('eq','Lavanya S – Medium')
    })

    it("get the title - Fail", function() {
        cy.visit("https://medium.com/@lavanyashankarsv09")
        cy.title().should('eq','Medium')
    })
})