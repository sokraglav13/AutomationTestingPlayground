const Page = require("../../Pages/NonBreakingSpace/NonBreakingSpace");
const {url,timeoutTest, browser} = require("../../config");
const {assert} = require("chai");
const {nonBreakingSpaceDict} = require("../../Pages/dictionary");
browser.forEach(browser => {
    describe("Non Breaking Space", async function () {
        let  driver;
        before(async function (){
            this.timeout(timeoutTest);
            driver = new Page(browser);
            await driver.maximizeWindow();
            await driver.visit(url);
            await driver.clickTheNonBreakingSpaceLink();
        });
        after(async function (){
            this.timeout(timeoutTest);
            await driver.closeBrowser();
        });
        it("Parse the correct format of the button element",async function () {
            this.timeout(timeoutTest);
            let correctElement = await driver.getTheTextFromButton();
            assert.equal(correctElement,nonBreakingSpaceDict.buttonText);
        });
    });
});
