const {By, Builder} = require('selenium-webdriver');
const Page = require('../Page')
const {clickDict} = require('../dictionary')

const clickElements = {
    clickLink: By.css("div:nth-of-type(2) > div:nth-of-type(3) > h3 > a"),
    clickTitle: By.css("div[class='container'] h3"),
    clickDesc: By.css("div[class='container'] p"),
    scenarioTitle: By.css("body > section:nth-child(2) > div:nth-child(1) > h4:nth-child(3)"),
    scenarioDot1: By.css("body section li:nth-child(1)"),
    scenarioDot2: By.css("body section li:nth-child(2)"),
    playgroundTitle: By.css("body > section:nth-child(2) > div:nth-child(1) > h4:nth-child(5)"),
    blueButton: By.css("#badButton"),
}

class Click extends Page {
    constructor(browser) {
        super(browser);
    }
    async clickTheClickLink(){
        return await this.click(clickElements.clickLink)
    }
    async clickBlueButton(){
        return await this.click(clickElements.blueButton)
    }
    async getTheClickTitle(){
        return await this.getTextFromElement(clickElements.clickTitle)
    }
    async getTheClickDesc(){
        return await this.getTextFromElement(clickElements.clickDesc)
    }
    async getTheScenarioTitle(){
        return await this.getTextFromElement(clickElements.scenarioTitle)
    }
    async getTheScenarioDots(num){
        if(num === 1){
            return await this.getTextFromElement(clickElements.scenarioDot1)
        }
        else if (num === 2) {
            return await this.getTextFromElement(clickElements.scenarioDot2)
        }
        else (console.error("Give correct input number (1,2)!"))    }
    async getThePlaygroundTitle(){
        return await this.getTextFromElement(clickElements.playgroundTitle)
    }
    async getTheButtonText(){
        return await this.getTextFromElement(clickElements.blueButton)
    }
    async getTheButtonClassAttr(){
        const element = await this.findElement(clickElements.blueButton)
        return await this.getClassAttribute(element)
    }
}

module.exports = Click
