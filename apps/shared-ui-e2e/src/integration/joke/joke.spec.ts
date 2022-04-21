describe('shared-ui: Joke component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=joke--primary&args=joke:Some+odd+dad-joke')
  );

  it('should display the joke', () => {
    cy.get('[data-testid="thejoke"]').should('contain', 'Some odd dad-joke');
  });
});
