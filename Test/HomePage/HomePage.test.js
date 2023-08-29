const Page = require("../../Pages/HomePage/HomePage");
const {url,timeoutTest, browser} = require("../../config");
const {assert} = require("chai");
const {homePageDict, dynamicIDDict, shadowDOMDict, overlappedElementDict, nonBreakingSpaceDict, mouseOverDict,
    sampleAppDict, visibilityDisc, progressBarDict, verifyTextDict, dynamicTableDict, scrollbarsDict, textInputDict,
    clickDict,classAttributeDict, clientSideDelayDict, ajaxDataDict, loadDelayDict, hiddenLayersDict
} = require("../../Pages/dictionary");
const {homePageElements} = require("../../Pages/HomePage/HomePage");
const {By} = require("selenium-webdriver");
browser.forEach(browser => {
    describe("Assert elements with text", async function () {
        let  driver;
        before(async function (){
            this.timeout(timeoutTest);
            driver = new Page(browser);
            await driver.maximizeWindow();
            await driver.visit(url);
            await driver.sleep(5000);
        });
        after(async function (){
            this.timeout(timeoutTest);
            await driver.closeBrowser();
        });
        it("Check the title", async function () {
            let title = await driver.getTheTitle();
            assert.equal(title,homePageDict.title);
        });
        it("Check the quote", async function () {
            let quote = await driver.getTheQuote();
            assert.equal(quote,homePageDict.quote);
        });
        it("Check the yellow box", async function () {
            let yellowBox = await driver.getTheYellowBox();
            assert.equal(yellowBox,homePageDict.yellowBox);
        });
        it("Check the mini paragraph", async function () {
            let paragraph = await driver.getTheParagraph();
            assert.equal(paragraph,homePageDict.paragraph);
        });
    });
    describe("Click All the links and wait for specific page item", async function () {
        let  driver;
        const titleElement = By.css("div[class='container'] h3");
        beforeEach(async function (){
            this.timeout(timeoutTest);
            driver = new Page(browser);
            await driver.maximizeWindow();
            await driver.visit(url);
        });
        afterEach(async function (){
            this.timeout(timeoutTest);
            await driver.closeBrowser();
        });
        it("Click the Progress Bar", async function () {
            this.timeout(timeoutTest);
            await driver.click(homePageElements.link.progressBar);
            await driver.waitUntilElementIsVisible(titleElement);
            let actual = await driver.getTextFromElement(titleElement);
            assert.equal(actual,progressBarDict.progressbarTitlePage);
        });
        it("Click the Dynamic ID", async function () {
            this.timeout(timeoutTest);
            this.timeout(timeoutTest);
            await driver.click(homePageElements.link.dynamicID);
            await driver.waitUntilElementIsVisible(titleElement);
            let actual = await driver.getTextFromElement(titleElement);
            assert.equal(actual, dynamicIDDict.dynamicIDTitlePage);
        });
        it("Click the Class Attribute", async function () {
            this.timeout(timeoutTest);
            await driver.click(homePageElements.link.classAttribute);
            await driver.waitUntilElementIsVisible(titleElement);
            let actual = await driver.getTextFromElement(titleElement);
            assert.equal(actual,classAttributeDict.classAttributeTitlePage);
        });
        it("Click the Hidden Layers", async function () {
            this.timeout(timeoutTest);
            await driver.click(homePageElements.link.hiddenLayers);
            await driver.waitUntilElementIsVisible(titleElement);
            let actual = await driver.getTextFromElement(titleElement);
            assert.equal(actual,hiddenLayersDict.hiddenLayersTitlePage);
        });
        it("Click the Load Delay", async function () {
            this.timeout(timeoutTest);
            await driver.click(homePageElements.link.loadDelay);
            await driver.waitUntilElementIsVisible(titleElement);
            let actual = await driver.getTextFromElement(titleElement);
            assert.equal(actual,loadDelayDict.loadDelayTitlePage);
        });
        it("Click the AJAX Data", async function () {
            this.timeout(timeoutTest);
            await driver.click(homePageElements.link.ajaxData);
            await driver.waitUntilElementIsVisible(titleElement);
            let actual = await driver.getTextFromElement(titleElement);
            assert.equal(actual,ajaxDataDict.ajaxDataTitlePage);
        });
        it("Click the Client Side Delay", async function () {
            this.timeout(timeoutTest);
            await driver.click(homePageElements.link.clientSideDelay);
            await driver.waitUntilElementIsVisible(titleElement);
            let actual = await driver.getTextFromElement(titleElement);
            assert.equal(actual,clientSideDelayDict.clientSideDelayTitlePage);
        });
        it("Click the Click", async function () {
            this.timeout(timeoutTest);
            await driver.click(homePageElements.link.click);
            await driver.waitUntilElementIsVisible(titleElement);
            let actual = await driver.getTextFromElement(titleElement);
            assert.equal(actual,clickDict.clickTitlePage);
        });
        it("Click the Text Input", async function () {
            this.timeout(timeoutTest);
            await driver.click(homePageElements.link.textInput);
            await driver.waitUntilElementIsVisible(titleElement);
            let actual = await driver.getTextFromElement(titleElement);
            assert.equal(actual,textInputDict.textInputTitlePage);
        });
        it("Click the Scrollbars", async function () {
            this.timeout(timeoutTest);
            await driver.click(homePageElements.link.scrollbars);
            await driver.waitUntilElementIsVisible(titleElement);
            let actual = await driver.getTextFromElement(titleElement);
            assert.equal(actual,scrollbarsDict.scrollbarsTitlePage);
        });
        it("Click the Dynamic Table", async function () {
            this.timeout(timeoutTest);
            await driver.click(homePageElements.link.dynamicTable);
            await driver.waitUntilElementIsVisible(titleElement);
            let actual = await driver.getTextFromElement(titleElement);
            assert.equal(actual,dynamicTableDict.dynamicTableTitlePage);
        });
        it("Click the Verify Text", async function () {
            this.timeout(timeoutTest);
            await driver.click(homePageElements.link.verifyText);
            await driver.waitUntilElementIsVisible(titleElement);
            let actual = await driver.getTextFromElement(titleElement);
            assert.equal(actual,verifyTextDict.verifyTextTitlePage);
        });
        it("Click the Progress Bar", async function () {
            this.timeout(timeoutTest);
            await driver.click(homePageElements.link.progressBar);
            await driver.waitUntilElementIsVisible(titleElement);
            let actual = await driver.getTextFromElement(titleElement);
            assert.equal(actual,progressBarDict.progressbarTitlePage);
        });
        it("Click the Visibility", async function () {
            this.timeout(timeoutTest);
            await driver.click(homePageElements.link.visibility);
            await driver.waitUntilElementIsVisible(titleElement);
            let actual = await driver.getTextFromElement(titleElement);
            assert.equal(actual,visibilityDisc.visibilityTitlePage);
        });
        it("Click the Sample App", async function () {
            this.timeout(timeoutTest);
            await driver.click(homePageElements.link.sampleApp);
            await driver.waitUntilElementIsVisible(titleElement);
            let actual = await driver.getTextFromElement(titleElement);
            assert.equal(actual,sampleAppDict.sampleAppTitlePage);
        });
        it("Click the Mouse Over", async function () {
            this.timeout(timeoutTest);
            await driver.click(homePageElements.link.mouseOver);
            await driver.waitUntilElementIsVisible(titleElement);
            let actual = await driver.getTextFromElement(titleElement);
            assert.equal(actual,mouseOverDict.mouseOverTitlePage);
        });
        it("Click the Non-Breaking Space", async function () {
            this.timeout(timeoutTest);
            await driver.click(homePageElements.link.nonBreakingSpace);
            await driver.waitUntilElementIsVisible(titleElement);
            let actual = await driver.getTextFromElement(titleElement);
            assert.equal(actual,nonBreakingSpaceDict.nonBreakingSpaceTitlePage);
        });
        it("Click the Overlapped Element", async function () {
            this.timeout(timeoutTest);
            await driver.click(homePageElements.link.overlappedElement);
            await driver.waitUntilElementIsVisible(titleElement);
            let actual = await driver.getTextFromElement(titleElement);
            assert.equal(actual,overlappedElementDict.overlappedElementTitlePage);
        });
        it("Click the Shadow DOM", async function () {
            this.timeout(timeoutTest);
            await driver.click(homePageElements.link.shadowDom);
            await driver.waitUntilElementIsVisible(titleElement);
            let actual = await driver.getTextFromElement(titleElement);
            assert.equal(actual, shadowDOMDict.shadowDOMTitlePage);
        });
});
});
