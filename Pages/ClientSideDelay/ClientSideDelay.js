const {By, Builder} = require('selenium-webdriver');
const Page = require('../Page')
const {clientSideDelayDict} = require('../dictionary')

const clientSideDelayElements = {
    clientSideDelayLink: By.css("div:nth-of-type(2) > div:nth-of-type(2) > h3 > a"),
    clientSideDelayTitle: By.css("div[class='container'] h3"),
    clientSideDelayDesc: By.css("body > section:nth-child(2) > div:nth-child(1) > p:nth-child(2)"),
    scenarioTitle: By.css("body > section:nth-child(2) > div:nth-child(1) > h4:nth-child(3)"),
    scenarioDot1: By.css("body section li:nth-child(1)"),
    scenarioDot2: By.css("body section li:nth-child(2)"),
    playgroundTitle: By.css("body > section:nth-child(2) > div:nth-child(1) > h4:nth-child(5)"),
    blueButton: By.css("#ajaxButton"),
    responseElement: By.css("body > section:nth-child(2) > div:nth-child(1) > div:nth-child(8) > p:nth-child(1)"),
    spinner: By.css("#spinner")
}

class ClientSideDelay extends Page {
    constructor(browser) {
        super(browser);
    }

    async clickClientSideDelayLink(){
        return await this.click(clientSideDelayElements.clientSideDelayLink)
    }
    async getTheClientSideDelayTitle(){
        return await this.getTextFromElement(clientSideDelayElements.clientSideDelayTitle)
    }
    async getTheClientSideDelayDesc(){
        return await this.getTextFromElement(clientSideDelayElements.clientSideDelayDesc)
    }
    async getTheScenarioTitle(){
        return await this.getTextFromElement(clientSideDelayElements.scenarioTitle)
    }
    async getTheDotsTextByNum(num){
        if(num === 1){
            return await this.getTextFromElement(clientSideDelayElements.scenarioDot1)
        }
        else if (num === 2) {
            return await this.getTextFromElement(clientSideDelayElements.scenarioDot2)
        }
        else (console.error("Give correct input number (1,2)!"))
    }
    async getThePlaygroundTitle(){
        return await this.getTextFromElement(clientSideDelayElements.playgroundTitle)
    }
    async getTheButtonText(){
        return await this.getTextFromElement(clientSideDelayElements.blueButton)
    }
    async clickBlueButton(){
        return await this.click(clientSideDelayElements.blueButton)
    }
    async isSpinnerVisible(){
        await this.sleep(400)
        return await this.isVisible(clientSideDelayElements.spinner)
    }
    async waitForSpinnerToAppear(){
        await this.sleep(400)
        return await this.waitUntilElementIsVisible(clientSideDelayElements.spinner)
    }
    async waitForSpinnerToDisappear(){
        await this.sleep(400)
        return await this.waitUntilElementIsNotVisible(clientSideDelayElements.spinner)
    }
    async getTheResponseMessage(){
        await this.sleep(400)
        await this.waitUntilElementLocated(clientSideDelayElements.responseElement)
        return await this.getTextFromElement(clientSideDelayElements.responseElement)
    }
}

module.exports = ClientSideDelay
