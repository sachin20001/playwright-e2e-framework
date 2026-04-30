import {Page} from '@playwright/test'

export class LoginPage{

    constructor(private page:Page){};

    async navigate(){
        await this.page.goto("https://www.saucedemo.com/");
    }

    async login(name:string,password:string){
        await this.page.getByPlaceholder('Username').fill(name);
        await this.page.getByPlaceholder('Password').fill(password);
        await this.page.getByRole('button',{name:'Login'}).click();
    }
}