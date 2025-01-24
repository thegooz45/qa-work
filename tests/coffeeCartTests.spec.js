// created 24 jan 2025 by brianna guzman

/**
 * the goal is to use a test app site and create one positive, one negative test
 * 
 * this site was found via https://github.com/BMayhew/awesome-sites-to-test-on?tab=readme-ov-file#web-testing
 * i will be testing the Coffee Cart app: https://coffee-cart.app/
 */

import { test, expect } from '@playwright/test'


// before each test, nav to the site
test.beforeEach(async ({ page }) => {
    await page.goto('https://coffee-cart.app/');
  });


// 1st positive test!
test.describe('Selecting an option', () => {
   test('allow me to add an option to cart', async ({ page }) => {
        // verifying we're on the page first (could put this in the beforeEach)
        await expect(page.getByText('Flat White')).toBeVisible();

        // add an option to cart
        await page.getByLabel('Mocha').click();

        // verify it has been added to cart via updated price
        await expect(page.getByText('Total: $8.00')).toBeVisible();
    });
});

test.describe('Negative test', () => {
    test('removing an order', async ({ page }) => {
        // add an option to cart and verifying it's added to cart
        await page.getByLabel('Mocha').click();
        await expect(page.getByText('Total: $8.00')).toBeVisible();

        // removing it via '-' button and verifying the order has been removed
        await page.getByText('Total: $8.00').hover();
        await page.getByText('-').click({force: true});
      
        await expect(page.getByText('Total: $0.00')).toBeVisible();
    });
});