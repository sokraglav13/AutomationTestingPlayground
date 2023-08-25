const Page = require("../../Pages/VerifyText/VerifyText");
const {url,timeoutTest, browser} = require("../../config");
const {assert,expect} = require("chai");
const {verifyTextDict} = require("../../Pages/dictionary");
browser.forEach(browser => {
    describe("Verify Text", async function () {
        let  driver;
        before(async function (){
            this.timeout(timeoutTest);
            driver = new Page(browser);
            await driver.maximizeWindow();
            await driver.visit(url);
            await driver.clickTheVerifyTextLink();
        });
        after(async function (){
            this.timeout(timeoutTest);
            await driver.closeBrowser();
        });
        it("Checking the playground value with xpath", async function () {
            this.timeout(timeoutTest);
            let elementText = await driver.getTheValueWorking();
            assert.equal(elementText,verifyTextDict.playgroundText);
        });
        it("Checking the xpath that does not work", async function () {
            this.timeout(timeoutTest);
            let elementExist = await driver.checkTheNotWorkingValueIfExist();
            expect(elementExist).to.be.false;
        });
    });
});
