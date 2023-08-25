const {By} = require("selenium-webdriver");
const Page = require("../Page");

const scrollbarsElements = {
    scrollbarsLink: By.css("a[href='/scrollbars']"),
    blueButton: By.css("#hidingButton")
};

class Scrollbars extends Page {
    constructor(browser) {
        super(browser);
    }
    async clickTheScrollbarsLink () {
        await this.click(scrollbarsElements.scrollbarsLink);
    }
    async scrollToButtonElement () {
        await this.scrollTo(scrollbarsElements.blueButton);
    }
    async clickTheButton () {
        await this.click(scrollbarsElements.blueButton);
    }
}

module.exports = Scrollbars;

