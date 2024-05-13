const {By} = require("selenium-webdriver");
const Page = require("../Page");

const ajaxDataElements = {
    blueButton: By.css("#ajaxButton"),
    spinner: By.css("#spinner"),
    greenElement: (num)  => (By.css(`div[id='content'] p:nth-child(${num})`)),
    ajaxDataLink: By.css("div:nth-of-type(2) > div:nth-of-type(1) > h3 > a")
};

class AjaxData extends Page {
    constructor(browser) {
        super(browser);
    }
    async clickAJAXDataLink(){
        return await this.click(ajaxDataElements.ajaxDataLink);
    }
    async getTheButtonText(){
        return await this.getTextFromElement(ajaxDataElements.blueButton);
    }
    async clickBlueButton(){
        return await this.click(ajaxDataElements.blueButton);
    }
    async isSpinnerVisible(){
        await this.sleep(400);
        return await this.isVisible(ajaxDataElements.spinner);
    }
    async getTheResponseMessage(){
        await this.sleep(400);
        await this.waitUntilElementLocated(ajaxDataElements.greenElement(1));
        return await this.getTextFromElement(ajaxDataElements.greenElement(1));
    }
}

module.exports = AjaxData;
