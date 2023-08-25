const Page = require("../../Pages/ClientSideDelay/ClientSideDelay");
const {url,timeoutTest, browser} = require("../../config");
const {assert,expect} = require("chai");
const {clientSideDelayDict, ajaxDataDict} = require("../../Pages/dictionary");
browser.forEach(browser => {
    describe("Client Side Delay", async function () {
        let  driver;
        before(async function (){
            this.timeout(timeoutTest);
            driver = new Page(browser);
            await driver.maximizeWindow();
            await driver.visit(url);
            await driver.clickClientSideDelayLink();
        });
        after(async function (){
            this.timeout(timeoutTest);
            await driver.closeBrowser();
        });
        it("Click the blue button and wait for response message", async function () {
            this.timeout(timeoutTest);
            await driver.clickBlueButton();
            let responseMessage = await driver.getTheResponseMessage();
            assert.equal(responseMessage, clientSideDelayDict.responseMessage);
        });
        it("Check if the spinner icon is visible when perform click action in button", async function () {
            this.timeout(timeoutTest);
            //before click
            let isSpinnerVisible = await driver.isSpinnerVisible();
            expect(isSpinnerVisible).to.be.false;
            await driver.clickBlueButton();
            //after click
            isSpinnerVisible = await driver.isSpinnerVisible();
            expect(isSpinnerVisible).to.be.true;
        });
    });
});
