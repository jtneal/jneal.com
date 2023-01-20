import { getCards, getTitleText } from '../support/app.po';

describe('Awards', () => {
  beforeEach(() => cy.visit('/awards'));

  it('should display title', () => {
    getTitleText().contains('Awards');
  });

  it('should display multiple cards', () => {
    getCards().should('have.length.gte', 12);
  });
});
