const Page = require("../../Pages/HiddenLayers/HiddenLayers");
const {url,timeoutTest, browser} = require("../../config");
const {assert,expect} = require("chai");
const {hiddenLayersDict} = require("../../Pages/dictionary");
browser.forEach(browser => {
    describe("Hidden Layers", async function () {
        let  driver;
        before(async function (){
            this.timeout(timeoutTest);
            driver = new Page(browser);
            await driver.maximizeWindow();
            await driver.visit(url);
            await driver.clickTheHiddenLayersLink();
        });
        after(async function (){
            this.timeout(timeoutTest);
            await driver.closeBrowser();
        });
        it("Click the green button should change to blue", async function () {
            this.timeout(timeoutTest);
            let buttonGreen = await driver.getTheAttributeOfGreenButton();
            assert.equal(buttonGreen,hiddenLayersDict.greenButtonIdAttr);
            await driver.clickTheGreenButton();
            let button = await driver.getTheAttributeOfBlueButton();
            assert.equal(button,hiddenLayersDict.blueButtonIdAttr);
        });
        it("Click the green cannot hitted twice", async function () {
            this.timeout(timeoutTest);
            await driver.refreshPage();
            await driver.clickTheGreenButton();
            let buttonGreenAttached = await driver.isButtonAttached();
            expect(buttonGreenAttached).to.be.true;
            try {
                await driver.clickTheGreenButton();
            } catch (error) {
                expect(error).to.be.an.instanceOf(Error);
            }
        });
    });
});
