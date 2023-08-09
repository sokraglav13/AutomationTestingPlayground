const {By, Builder} = require('selenium-webdriver');
const Page = require('../Page')
const {ajaxDataDict} = require('../dictionary')

const ajaxDataElements = {
    ajaxTitle: By.css("div[class='container'] h3"),
    ajaxDescription: By.css("div[class='container'] p"),
    scenarioTitle: By.css("body > section:nth-child(2) > div:nth-child(1) > h4:nth-child(3)"),
    scenarioDotOne: By.css("body section li:nth-child(1)"),
    scenarioDotTwo: By.css("body section li:nth-child(2)"),
    playgroundTitle: By.css("body > section:nth-child(2) > div:nth-child(1) > h4:nth-child(5)"),
    blueButton: By.css("#ajaxButton"),
    spinner: By.css("#spinner"),
    greenElement: (num)  => (By.css(`div[id='content'] p:nth-child(${num})`)),
    ajaxDataLink: By.css("div:nth-of-type(2) > div:nth-of-type(1) > h3 > a")
}

class AjaxData extends Page {
    constructor(browser) {
        super(browser);
    }
    async clickAJAXDataLink(){
        return await this.click(ajaxDataElements.ajaxDataLink)
    }
    async getTheAjaxTitle(){
        return await this.getTextFromElement(ajaxDataElements.ajaxTitle)
    }
    async getTheAjaxDesc(){
        return await this.getTextFromElement(ajaxDataElements.ajaxDescription)
    }
    async getTheScenarioTitle(){
        return await this.getTextFromElement(ajaxDataElements.scenarioTitle)
    }
    async getTheDotsTextByNum(num){
        if(num === 1){
            return await this.getTextFromElement(ajaxDataElements.scenarioDotOne)
        }
        else if (num === 2) {
            return await this.getTextFromElement(ajaxDataElements.scenarioDotTwo)
        }
        else (console.error("Give correct input number (1,2)!"))
    }
    async getThePlaygroundTitle(){
        return await this.getTextFromElement(ajaxDataElements.playgroundTitle)
    }
    async getTheButtonText(){
        return await this.getTextFromElement(ajaxDataElements.blueButton)
    }
    async getTheResponseElementText(num){
        return await this.getTextFromElement(ajaxDataElements.greenElement(num))
    }
    async clickBlueButton(){
        return await this.click(ajaxDataElements.blueButton)
    }
    async isSpinnerVisible(){
        await this.sleep(400)
        return await this.isVisible(ajaxDataElements.spinner)
    }
    async waitForSpinnerToAppear(){
        await this.sleep(400)
        return await this.waitUntilElementIsVisible(ajaxDataElements.spinner)
    }
    async waitForSpinnerToDisappear(){
        await this.sleep(400)
        return await this.waitUntilElementIsNotVisible(ajaxDataElements.spinner)
    }
    async getTheResponseMessage(){
        await this.sleep(400)
        await this.waitUntilElementLocated(ajaxDataElements.greenElement(1))
        return await this.getTextFromElement(ajaxDataElements.greenElement(1))
    }
}

module.exports = AjaxData;
