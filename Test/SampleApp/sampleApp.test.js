const Page = require("../../Pages/SampleApp/SampleApp");
const {url,timeoutTest, browser} = require("../../config");
const {assert} = require("chai");
const {sampleAppDict} = require("../../Pages/dictionary");
browser.forEach(browser => {

describe("Sample App", async function () {
    let driver;
    beforeEach(async function () {
        this.timeout(timeoutTest);
        driver = new Page(browser);
        await driver.maximizeWindow();
        await driver.visit(url);
        await driver.clickSampleApp();
    });
    afterEach(async function () {
        this.timeout(timeoutTest);
        await driver.closeBrowser();
    });
    it("Login successful ", async function () {
        this.timeout(timeoutTest);
        const username = "example", password = "pwd";
        await driver.login(username, password);
        let expected = await driver.getLoginState();
        assert.equal(sampleAppDict.loginSuccessfulMsg(username), expected);
    });
    it("Login failed ", async function () {
        this.timeout(timeoutTest);
        const username = "example", password = "pwddsds";
        await driver.login(username, password);
        let expected = await driver.getLoginState();
        assert.equal(sampleAppDict.loginFailMsg, expected);
    });
    it("Logout ", async function () {
        this.timeout(timeoutTest);
        const username = "example", password = "pwd";
        await driver.login(username, password);
        await driver.clickLogIn();
        let expected = await driver.getLoginState();
        assert.equal(sampleAppDict.loginLogoutMsg, expected);
    });
});
});
