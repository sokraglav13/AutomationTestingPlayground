const Page = require('../../Pages/Click/Click')
const {url,timeoutTest, browser} = require('../../config')
const {assert} = require('chai')
const {clickDict, ajaxDataDict} = require('../../Pages/dictionary')
browser.forEach(browser => {
    describe('Click', async function () {
        let  driver;
        before(async function (){
            this.timeout(timeoutTest)
            driver = new Page(browser)
            await driver.maximizeWindow()
            await driver.visit(url)
            await driver.clickTheClickLink()
        })
        after(async function (){
            this.timeout(timeoutTest)
            await driver.closeBrowser()
        })
        it('Check the Click title', async function () {
            this.timeout(timeoutTest)
            let actual = await driver.getTheClickTitle()
            assert.equal(actual, clickDict.clickTitle)
        })
        it('Check the Click description', async function () {
            this.timeout(timeoutTest)
            let actual = await driver.getTheClickDesc()
            assert.equal(actual, clickDict.clickDesc)
        })
        it('Check the Scenario title', async function () {
            this.timeout(timeoutTest)
            let actual = await driver.getTheScenarioTitle()
            assert.equal(actual, clickDict.scenarioTitle)
        })
        it('Check the Scenario dots', async function () {
            this.timeout(timeoutTest)
            let actualDot1 = await driver.getTheScenarioDots(1)
            let actualDot2 = await driver.getTheScenarioDots(2)
            console.assert(actualDot1,clickDict.scenarioDot1)
            console.assert(actualDot2,clickDict.scenarioDot2)
        })
        it('Check the Playground title', async function () {
            this.timeout(timeoutTest)
            let actual = await driver.getThePlaygroundTitle()
            assert.equal(actual, clickDict.playgroundTitle)
        })
        it('Check the button text', async function () {
            this.timeout(timeoutTest)
            let actual = await driver.getTheButtonText()
            assert.equal(actual, clickDict.buttonText)
        })
        it('Check the button class attribute BEFORE click', async function () {
            this.timeout(timeoutTest)
            let actual = await driver.getTheButtonClassAttr()
            assert.equal(actual, clickDict.buttonClassNameBeforeClick)
        })
        it('Check the button class attribute AFTER click', async function () {
            this.timeout(timeoutTest)
            await driver.clickBlueButton()
            let actual = await driver.getTheButtonClassAttr()
            assert.equal(actual, clickDict.buttonClassNameAfterClick)
        })
    })
})
