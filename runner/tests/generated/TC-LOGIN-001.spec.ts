import { test, expect } from '@playwright/test';

test('TC-LOGIN-001 Valid login', async ({ page, context }) => {
  // Optional CDP session for DevTools signals
  const cdp = await context.newCDPSession(page);
  await cdp.send('Network.enable');
  await cdp.send('Runtime.enable');

  await page.goto(process.env.BASE_URL || 'http://localhost:3000/login');
  await page.fill('[name="email"]', process.env.TEST_USER_EMAIL || 'demo@example.com');
  await page.fill('[name="password"]', process.env.TEST_USER_PASSWORD || 'Password123!');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/dashboard/);
  await expect(page.locator('text=Dashboard')).toBeVisible();
});