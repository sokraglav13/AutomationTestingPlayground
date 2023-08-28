const {By} = require("selenium-webdriver");
const Page = require("../Page");

const classAttributeElements = {
    classAttributeLink: By.css("body section[id='overview'] div[class='container'] div:nth-child(1) div:nth-child(2) h3:nth-child(1)"),
    blueBtn: By.xpath("//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]"),
};
class ClassAttribute extends Page {
    constructor(browser) {
        super(browser);
    }

    async clickClassAttribute() {
        return await this.click(classAttributeElements.classAttributeLink);
    }

    async clickBlueButton() {
        await this.sleep(1500)
        await this.click(classAttributeElements.blueBtn);
    }
}

module.exports = ClassAttribute;
