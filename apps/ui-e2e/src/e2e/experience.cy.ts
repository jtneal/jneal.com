import { getCards, getTitleText } from '../support/app.po';

describe('Experience', () => {
  beforeEach(() => cy.visit('/experience'));

  it('should display title', () => {
    getTitleText().contains('Experience');
  });

  it('should display multiple cards', () => {
    getCards().should('have.length.gte', 9);
  });
});
