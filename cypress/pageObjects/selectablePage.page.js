import BasePage from "./base.page";

class selectableGridPage extends BasePage {

    //Visit "selectable"
    static get url() {
        return "/selectable";
    }

    //Select "Grid"
    static get gridSelector() {
        return cy.get("#demo-tab-grid");
    }

    //Elements of the container
    static get one() {
        return cy.get('#row1 > li:nth-child(1)');
    }
    static get two() {
        return cy.get('#row1 > li:nth-child(2)');
    }
    static get three() {
        return cy.get('#row1 > li:nth-child(3)');
    }
    static get four() {
        return cy.get('#row2 > li:nth-child(1)');
    }
    static get five() {
        return cy.get('#row2 > li:nth-child(2)');
    }
    static get six() {
        return cy.get('#row2 > li:nth-child(3)');
    }
    static get seven() {
        return cy.get('#row3 > li:nth-child(1)');
    }
    static get eight() {
        return cy.get('#row3 > li:nth-child(2)');
    }
    static get nine() {
        return cy.get('#row3 > li:nth-child(3)');
    }

    //Method -> Validation -> "selector" IS highlighted
    static validationShouldBeHighlighted(selector) {
        return selector.should('have.class', 'active');
    }

    //Method -> Validation -> "selector" is NOT highlighted
    static validationShouldNotBeHighlighted(selector) {
        return selector.should('not.have.class', 'active');
    }

}
export default selectableGridPage;