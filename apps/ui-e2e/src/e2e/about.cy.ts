import { getTitleText } from '../support/app.po';

describe('About', () => {
  beforeEach(() => cy.visit('/'));

  it('should display title', () => {
    getTitleText().contains('About');
  });
});
