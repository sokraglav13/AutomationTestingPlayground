const {By} = require("selenium-webdriver");
const Page = require("../Page");

const clickElements = {
    clickLink: By.css("div:nth-of-type(2) > div:nth-of-type(3) > h3 > a"),
    blueButton: By.css("#badButton")
};

class Click extends Page {
    constructor(browser) {
        super(browser);
    }
    async clickTheClickLink(){
        return await this.click(clickElements.clickLink);
    }
    async clickBlueButton(){
        return await this.click(clickElements.blueButton);
    }
    async getTheButtonClassAttr(){
        const element = await this.findElement(clickElements.blueButton);
        return await this.getClassAttribute(element);
    }
}

module.exports = Click;
