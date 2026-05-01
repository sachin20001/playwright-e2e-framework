import {Page} from '@playwright/test'
export class CheckoutPage{

    constructor(private page:Page){};

    async fillDetails(firstName:string,lastName:string,zip:string){
        await this.page.getByPlaceholder('First Name').fill(firstName);
        await this.page.getByPlaceholder('Last Name').fill(lastName);
        await this.page.getByPlaceholder('Zip/Postal Code').fill(zip);
        await this.page.getByRole('button',{name:'continue'}).click();
    }

    async finishOrder(){
        await this.page.getByRole('button',{name:'Finish'}).click();
    }

    async getSuccessMessage(){
        return this.page.getByText('Thank you for your order!');
    }
}