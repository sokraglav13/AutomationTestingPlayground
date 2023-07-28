const Page = require('../../Pages/TextInput/TextInput')
const {url,timeoutTest} = require('../../config')
const {assert, use} = require('chai')
const {textInputDict} = require('../../Pages/dictionary')

describe('Login scenarios ', async function () {
    let  driver;
    before(async function (){
        this.timeout(timeoutTest)
        driver = new Page('chrome')
        await driver.maximizeWindow()
        await driver.visit(url)
        await driver.clickTextInput()
    })
    after(async function (){
        this.timeout(timeoutTest)
        await driver.closeBrowser()
    })
    it('Check the first title', async function () {
        this.timeout(timeoutTest)
        let expected = await driver.getFirstTitleName()
        assert.equal(textInputDict.textInputTitle,expected)
    })
    it('Check the first description', async function () {
        this.timeout(timeoutTest)
        let expected = await driver.getFirstDescription()
        assert.equal(textInputDict.textInputDescription,expected)
    })
    it('Check the second title', async function () {
        this.timeout(timeoutTest)
        let expected = await driver.getSecondTitleName()
        assert.equal(textInputDict.scenarioTitle,expected)
    })
    it('Check the first dot under the scenario', async function () {
        this.timeout(timeoutTest)
        let expected = await driver.getSecondDotText(1)
        assert.equal(textInputDict.scenarioDotOne,expected)
    })
    it('Check the first dot under the scenario', async function () {
        this.timeout(timeoutTest)
        let expected = await driver.getSecondDotText(2)
        assert.equal(textInputDict.scenarioDotTwo,expected)
    })
    it('Check the third title', async function () {
        this.timeout(timeoutTest)
        let expected = await driver.getThirdTitleName()
        assert.equal(textInputDict.playgroundTitle,expected)
    })
    it('Check the third description', async function () {
        this.timeout(timeoutTest)
        let expected = await driver.getThirdDescription()
        assert.equal(textInputDict.playgroundDescription,expected)
    })
    it('Check the placeholder of text field', async function () {
        this.timeout(timeoutTest)
        let expected = await driver.getInputTextFieldPlaceholder()
        assert.equal(textInputDict.inputTextBoxPlaceholder,expected)
    })
    it('Check the text of the button', async function () {
        this.timeout(timeoutTest)
        let expected = await driver.getButtonText()
        assert.equal(textInputDict.buttonText,expected)
    })
    it('Input a string inside text field and check if blue button get the changes', async function () {
        this.timeout(timeoutTest)
        const inputString = 'example'
        await driver.writeInTextField(inputString)
        await driver.clickBlueBtn()
        let expected = await driver.getButtonText()
        assert.equal(inputString,expected)
    })
    it('Check if blue button get the changes when input nothing', async function () {
        this.timeout(timeoutTest)
        const inputEmptyString = ''
        const previousString = 'example'
        await driver.writeInTextField(inputEmptyString)
        await driver.clickBlueBtn()
        let expected = await driver.getButtonText()
        assert.equal(previousString,expected)
    })
})