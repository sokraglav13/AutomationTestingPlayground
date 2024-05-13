const {By} = require("selenium-webdriver");
const Page = require("../Page");

const hiddenLayersElements = {
    hiddenLayersLink: By.css("body section[id='overview'] div[class='container'] div:nth-child(1) div:nth-child(3) h3:nth-child(1)"),
    blueButton: By.css("#blueButton"),
    greenButton: By.css("#greenButton")
};

class HiddenLayers extends Page {
    constructor(browser) {
        super(browser);
    }
    async clickTheGreenButton () {
        await this.click(hiddenLayersElements.greenButton);
    }
    async clickTheHiddenLayersLink () {
        await this.click(hiddenLayersElements.hiddenLayersLink);
    }
    async getTheAttributeOfBlueButton () {
        const elem = await this.findElement(hiddenLayersElements.blueButton);
        return await this.getAttributeID(elem);
    }
    async getTheAttributeOfGreenButton () {
        const elem = await this.findElement(hiddenLayersElements.greenButton);
        return await this.getAttributeID(elem);
    }
    async isButtonAttached () {
        return await this.isElementAttached(hiddenLayersElements.greenButton);
    }
}


module.exports = HiddenLayers;
