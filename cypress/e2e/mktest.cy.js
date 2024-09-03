describe('beautiful.ai Test POC', () => {

  before(() => {
      cy.bai_setup()
  });

  context('Create presentations from prompts', () => {
      it('should generate slide based on pre-defined prompt', () => {
          // select prompt
          cy.contains('Who is Yoda?').click()
          // verify prompt and slide text
          cy.get('[placeholder^="Try a prompt"]', { timeout: 15_000}).should('have.text', 'Who is Yoda?')
          cy.get('[class^="TextBlock"]', { timeout: 10_000 }).should('contain', 'Yoda was a legendary Jedi Master and powerful Force user who served as the Grand Master of the Jedi Order throughout most of his long life')
      });

      it('should generate slide based on user prompt', () => {
        //
    });
  });
});
