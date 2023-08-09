const Page = require('../../Pages/AjaxData/AjaxData')
const {url,timeoutTest, browser} = require('../../config')
const {assert,expect} = require('chai')
const {ajaxDataDict} = require('../../Pages/dictionary')
browser.forEach(browser => {
    describe('Validate all texts in the page', async function () {
        let  driver;
        before(async function (){
            this.timeout(timeoutTest)
            driver = new Page(browser)
            await driver.maximizeWindow()
            await driver.visit(url)
            await driver.clickAJAXDataLink()
        })
        after(async function (){
            this.timeout(timeoutTest)
            await driver.closeBrowser()
        })
        it('Check the AJAX title', async function () {
            this.timeout(timeoutTest)
            let actual = await driver.getTheAjaxTitle()
            assert.equal(actual, ajaxDataDict.ajaxTitle)
        })
        it('Check the AJAX description', async function () {
            this.timeout(timeoutTest)
            let actual = await driver.getTheAjaxDesc()
            assert.equal(actual, ajaxDataDict.ajaxDescription)
        })
        it('Check the Scenario title', async function () {
            this.timeout(timeoutTest)
            let actual = await driver.getTheScenarioTitle()
            assert.equal(actual, ajaxDataDict.scenarioTitle)
        })
        it('Check the Scenario Dots', async function () {
            this.timeout(timeoutTest)
            let actualDot1 = await driver.getTheDotsTextByNum(1)
            let actualDot2 = await driver.getTheDotsTextByNum(2)
            assert.equal(actualDot1, ajaxDataDict.dot1)
            assert.equal(actualDot2, ajaxDataDict.dot2)
        })
        it('Check the Playground title', async function () {
            this.timeout(timeoutTest)
            let actual = await driver.getThePlaygroundTitle()
            assert.equal(actual, ajaxDataDict.playgroundTitle)
        })
        it('Check the button text', async function () {
            this.timeout(timeoutTest)
            let actual = await driver.getTheButtonText()
            assert.equal(actual, ajaxDataDict.buttonText)
        })
        it('Check the spinner animation is visible', async function () {
            this.timeout(timeoutTest)
            let actual = await driver.isSpinnerVisible()
            expect(actual).to.be.false
        })
        it('Click the button and wait for the response in 15s', async function () {
            this.timeout(timeoutTest)
            await driver.clickBlueButton()
            let checkSpinner = await driver.isSpinnerVisible()
            expect(checkSpinner).to.be.true
            let actualResponseMsg = await driver.getTheResponseMessage()
            assert.equal(actualResponseMsg, ajaxDataDict.responseMessage)
        })
    })
})
