import {Page} from '@playwright/test'

export class ProductPage{
    constructor(private page:Page){};

    async addFirstProductToCart(){
        await this.page.locator('.inventory_item').first()
        .getByRole('button',{name:'Add to cart'})
        .click();
    }

    async goToCart(){
        await this.page.locator('.shopping_cart_link').click();
    }
}