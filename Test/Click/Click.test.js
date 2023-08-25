const Page = require("../../Pages/Click/Click");
const {url,timeoutTest, browser} = require("../../config");
const {assert} = require("chai");
const {clickDict, ajaxDataDict} = require("../../Pages/dictionary");
browser.forEach(browser => {
    describe("Click", async function () {
        let  driver;
        before(async function (){
            this.timeout(timeoutTest);
            driver = new Page(browser);
            await driver.maximizeWindow();
            await driver.visit(url);
            await driver.clickTheClickLink();
        });
        after(async function (){
            this.timeout(timeoutTest);
            await driver.closeBrowser();
        });
        it("Check the button class attribute BEFORE click", async function () {
            this.timeout(timeoutTest);
            let actual = await driver.getTheButtonClassAttr();
            assert.equal(actual, clickDict.buttonClassNameBeforeClick);
        });
        it("Check the button class attribute AFTER click", async function () {
            this.timeout(timeoutTest);
            await driver.clickBlueButton();
            let actual = await driver.getTheButtonClassAttr();
            assert.equal(actual, clickDict.buttonClassNameAfterClick);
        });
    });
});
