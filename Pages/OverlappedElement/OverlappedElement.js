const {By} = require("selenium-webdriver");
const Page = require("../Page");

const overlappedElementElements = {
    overlappedLink: By.css("a[href='/overlapped']"),
    firstInputField: By.id("id"),
    secondInputField: By.id("name")
};

class OverlappedElement extends Page {
    constructor(browser) {
        super(browser);
    }
    async clickTheOverlappedLink () {
        await this.click(overlappedElementElements.overlappedLink);
    }
    async scrollToNameField () {
        await this.scrollToMakeElementVisible(overlappedElementElements.secondInputField);
    }
    async inputText (text) {
        await this.send(overlappedElementElements.secondInputField,text);
    }
}

module.exports = OverlappedElement;

