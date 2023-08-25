const {By} = require("selenium-webdriver");
const Page = require("../Page");

const nonBreakingSpaceElements = {
    nonBreakingSpaceLink: By.css("a[href='/nbsp']"),
    buttonFixedXpath: By.xpath("//button[text()='My\u00A0Button']")
};

class NonBreakingSpace extends Page {
    constructor(browser) {
        super(browser);
    }
    async clickTheNonBreakingSpaceLink () {
        await this.click(nonBreakingSpaceElements.nonBreakingSpaceLink);
    }
    async getTheTextFromButton () {
        return await this.getTextFromElement(nonBreakingSpaceElements.buttonFixedXpath);
    }
}

module.exports = NonBreakingSpace;
