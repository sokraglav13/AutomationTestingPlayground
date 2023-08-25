const {By} = require("selenium-webdriver");
const Page = require("../Page");

const verifyTextElements = {
    verifyTextLink: By.css("a[href='/verifytext']"),
    welcomeUserNameWorking: By.xpath("//span[normalize-space(.)='Welcome UserName!']"),
    welcomeUserNameDoesntWorking: By.xpath("//span[.='Welcome UserName!']")
};

class VerifyText extends Page {
    constructor(browser) {
        super(browser);
    }

    async clickTheVerifyTextLink () {
        await this.click(verifyTextElements.verifyTextLink);
    }
    async getTheValueWorking () {
         return await this.getTextFromElement(verifyTextElements.welcomeUserNameWorking);
    }
    async checkTheNotWorkingValueIfExist () {
        return await this.isElementAttached(verifyTextElements.welcomeUserNameDoesntWorking);
    }
}

module.exports = VerifyText;

