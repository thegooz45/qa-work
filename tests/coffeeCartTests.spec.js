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

// listing out the items to be asserted on
const COFFEE_ITEMS = [
    'whipped cream',
    'steamed milk',
    'milk foam',
    'Flat White'
];

// 1st positive test!
test.describe('Selecting an option', () => {
   test('allow me to add an option to cart', async ({ page }) => {
        // verifying we're on the page first (could put this in the beforeEach)
        await expect(COFFEE_ITEMS[3].toBeVisible());

        // add an option to cart
        page.getByText(COFFEE_ITEMS[0]).click();

        // verify it has been added to cart via updated price
        await expect('button:text("Total: $8.00")'.toBeVisible());
    });
});


