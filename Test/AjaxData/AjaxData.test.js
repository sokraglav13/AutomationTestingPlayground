const Page = require("../../Pages/AjaxData/AjaxData");
const {url,timeoutTest, browser} = require("../../config");
const {assert,expect} = require("chai");
const {ajaxDataDict} = require("../../Pages/dictionary");
browser.forEach(browser => {
    describe("Ajax Data", async function () {
        let  driver;
        before(async function (){
            this.timeout(timeoutTest);
            driver = new Page(browser);
            await driver.maximizeWindow();
            await driver.visit(url);
            await driver.clickAJAXDataLink();
        });
        after(async function (){
            this.timeout(timeoutTest);
            await driver.closeBrowser();
        });
        it("Check the button text", async function () {
            this.timeout(timeoutTest);
            let actual = await driver.getTheButtonText();
            assert.equal(actual, ajaxDataDict.buttonText);
        });
        it("Check the spinner animation is visible", async function () {
            this.timeout(timeoutTest);
            let actual = await driver.isSpinnerVisible();
            expect(actual).to.be.false;
        });
        it("Click the button and wait for the response in 15s", async function () {
            this.timeout(timeoutTest);
            await driver.clickBlueButton();
            let checkSpinner = await driver.isSpinnerVisible();
            expect(checkSpinner).to.be.true;
            let actualResponseMsg = await driver.getTheResponseMessage();
            assert.equal(actualResponseMsg, ajaxDataDict.responseMessage);
        });
    });
});
