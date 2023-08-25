const Page = require("../../Pages/Scrollbars/Scrollbars");
const {url,timeoutTest, browser} = require("../../config");
browser.forEach(browser => {
    describe("Scrollbars", async function () {
        let  driver;
        before(async function (){
            this.timeout(timeoutTest);
            driver = new Page(browser);
            await driver.maximizeWindow();
            await driver.visit(url);
            await driver.clickTheScrollbarsLink();
        });
        after(async function (){
            this.timeout(timeoutTest);
            await driver.closeBrowser();
        });
        it("Scroll to the button element and perform click", async function () {
            this.timeout(timeoutTest);
            await driver.scrollToButtonElement();
            await driver.sleep(1000);
            await driver.clickTheButton();
            await driver.sleep(1000);
        });
    });
});
