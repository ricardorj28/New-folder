import { test, expect } from '@playwright/test';

test.describe("TEST SUITE ONE", async () => {
  test('has title', async ({ page, context}) => {
  
    //await context.tracing.start({snapshots: true, screenshots: true}),   // this step is to take screenshots here. + the context in line 4

    await test.step("user goes to URL", async () => {
      await page.goto('https://playwright.dev/');
    });
  
    // Expect a title "to contain" a substring.
    await test.step("Then the user can see the page", async () => {
      await expect(page).toHaveTitle(/Playwright/);
      //await page.screenshot({path: "./captures/" + Date.now() + "screenshot.jpg"})//

      //await context.tracing.stop({path: 'test1_trace.zip'})
    });

  })});

test.describe("TEST SUITE TWO", async () => {
  test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
  await test.step("See the link 'get started'", async () => {
    await page.getByRole('link', { name: 'Get started' }).click();
  })
  await test.step("Get the header 'Instalation'", async () => {
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  })
  })
});

/**
 TEST CASES
1. Open the page
2. Click to get started
3. Mouse hover the language dropdown
4. click at Java
5. check the url
6. Check the text 'Installing Playwright' is not being displayed
7. Check the text below is displayed

test ('Check Java page', async ({ page }) => {
  page.goto('https://playwright.dev');

  await page.getByRole('link', {name: 'Get Started'}).click();
  await page.getByRole('button', {name: 'Node.js'}).hover();
  await page.getByText('Java', {exact: true}).click()

  await expect(page).toHaveURL('https://playwright.dev/java/docs/intro')

  await expect(page.getByText('Installing Playwright', {exact:true})).not.toBeVisible();

  const javaDescription = 'Playwright is distributed as a set of Maven modules.'
  await expect(page.getByText(javaDescription)).toBeVisible
})
*/