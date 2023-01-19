import { getCards, getTitleText } from '../support/app.po';

describe('Skills', () => {
  beforeEach(() => cy.visit('/skills'));

  it('should display title', () => {
    getTitleText().contains('Skills');
  });

  it('should display multiple cards', () => {
    getCards().should('have.length.gte', 12);
  });
});
