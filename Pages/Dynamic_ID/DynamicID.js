const {By} = require("selenium-webdriver");
const Page = require("../Page");

const dynamicIDElements = {
    dynamicIDLink: By.css("div:nth-of-type(1) > div:nth-of-type(1) > h3 > a"),
    blueButton: By.css(".btn.btn-primary")
};

class DynamicID extends Page {
    constructor(browser) {
        super(browser);
    }
    async clickDynamicIDLink() {
        await this.click(dynamicIDElements.dynamicIDLink);
    }
    async getTheDynamicID() {
        const elem = await this.findElement(dynamicIDElements.blueButton);
        return await this.getAttributeID(elem);
    }
}

module.exports = DynamicID;
