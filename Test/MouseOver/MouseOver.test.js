const Page = require("../../Pages/MouseOver/MouseOver");
const {url,timeoutTest, browser} = require("../../config");
const {assert, expect} = require("chai");
browser.forEach(browser => {
    describe("Mouse Over", async function () {
        let  driver;
        before(async function (){
            this.timeout(timeoutTest);
            driver = new Page(browser);
            await driver.maximizeWindow();
            await driver.visit(url);
            await driver.clickTheMouseOverLink();
        });
        after(async function (){
            this.timeout(timeoutTest);
            await driver.closeBrowser();
        });
        it("Check the attributes of click me element before and after hover", async function () {
            this.timeout(timeoutTest);
            const expectedAttr1 = "text-primary";
            let attrBeforeHover = await driver.getTheClickMeAttributeBeforeHover();
            assert.equal(attrBeforeHover,expectedAttr1);
            await driver.mouseOverTheElement();
            const expectedAttr2 = "text-warning";
            let attrAfterHover = await driver.getTheClickMeAttributeAfterHover();
            assert.equal(attrAfterHover,expectedAttr2);
        });
        it("Click 2 times the click me link", async function () {
            this.timeout(timeoutTest);
            await driver.mouseOutTheElement();
            await driver.mouseOverTheElement();
            await driver.clickTheClickMeLink();
            await driver.clickTheClickMeLink();
            const actualTimes = await driver.getTheClickTimeValue();
            expect(actualTimes).to.equal("2");
        });
    });
});
