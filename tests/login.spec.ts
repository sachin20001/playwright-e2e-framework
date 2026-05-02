import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../data/loginData';



test.describe('Login Tests (Data driven)',()=>{
    
    loginData.forEach((data)=>{

        test(`Login | ${data.username} | ${data.expected}`,async ({page,browserName})=>{
            console.log(browserName);
            const loginPage=new LoginPage(page);

            await loginPage.navigate();
            await loginPage.login(data.username,data.password);

            if(data.expected==='success'){
                await expect(page).toHaveURL(/inventory/);
            }
            else{
                await expect(page.locator("[data-test='error']")).toBeVisible();
            }
        })
    })

});
