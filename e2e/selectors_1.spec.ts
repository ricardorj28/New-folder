import { test, expect } from '@playwright/test';

test('Selectors Demo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    // This one is to check live with codegen opened
    await page.pause();
    await page.click("#user-name");
    await page.locator("#user-name").fill('Ricardo');
    await page.locator("#user-name").fill('standard_user');
    //await page.locator("#password").fill('secret123');
    await page.locator("xpath=//input[@name='password']").fill('secret_sauce'); // We can use the path when we filter with the name 'xpath=
    await page.locator('text=LOGIN').click();  // When text is visible, we can use the text instead
    //await page.locator("input: has-text:('LOGIN')") // We use has-text instead text when text is so long. 

});
