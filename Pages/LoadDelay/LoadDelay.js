const {By} = require("selenium-webdriver");
const Page = require("../Page");

const loadDelayElements = {
    loadDelayLink: By.css("a[href='/loaddelay']"),
    blueButton: By.css("button[class='btn btn-primary']"),
};
class LoadDelay extends Page {
    constructor(browser) {
        super(browser);
    }

    async clickTheLoadDelayLink() {
        await this.click(loadDelayElements.loadDelayLink);
    }
    async waitForTheButtonToBeVisible() {
        await this.waitUntilElementIsVisible(loadDelayElements.blueButton);
    }
    async isBlueButtonVisible() {
        return await this.isVisible(loadDelayElements.blueButton);
    }
}

module.exports = LoadDelay;
