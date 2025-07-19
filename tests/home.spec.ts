import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should load successfully and have correct title', async ({ page }) => {
    // Navigate to the home page
    await page.goto('/');
    
    // Wait for the page to be fully loaded
    await page.waitForLoadState('networkidle');
    
    // Verify the page title
    await expect(page).toHaveTitle(/Portfolio/);
    
    // Verify that the main content area is present
    await expect(page.locator('main')).toBeVisible();
  });
});
