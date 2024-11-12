import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opencart.abstracta.us/index.php?route=common%2Fhome');
  await page.click("//div[@id='content']//div[1]//div[1]//div[3]//button[1]//i[1]")
  await page.getByRole('button', { name: ' 1 item(s) - $' }).click();
  await page.getByRole('link', { name: ' View Cart' }).click();
  await page.getByRole('link', { name: 'Shopping Cart', exact: true }).click();
});