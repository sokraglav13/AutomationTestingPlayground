const Page = require("../../Pages/Progressbar/Progressbar");
const {url,timeoutTest, browser} = require("../../config");
const {expect} = require("chai");
browser.forEach(browser => {
    describe("Progressbar", async function () {
        let  driver;
        before(async function (){
            this.timeout(timeoutTest);
            driver = new Page(browser);
            await driver.maximizeWindow();
            await driver.visit(url);
            await driver.clickTheProgressBarLink();
        });
        after(async function (){
            this.timeout(timeoutTest);
            await driver.closeBrowser();
        });
        //Sometimes the progress bar increase so fast that stops in 76,77,78,79
        it("Press the stop button when the progress bar is equal to 75 (Not always 75 sometimes above)", async function () {
            this.timeout(timeoutTest);
            await driver.pressStartButton();
            let actualStop = await driver.conditionMetPromise();
            expect(actualStop).to.be.within(75,79);
        });
    });
});
