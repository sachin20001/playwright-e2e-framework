import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';

test("@smoke Validate add to product",async ({page})=>{
    const loginPage=new LoginPage(page);
    const productPage=new ProductPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user','secret_sauce');

    await expect(page).toHaveURL(/inventory/);
    console.log(await page.url());

    await productPage.addFirstProductToCart();
    await productPage.goToCart();

    expect(page).toHaveURL(/cart/);
    console.log(page.url());


});