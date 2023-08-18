const {By, Builder} = require('selenium-webdriver');
const Page = require('../Page')
const {dynamicIDDict} = require('../dictionary')

const dynamicIDElements = {
    dynamicIDLink: By.css("div:nth-of-type(1) > div:nth-of-type(1) > h3 > a"),
    dynamicIDTitle: By.css("div[class='container'] h3"),
    dynamicIDDesc: By.css("div[class='container'] p"),
    scenarioTitle: By.css("body > section:nth-child(2) > div:nth-child(1) > h4:nth-child(3)"),
    scenarioDot1: By.css("body section li:nth-child(1)"),
    scenarioDot2: By.css("body section li:nth-child(2)"),
    playgroundTitle: By.css("body > section:nth-child(2) > div:nth-child(1) > h4:nth-child(5)"),
    blueButton: By.css(".btn.btn-primary")
}

class DynamicID extends Page {
    constructor(browser) {
        super(browser);
    }
    async clickDynamicIDLink() {
        await this.click(dynamicIDElements.dynamicIDLink)
    }
    async getTheDynamicIDTitle(){
        return await this.getTextFromElement(dynamicIDElements.dynamicIDTitle)
    }
    async getTheDynamicIDDesc(){
        return await this.getTextFromElement(dynamicIDElements.dynamicIDDesc)
    }
    async getTheScenarioTitle(){
        return await this.getTextFromElement(dynamicIDElements.scenarioTitle)
    }
    async getTheScenarioDots(num){
        if(num === 1){
            return await this.getTextFromElement(dynamicIDElements.scenarioDot1)
        }
        else if (num === 2) {
            return await this.getTextFromElement(dynamicIDElements.scenarioDot2)
        }
        else (console.error("Give correct input number (1,2)!"))    }
    async getThePlaygroundTitle(){
        return await this.getTextFromElement(dynamicIDElements.playgroundTitle)
    }
    async getButtonText(){
        return await this.getTextFromElement(dynamicIDElements.blueButton)
    }
    async getTheDynamicID() {
        const elem = await this.findElement(dynamicIDElements.blueButton)
        return await this.getAttributeID(elem)
    }

}

module.exports = DynamicID
