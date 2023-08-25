const Page = require("../../Pages/DynamicTable/DynamicTable");
const {url,timeoutTest, browser} = require("../../config");
const {assert} = require("chai");
browser.forEach(browser => {
    describe("Dynamic Table", async function () {
        let  driver;
        before(async function (){
            this.timeout(timeoutTest);
            driver = new Page(browser);
            await driver.maximizeWindow();
            await driver.visit(url);
            await driver.clickTheDynamicTableLink();
        });
        after(async function (){
            this.timeout(timeoutTest);
            await driver.closeBrowser();
        });
        it("Parse the chrome cpu value from table and compare with yellow label value", async function () {
            this.timeout(timeoutTest);
            const expected = await driver.getTheYellowLabelValue();
            const actual = await driver.getTheChromeCPUUsageFromDynamicTable();
            assert.equal(expected, actual);
        });
    });
});
