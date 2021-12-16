/// <reference types = "Cypress"/>
/// <reference types = "Cypress-iframe"/>
import 'cypress-iframe'

describe ('get headlines from new yorker', function() {
  it("get headlines from new yorker", function() {
    const headLineArray = []
    cy.visit("https://www.newyorker.com/")
    cy.wait(10000)
    cy.title().should('eq','The New Yorker')
    .wait(20000)
    cy.xpath('//h2[@class="summary-item__hed"]')
    .each(($el,index) => {
        cy.writeFile('news_article.txt',$el.text(),{ flag: 'a+' })
        cy.writeFile('news_article.txt','\n',{ flag: 'a+' });
        })  
    })
})
