import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';


test('complete checkout flow',async ({page})=>{
    const login=new LoginPage(page);
    const product=new ProductPage(page);
    const cart=new CartPage(page);
    const checkout=new CheckoutPage(page);

    await login.navigate();
    await login.login('standard_user','secret_sauce');

    await product.addFirstProductToCart();
    await product.goToCart();

    await cart.clickCheckout();

    await checkout.fillDetails('sachin','kumar','110017');
    await checkout.finishOrder();

    await expect(await checkout.getSuccessMessage()).toBeVisible();

})