const Page = require("../../Pages/LoadDelay/LoadDelay");
const {url,timeoutTest, browser} = require("../../config");
const {expect} = require("chai");
browser.forEach(browser => {
    describe("Load Delay", async function () {
        let  driver;
        beforeEach(async function (){
            this.timeout(timeoutTest);
            driver = new Page(browser);
            await driver.maximizeWindow();
            await driver.visit(url);
        });
        afterEach(async function (){
            this.timeout(timeoutTest);
            await driver.closeBrowser();
        });
        it("After click the link should wait to load the page to check for blue button", async function () {
            this.timeout(timeoutTest);
            await driver.clickTheLoadDelayLink();
            await driver.waitForTheButtonToBeVisible();
            let isButtonVisible = await driver.isBlueButtonVisible();
            expect(isButtonVisible).to.be.true;
        });
    });
});
