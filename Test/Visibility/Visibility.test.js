const Page = require("../../Pages/Visibility/Visibility");
const {url,timeoutTest, browser} = require("../../config");
const {expect,assert} = require("chai");
browser.forEach(browser => {
    describe("Visibility", async function () {
        let  driver;
        beforeEach(async function (){
            this.timeout(timeoutTest);
            driver = new Page(browser);
            await driver.maximizeWindow();
            await driver.visit(url);
            await driver.clickVisibilityLink();
        });
        afterEach(async function (){
            this.timeout(timeoutTest);
            await driver.closeBrowser();
        });
        it("Before click the hide button checking if all buttons is visible", async function () {
            this.timeout(timeoutTest);
            const hideBtn = await driver.checkIfHideButtonIsVisible();
            const removedBtn = await driver.checkIfRemovedButtonIsVisible();
            const zeroWidthBtn = await driver.checkIfZeroWidthButtonIsVisible();
            const overlappedBtn = await driver.checkIfOverlappedButtonIsVisible();
            const opacityBtn = await driver.checkIfOpacityButtonIsVisible();
            const visibilityHiddenBtn = await driver.checkIfVisibilityHiddenButtonIsVisible();
            const displayNoneBtn = await driver.checkIfDisplayNoneButtonIsVisible();
            const offscreenBtn = await driver.checkIfOffscreenButtonIsVisible();
            expect(hideBtn).to.be.true;
            expect(removedBtn).to.be.true;
            expect(zeroWidthBtn).to.be.true;
            expect(overlappedBtn).to.be.true;
            expect(opacityBtn).to.be.true;
            expect(visibilityHiddenBtn).to.be.true;
            expect(displayNoneBtn).to.be.true;
            expect(offscreenBtn).to.be.true;
        });
        it("After click the hide button check if removed button exist in dom", async function () {
            this.timeout(timeoutTest);
            await driver.clickHideButton();
            const isExistInDom = await driver.checkIfRemovedButtonIsAttachedInDOm();
            expect(isExistInDom).to.be.false;
        });
        it("After click the hide button check actual width value", async function () {
            this.timeout(timeoutTest);
            const expectedPixel = "0px";
            await driver.clickHideButton();
            const actualPixel = await driver.checkTheWidthOfZeroWidthButton();
            expect(actualPixel).to.equal(expectedPixel);
        });
        it("After click the hide button check overlapped button value", async function () {
            this.timeout(timeoutTest);
            const isAttachedBeforeClick = await driver.checkTheOverlappedElementHidingLayersIsAttached();
            expect(isAttachedBeforeClick).to.be.false;
            await driver.clickHideButton();
            const isAttachedAfterClick = await driver.checkTheOverlappedElementHidingLayersIsAttached();
            expect(isAttachedAfterClick).to.be.true;
        });
        it("After click the hide button check opacity of the element", async function () {
            this.timeout(timeoutTest);
            const expectedOpacity = "0";
            await driver.clickHideButton();
            const actualOpacity = await driver.checkTheElementOpacityValue();
            expect(actualOpacity).to.equal(expectedOpacity);
        });
        it("After click the hide button check the visibility hidden value", async function () {
            this.timeout(timeoutTest);
            const expectedValue = "hidden";
            await driver.clickHideButton();
            const actualValue = await driver.checkTheElementVisibilityValue();
            expect(actualValue).to.equal(expectedValue);
        });
        it("After click the hide button check display none value", async function () {
            this.timeout(timeoutTest);
            const expectedValue = "none";
            await driver.clickHideButton();
            const actualValue = await driver.checkTheElementDisplayValue();
            expect(actualValue).to.equal(expectedValue);
        });
        it("After click the hide button check offscreen ", async function () {
            this.timeout(timeoutTest);
            const expectedValue = "btn btn-info offscreen";
            await driver.clickHideButton();
            const actualValue = await driver.checkTheElementClassAttribute();
            expect(actualValue).to.equal(expectedValue);
        });
    });
});
