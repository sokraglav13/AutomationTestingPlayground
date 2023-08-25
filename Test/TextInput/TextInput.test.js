const Page = require("../../Pages/TextInput/TextInput");
const {url,timeoutTest, browser} = require("../../config");
const {assert} = require("chai");
const {textInputDict} = require("../../Pages/dictionary");
browser.forEach(browser => {

describe("Text Input", async function () {
    let driver;
    before(async function () {
        this.timeout(timeoutTest);
        driver = new Page(browser);
        await driver.maximizeWindow();
        await driver.visit(url);
        await driver.clickTextInput();
    });
    after(async function () {
        this.timeout(timeoutTest);
        await driver.closeBrowser();
    });
    it("Check the text of the button", async function () {
        this.timeout(timeoutTest);
        let expected = await driver.getButtonText();
        assert.equal(textInputDict.buttonText, expected);
    });
    it("Input a string inside text field and check if blue button get the changes", async function () {
        this.timeout(timeoutTest);
        const inputString = "example";
        await driver.writeInTextField(inputString);
        await driver.clickBlueBtn();
        let expected = await driver.getButtonText();
        assert.equal(inputString, expected);
    });
    it("Check if blue button get the changes when input nothing", async function () {
        this.timeout(timeoutTest);
        const inputEmptyString = "";
        const previousString = "example";
        await driver.writeInTextField(inputEmptyString);
        await driver.clickBlueBtn();
        let expected = await driver.getButtonText();
        assert.equal(previousString, expected);
    });
});
});
