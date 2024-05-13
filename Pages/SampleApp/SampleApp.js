const {By} = require("selenium-webdriver");
const Page = require("../Page");

const sampleAppElements = {
    title: By.css("div[class='container'] h3"),
    description: By.css("div[class='container'] p"),
    textInfo: By.id("loginstatus"),
    usernameField: By.xpath("/html//section/div[@class='container']//input[@name='UserName']"),
    passwordField: By.xpath("/html//section/div[@class='container']//input[@name='Password']"),
    logInBtn: By.id("login"),
    sampleAppLink: By.css("a[href='/sampleapp']")
};
class SampleApp extends Page{
    constructor(browser) {
        super(browser);
    }
    async login(username,password){
        await this.send(sampleAppElements.usernameField,username);
        await this.send(sampleAppElements.passwordField,password);
        await this.click(sampleAppElements.logInBtn);
    }
    async clickLogIn(){
        await this.click(sampleAppElements.logInBtn);
    }
    async getLoginState(){
        return await this.getTextFromElement(sampleAppElements.textInfo);
    }
    async clickSampleApp(){
        await this.click(sampleAppElements.sampleAppLink);
    }
}

module.exports = SampleApp;
