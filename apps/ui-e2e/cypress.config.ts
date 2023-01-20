import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';

export default defineConfig({
  e2e: nxE2EPreset(__dirname),
  reporter: 'junit',
  reporterOptions: {
    mochaFile: '../../test-results/ui-e2e/junit-[hash].xml',
  },
});
