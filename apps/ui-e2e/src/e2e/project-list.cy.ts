import { getCards, getTitleText } from '../support/app.po';

describe('Projects List', () => {
  beforeEach(() => cy.visit('/projects'));

  it('should display title', () => {
    getTitleText().contains('Projects');
  });

  it('should display multiple cards', () => {
    getCards().should('have.length.gte', 81);
  });
});
