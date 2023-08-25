const Page = require("../../Pages/OverlappedElement/OverlappedElement");
const {url,timeoutTest, browser} = require("../../config");
browser.forEach(browser => {
    describe("Overlapped Element", async function () {
        let  driver;
        before(async function (){
            this.timeout(timeoutTest);
            driver = new Page(browser);
            await driver.maximizeWindow();
            await driver.visit(url);
            await driver.clickTheOverlappedLink();
        });
        after(async function (){
            this.timeout(timeoutTest);
            await driver.closeBrowser();
        });
        it("Scroll to name input field and input some text", async function () {
            this.timeout(timeoutTest);
            const text = "Automation Testing";
            await driver.scrollToNameField();
            await driver.inputText(text);
        });
    });
});
