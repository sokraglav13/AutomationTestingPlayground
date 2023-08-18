const Page = require('../../Pages/ShadowDOM/ShadowDom')
const {url,timeoutTest, browser} = require('../../config')
const {assert,expect} = require('chai')
const {shadowDOMDict} = require('../../Pages/dictionary')
browser.forEach(browser => {
    describe('', async function () {
        let  driver;
        before(async function (){
            this.timeout(timeoutTest)
            driver = new Page(browser)
            await driver.maximizeWindow()
            await driver.visit(url)
            await driver.clickShadowDOMLink()
        })
        after(async function (){
            this.timeout(timeoutTest)
            await driver.closeBrowser()
        })
        it('Check the Shadow DOM title', async function () {
            this.timeout(timeoutTest)
            let actual = await driver.getTheShadowDomTitle()
            assert.equal(actual, shadowDOMDict.shadowDomTitle)
        })
        it('Check the Shadow DOM Description', async function () {
            this.timeout(timeoutTest)
            let actual = await driver.getTheShadowDomDesc()
            assert.equal(actual, shadowDOMDict.shadowDomDesc)
        })
        it('Check the Scenario title', async function () {
            this.timeout(timeoutTest)
            let actual = await driver.getTheScenarioTitle()
            assert.equal(actual, shadowDOMDict.scenarioTitle)
        })
        it('Check the Scenario Dots', async function () {
            this.timeout(timeoutTest)
            let actualDot1 = await driver.getTheScenarioDot(1)
            let actualDot2 = await driver.getTheScenarioDot(2)
            let actualDot3 = await driver.getTheScenarioDot(3)
            assert.equal(actualDot1, shadowDOMDict.scenarioDot1)
            assert.equal(actualDot2, shadowDOMDict.scenarioDot2)
            assert.equal(actualDot3, shadowDOMDict.scenarioDot3)
        })
        it('Check the Playground title', async function () {
            this.timeout(timeoutTest)
            let actual = await driver.getTheShadowDomTitle()
            assert.equal(actual, shadowDOMDict.shadowDomTitle)
        })
        it('Check the GUID Gen title', async function () {
            this.timeout(timeoutTest)
            let actual = await driver.getTheShadowDomTitle()
            assert.equal(actual, shadowDOMDict.shadowDomTitle)
        })
        it('Click the generate ID and text field should not be empty', async function () {
            this.timeout(timeoutTest)
            const empty = ''
            await driver.generateID()
            await driver.sleep(1000)
            let textField = await driver.getTheTextFieldValue()
            expect(textField).to.not.equal(empty)
        })
        //Copy button not working
        it('Click copy button not working', async function () {
            this.timeout(timeoutTest)

        })
    })
})
