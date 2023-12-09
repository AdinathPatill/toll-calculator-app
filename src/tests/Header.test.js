// Header.test.js
describe('Header Component', () => {
    it('renders header with correct id', () => {
      cy.visit('/');
      cy.get('header#tollCalculatorHeader').should('exist');
    });
  });
  