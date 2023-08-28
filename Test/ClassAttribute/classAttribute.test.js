const Page = require("../../Pages/ClassAttribute/ClassAttribute");
const {url,timeoutTest, browser} = require("../../config");
const {assert} = require("chai");
const {classAttributeDict} = require("../../Pages/dictionary");
browser.forEach(browser => {
describe("Class Attributes", async function () {
    let  driver;
    before(async function (){
        this.timeout(timeoutTest);
        driver = new Page(browser);
        await driver.maximizeWindow();
        await driver.visit(url);
        await driver.clickClassAttribute();
    });
    after(async function (){
        this.timeout(timeoutTest);
        await driver.closeBrowser();
    });
    it("Handle the alert after click blue button", async   function () {
        this.timeout(timeoutTest);
        await driver.clickBlueButton();
        await driver.waitAlert();
        let text = await driver.getAlertText();
        assert.equal(text,classAttributeDict.alertText);
        await driver.confirmAlert();
    });
});
});
