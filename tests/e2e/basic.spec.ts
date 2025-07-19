import { test, expect } from '@playwright/test';

test.describe('Portfolio Website', () => {
  test('homepage has title and loads', async ({ page }) => {
    await page.goto('/');
    
    // Check page title
    await expect(page).toHaveTitle(/Portfolio/);
    
    // Check if main content exists
    await expect(page.locator('main')).toBeVisible();
  });

  test('navigation works', async ({ page }) => {
    await page.goto('/');
    
    // Check if navigation exists
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    
    // Check if navigation links are present
    const links = nav.locator('a');
    await expect(links).toHaveCount(await links.count());
  });
});
