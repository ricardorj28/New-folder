import {test, expect} from '@playwright/test'

test('DEMO LOGIN TEST 1', async ({page}) => {
    await page.goto('https://demo.applitools.com/');
    //await page.pause();
    await page.locator("[getByPlaceholder('Enter your username')]").fill('Ricardo');
    await page.locator("['getByPlaceholder('Enter your password')']").fill('secret123');
    await page.waitForSelector('text=Sign in'), {timeout: 5000};  // If we want to expect an specific objet with different timing
    await page.locator("['getByRole('link', { name: 'Sign in' })']");
    // await page.locator("text=Sign in").click() // Another way to click
})

