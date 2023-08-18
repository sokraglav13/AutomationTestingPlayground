const Page = require('../../Pages/Dynamic_ID/DynamicID')
const {url,timeoutTest, browser} = require('../../config')
const {assert} = require('chai')
const {dynamicIDDict} = require('../../Pages/dictionary')
browser.forEach(browser => {
    describe('', async function () {
        let  driver;
        before(async function (){
            this.timeout(timeoutTest)
            driver = new Page(browser)
            await driver.maximizeWindow()
            await driver.visit(url)
            await driver.clickDynamicIDLink()
        })
        after(async function (){
            this.timeout(timeoutTest)
            await driver.closeBrowser()
        })
        it('Check the Dynamic ID title', async function () {
            this.timeout(timeoutTest)
            let actual = await driver.getTheDynamicIDTitle()
            assert.equal(actual, dynamicIDDict.dynamicIDTitle)
        })
        it('Check the Dynamic ID description', async function () {
            this.timeout(timeoutTest)
            let actual = await driver.getTheDynamicIDDesc()
            assert.equal(actual, dynamicIDDict.dynamicIDDesc)
        })
        it('Check the Scenario title', async function () {
            this.timeout(timeoutTest)
            let actual = await driver.getTheScenarioTitle()
            assert.equal(actual, dynamicIDDict.scenarioTitle)
        })
        it('Check the Scenario Dots', async function () {
            this.timeout(timeoutTest)
            let actualDot1 = await driver.getTheScenarioDots(1)
            let actualDot2 = await driver.getTheScenarioDots(2)
            assert.equal(actualDot1, dynamicIDDict.scenarioDot1)
            assert.equal(actualDot2, dynamicIDDict.scenarioDot2)
        })
        it('Check the Playground title', async function () {
            this.timeout(timeoutTest)
            let actual = await driver.getThePlaygroundTitle()
            assert.equal(actual, dynamicIDDict.playgroundTitle)
        })
        it('Check the Blue button text', async function () {
            this.timeout(timeoutTest)
            let actual = await driver.getButtonText()
            assert.equal(actual, dynamicIDDict.buttonText)
        })
        it('Check the dynamic id after refresh', async function () {
            this.timeout(timeoutTest)
            let beforeRefresh = await driver.getTheDynamicID()
            await driver.refreshPage()
            let afterRefresh = await driver.getTheDynamicID()
            assert.notEqual(beforeRefresh, afterRefresh)
        })
    })
})
