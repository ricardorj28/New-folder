import { test, expect } from '@playwright/test';

test('TEST SUITE 1', async ({page}) => {
    await page.goto ('https://opencart.abstracta.us/index.php?route=common%2Fhome');
    await page.getByPlaceholder('search').click();
    await page.fill("//input[@name='search']", "iphone");
    //await page.keyboard.press('Enter');
    await page.click("//button[@class='btn btn-default btn-lg']")
    await page.getByRole 
})