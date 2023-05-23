// Check if an element is highlighted
Cypress.Commands.add('shouldBeHighlighted', (selector) => {
  cy.get(selector).should('have.class', 'active');
});

// Check if an element is not highlighted
Cypress.Commands.add('shouldNotBeHighlighted', (selector) => {
  cy.get(selector).should('not.have.class', 'active');
});

describe('Selectable', () => {
  context("Selectable grid scenarios", () => {
    beforeEach(() => {
      cy.visit("/selectable");
      cy.get("#demo-tab-grid").click();
    });

    it("passes", () => {
      //Assigning alliases to elements of the container
      cy.get('#row1 > li:nth-child(1)').as('one');
      cy.get('#row1 > li:nth-child(2)').as('two');
      cy.get('#row1 > li:nth-child(3)').as('three');
      cy.get('#row2 > li:nth-child(1)').as('four');
      cy.get('#row2 > li:nth-child(2)').as('five');
      cy.get('#row2 > li:nth-child(3)').as('six');
      cy.get('#row3 > li:nth-child(1)').as('seven');
      cy.get('#row3 > li:nth-child(2)').as('eight');
      cy.get('#row3 > li:nth-child(3)').as('nine');

      cy.get('@two').click(); // Select "Two"
      cy.get('@four').click(); // Select "Four"
      cy.get('@six').click(); // Select "Six"
      cy.get('@eight').click(); // Select "Eight"

      cy.shouldBeHighlighted('@two'); // Validate "Two" is not highlighted
      cy.shouldBeHighlighted('@four'); // Validate "Four" is highlighted
      cy.shouldBeHighlighted('@six'); // Validate "Six" is highlighted
      cy.shouldBeHighlighted('@eight'); // Validate "Eight" is highlighted

      cy.shouldNotBeHighlighted('@one'); // Validate "One" is not highlighted
      cy.shouldNotBeHighlighted('@three'); // Validate "Three" is not highlighted
      cy.shouldNotBeHighlighted('@five'); // Validate "Five" is not highlighted
      cy.shouldNotBeHighlighted('@seven'); // Validate "Seven" is not highlighted
      cy.shouldNotBeHighlighted('@nine'); // Validate "Nine" is not highlighted
    });
  });
});
