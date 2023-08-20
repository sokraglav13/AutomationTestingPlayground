const Page = require('../../Pages/ClientSideDelay/ClientSideDelay')
const {url,timeoutTest, browser} = require('../../config')
const {assert,expect} = require('chai')
const {clientSideDelayDict, ajaxDataDict} = require('../../Pages/dictionary')
browser.forEach(browser => {
    describe('Client Side Delay', async function () {
        let  driver;
        before(async function (){
            this.timeout(timeoutTest)
            driver = new Page(browser)
            await driver.maximizeWindow()
            await driver.visit(url)
            await driver.clickClientSideDelayLink()
        })
        after(async function (){
            this.timeout(timeoutTest)
            await driver.closeBrowser()
        })

        it('Check the Client Side Delay title', async function () {
            this.timeout(timeoutTest)
            let actual = await driver.getTheClientSideDelayTitle()
            assert.equal(actual, clientSideDelayDict.clientSideDelayTitle)
        })

        it('Check the Client Side Delay description', async function () {
            this.timeout(timeoutTest)
            let actual = await driver.getTheClientSideDelayDesc()
            assert.equal(actual, clientSideDelayDict.clientSideDelayDesc)
        })

        it('Check the Scenario title', async function () {
            this.timeout(timeoutTest)
            let actual = await driver.getTheScenarioTitle()
            assert.equal(actual, clientSideDelayDict.scenarioTitle)
        })

        it('Check the Scenario dots description', async function () {
            this.timeout(timeoutTest)
            let actualDot1 = await driver.getTheDotsTextByNum(1)
            let actualDot2 = await driver.getTheDotsTextByNum(2)
            assert.equal(actualDot1, clientSideDelayDict.scenarioDot1)
            assert.equal(actualDot2, clientSideDelayDict.scenarioDot2)
        })

        it('Check the Playground title', async function () {
            this.timeout(timeoutTest)
            let actual = await driver.getThePlaygroundTitle()
            assert.equal(actual, clientSideDelayDict.playgroundTitle)
        })

        it('Check the blue button text' , async function () {
            this.timeout(timeoutTest)
            let actual = await driver.getTheButtonText()
            assert.equal(actual, clientSideDelayDict.buttonText)
        })

        it('Click the blue button and wait for response message', async function () {
            this.timeout(timeoutTest)
            await driver.clickBlueButton()
            let responseMessage = await driver.getTheResponseMessage()
            assert.equal(responseMessage, clientSideDelayDict.responseMessage)
        })

        it('Check if the spinner icon is visible when perform click action in button', async function () {
            this.timeout(timeoutTest)
            //before click
            let isSpinnerVisible = await driver.isSpinnerVisible()
            expect(isSpinnerVisible).to.be.false
            await driver.clickBlueButton()
            //after click
            isSpinnerVisible = await driver.isSpinnerVisible()
            expect(isSpinnerVisible).to.be.true
        })
    })
})
