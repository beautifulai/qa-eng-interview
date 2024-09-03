describe('beautiful.ai Test POC', () => {

  before(() => {
      cy.bai_setup()
  });

  context('Create presentations from prompts', () => {
      it('should generate slide based on pre-defined prompt', () => {
        cy.get('[placeholder^="Try a prompt"]').as('prompt')
        // select prompt
        cy.contains('Who is Yoda?').click()
        // verify prompt and slide text
        cy.get('@prompt', { timeout: 15_000}).should('have.text', 'Who is Yoda?')
        cy.get('[class^="TextBlock"]', { timeout: 10_000 }).should('contain', 'Yoda was a legendary Jedi Master and powerful Force user who served as the Grand Master of the Jedi Order throughout most of his long life')
      });

      it('should generate slide based on user prompt', () => {
        cy.get('[placeholder^="Try a prompt"]').as('prompt')
        // Clear out previous prompt text and generate new slide
        cy.get('@prompt').clear()
        cy.get('@prompt').type('Top 5 Marvel movies by worldwide gross')
        cy.get('[class*="GenerateButton"]').click()
        // Verify slide text
        cy.contains('div', 'Avengers: Endgame').should('be.visible')
        cy.contains('div', 'Avengers: Infinity War').should('be.visible')
        cy.contains('div', 'Black Panther').should('be.visible')
        cy.contains('div', 'Avengers: Age of Ultron').should('be.visible')
        cy.contains('div', 'The Avengers').should('be.visible')
    });
  });
});
