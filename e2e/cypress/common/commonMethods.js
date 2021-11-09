export class CommonMethods {

    //this method visits any page inserted as parameter
    visitPage(pageURL) {
        cy.visit(pageURL);
    };

    //this method will wait and click on any web element inserted as parameter
    clickOnElement(webElement) {
        cy.get(webElement).should('be.visible').click();
    };

    //this method wll click on an element by text
    clickOnElementByText(webElement, text) {
        cy.get(webElement).contains(text).should('be.visible').click({force: true});
    };

    //this method gets and checks if a URL contains the specific string inserted as parameter
    assertUserIsRedirectedToExpectedPage(string) {
        cy.url().should('include', string);
    };

    //this method gets and checks inside of a web element if it contains the specific text inserted as parameter
    assertElementContainsExpectedText(webElement, text) {
        cy.contains(webElement, text);
    };

    assertPageContainsText() {

    }

    //this method is needed in order to be able to run tests without getting cross origin error
    setCrossOriginUncaughtErrorFalse() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    }
}

export const commonMethods = new CommonMethods();