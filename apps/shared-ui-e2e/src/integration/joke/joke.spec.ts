describe('shared-ui: Joke component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=joke--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Joke!');
    });
});
