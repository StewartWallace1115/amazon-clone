import { test, expect } from '@playwright/test';

test('Logo Redirects To Home Page', async ({ page, baseURL }) => {

  await page.goto(baseURL+"www.google.com");
  await page.click('#logo');
  await page.waitForURL(baseURL+"");
  await expect(page.locator('h1')).toHaveText('hello');
})
