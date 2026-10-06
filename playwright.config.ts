import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 45_000,
  use: { baseURL: process.env['NABOO_URL'] || 'http://localhost', channel: 'chrome', headless: true },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 7'], browserName: 'chromium' } }
  ]
});
