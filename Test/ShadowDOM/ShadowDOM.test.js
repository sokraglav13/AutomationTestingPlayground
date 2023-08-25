const Page = require("../../Pages/ShadowDOM/ShadowDom");
const {url,timeoutTest, browser} = require("../../config");
const {expect} = require("chai");
browser.forEach(browser => {
    describe("Shadow DOM", async function () {
        let  driver;
        before(async function (){
            this.timeout(timeoutTest);
            driver = new Page(browser);
            await driver.maximizeWindow();
            await driver.visit(url);
            await driver.clickShadowDOMLink();
        });
        after(async function (){
            this.timeout(timeoutTest);
            await driver.closeBrowser();
        });
        it("Click the generate ID and text field should not be empty", async function () {
            this.timeout(timeoutTest);
            const empty = "";
            await driver.generateID();
            await driver.sleep(1000);
            let textField = await driver.getTheTextFieldValue();
            expect(textField).to.not.equal(empty);
        });
        //Copy button not working
        it("Click copy button not working", async function () {
            this.timeout(timeoutTest);

        });
    });
});
