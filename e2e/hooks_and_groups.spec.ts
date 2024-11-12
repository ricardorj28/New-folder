import {test, expect} from '@playwright/test'

test.beforeEach('Login', async({page}) =>{  // beforeEach means that in this test, will be always execute this first. So for Login is great
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.waitForURL('https://www.saucedemo.com/inventory.html');
    //await page.pause()

})


test('pickProducts', async({page}) => {
    // Start the test to pick products

    await page.goto('https://www.saucedemo.com/inventory.html');
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="item-1-img-link"]').click();
    await page.locator('[data-test="add-to-cart"]').click();
    await page.locator('[data-test="back-to-products"]').click();
    await page.locator('[data-test="item-0-title-link"]').click();
    await page.goto('https://www.saucedemo.com/inventory.html');
    await page.locator('[data-test="item-3-img-link"]').click();
    await page.locator('[data-test="add-to-cart"]').click();
    await page.locator('[data-test="remove"]').click();
    //await page.close()

});

test ('logout', async({page}) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
    await page.waitForURL('https://www.saucedemo.com/');
    await expect (page).toHaveScreenshot()
})