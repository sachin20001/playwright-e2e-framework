import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';

test("Login test", async ({page})=>{
    const loginPage= new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user','secret_sauce');
    await expect(page).toHaveURL(/inventory/);
    console.log(page.url());
});

test("Validate login failed",async ({page})=>{
    const loginPage=new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user','random');

    const error=page.locator("[data-test='error']");

    expect(error).toBeVisible;
    expect(error).toHaveText(/Username and password do not match/);
    expect(page).toHaveURL('https://www.saucedemo.com');

});