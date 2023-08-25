const Page = require("../../Pages/Dynamic_ID/DynamicID");
const {url,timeoutTest, browser} = require("../../config");
const {assert} = require("chai");
browser.forEach(browser => {
    describe("Dynamic ID", async function () {
        let  driver;
        before(async function (){
            this.timeout(timeoutTest);
            driver = new Page(browser);
            await driver.maximizeWindow();
            await driver.visit(url);
            await driver.clickDynamicIDLink();
        });
        after(async function (){
            this.timeout(timeoutTest);
            await driver.closeBrowser();
        });
        it("Check the dynamic id after refresh", async function () {
            this.timeout(timeoutTest);
            let beforeRefresh = await driver.getTheDynamicID();
            await driver.refreshPage();
            let afterRefresh = await driver.getTheDynamicID();
            assert.notEqual(beforeRefresh, afterRefresh);
        });
    });
});
