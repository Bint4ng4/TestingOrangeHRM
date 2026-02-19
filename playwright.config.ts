import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  timeout: 60000,
  testDir: './tests',
  fullyParallel: false, // Diganti dari true agar stabil
  workers: 1,           // Diganti agar sesi tidak bentrok
  retries: 1,           // Ditambah untuk mencoba ulang jika lag
  reporter: 'html',
  
  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    actionTimeout: 15000,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: 'testing-login',
      testMatch: /TC-00[1-3].*\.spec\.ts/,
      use: { 
        ...devices['Desktop Chrome'],
        storageState: { cookies: [], origins: [] }, 
      },
    },
    {
      name: 'testing-features',
      testMatch: /TC-(00[4-9]|0[1-2][0-9]).*\.spec\.ts/,
      dependencies: ['setup'], 
      use: { 
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
    },
  ],
});
