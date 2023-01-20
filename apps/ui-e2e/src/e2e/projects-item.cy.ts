import { getCards, getTitleText } from '../support/app.po';

describe('Projects Item', () => {
  beforeEach(() => cy.visit('/projects/quality-report'));

  it('should display title', () => {
    getTitleText().contains('Quality Report');
  });
});
