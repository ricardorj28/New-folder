import {test, expect} from '@playwright/test'

test('DEMO ASSERTIONS TEST 1', async ({page}) => {
    await page.goto('https://kitchen.applitools.com/');
    //await page.pause();

    //ASSERTIONS
    // Check element present
    await expect (page.locator('text= The Kitchen')).toHaveCount(1);
    if (await page.$('text=The Kitchen')){
        await page.locator('text=The Kitchen').click() // With condition, if The Kitchen is visible, then should click on The Kitcehn
    }

    // Check element hidden or visible
    await expect(page.locator('text=The Kitchen')).toBeVisible();
    //await expect(page.locator('text=The')).toBeHidden(); //The test will failed here because the text is visible
    
    // Element enable or disable
    await expect(page.locator('text=The Kitchen')).toBeEnabled
    //await expect(page.locator('text=The Ktchen')).toBeDisabled //The test will failed here because the text is enable
    
    // Soft assertions. This is to don't failed the test
    await expect.soft(page.locator('text=The')).toBeHidden()

    // Check exact text
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen');
    await expect(page.locator('text=The Kitchen')).not.toHaveText('The The chiken');

    //Attribute values
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/); //For any attribute
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/) // More specific with toHaveClass

    //Ckeck page URL and title (title= the text displyed in the window)
    await expect(page).toHaveURL('https://kitchen.applitools.com/');
    await expect(page).toHaveTitle('The Kitchen');
    await expect(page).toHaveTitle(/.*Kitchen/) //  this way is to identify if at least 'kitchen' exists.

    //visual validation with screenshot
    await expect(page).toHaveScreenshot() //This function will compare the actual screenshot with the last screenshot test. So it´s to validate if the page remainds with everything the same visual elements. So this first test will failed and the second one will be compare with first test

})