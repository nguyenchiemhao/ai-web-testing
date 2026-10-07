import { test, expect } from '@playwright/test';

test('SMK-001 Homepage loads', async ({ page }) => {
  await page.goto(process.env.BASE_URL || 'http://localhost:3000');
  await expect(page).toHaveTitle(/.+/);
});