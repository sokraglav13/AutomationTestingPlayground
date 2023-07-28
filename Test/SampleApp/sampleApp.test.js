const Page = require('../../Pages/SampleApp/SampleApp')
const {url,timeoutTest} = require('../../config')
const {assert, use} = require('chai')
const {sampleAppDict} = require('../../Pages/dictionary')

describe('Login scenarios ', async function () {
       let  driver;
    beforeEach(async function (){
        this.timeout(timeoutTest)
        driver = new Page('chrome')
        await driver.maximizeWindow()
        await driver.visit(url)
        await driver.clickSampleApp()
    })
    afterEach(async function (){
        this.timeout(timeoutTest)
        await driver.closeBrowser()
    })
    it('Login successful ', async function () {
        this.timeout(timeoutTest)
        const username = 'example' , password = 'pwd'
        await driver.login(username,password)
        let expected = await driver.getLoginState()
        assert.equal(sampleAppDict.loginSuccessfulMsg(username),expected)
    })
    it('Login failed ', async function () {
        this.timeout(timeoutTest)
        const username = 'example' , password = 'pwddsds'
        await driver.login(username,password)
        let expected = await driver.getLoginState()
        assert.equal(sampleAppDict.loginFailMsg,expected)
    })
    it('Logout ', async function () {
        this.timeout(timeoutTest)
        const username = 'example' , password = 'pwd'
        await driver.login(username,password)
        await driver.clickLogIn()
        let expected = await driver.getLoginState()
        assert.equal(sampleAppDict.loginLogoutMsg,expected)
    })
    it('Check Title Name ', async function () {
        this.timeout(timeoutTest)
        let expected = await driver.getTitleName()
        assert.equal(sampleAppDict.title,expected)
    })
    it('Check Description ', async function () {
        this.timeout(timeoutTest)
        let expected = await driver.getDescription()
        assert.equal(sampleAppDict.description,expected)
    })
    it('Check Login Button Name', async function () {
        this.timeout(timeoutTest)
        let expected = await driver.getLoginBtnName()
        assert.equal(sampleAppDict.loginBtnName,expected)
    })
})