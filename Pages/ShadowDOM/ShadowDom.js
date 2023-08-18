const {By, Builder,Key} = require('selenium-webdriver');
const Page = require('../Page')
const {shadowDOMDict} = require('../dictionary')

const shadowDomElements = {
    shadowDomLink: By.css("div:nth-of-type(5) > div:nth-of-type(2) > h3 > a"),
    shadowDomTitle: By.css("div[class='container'] h3"),
    shadowDomDesc: By.css("div[class='container'] p"),
    scenarioTitle: By.css("body > section:nth-child(2) > div:nth-child(1) > h4:nth-child(3)"),
    scenarioDot1: By.css("body section li:nth-child(1)"),
    scenarioDot2: By.css("body section li:nth-child(2)"),
    scenarioDot3: By.css("body section li:nth-child(3)"),
    playgroundTitle: By.css("body > section:nth-child(2) > div:nth-child(1) > h4:nth-child(5)"),
    guidGenTitle: By.css("div[class='container'] h6"),
    genBtn: By.css(".button-generate"),
    copyBtn: By.css(".button-copy"),
    textField: By.css(".edit-field"),
    rootHost: By.xpath("//guid-generator")
}

class ShadowDom extends Page {
    constructor(browser) {
        super(browser);
    }
    async clickShadowDOMLink(){
        return await this.click(shadowDomElements.shadowDomLink)
    }
    async getTheShadowDomTitle(){
        return await this.getTextFromElement(shadowDomElements.shadowDomTitle)
    }
    async getTheShadowDomDesc(){
        return await this.getTextFromElement(shadowDomElements.shadowDomDesc)
    }
    async getTheScenarioTitle(){
        return await this.getTextFromElement(shadowDomElements.scenarioTitle)
    }
    async getTheScenarioDot(num){
        if(num === 1){
            return await this.getTextFromElement(shadowDomElements.scenarioDot1)
        }
        else if(num === 2){
            return await this.getTextFromElement(shadowDomElements.scenarioDot2)
        }
        else if(num === 3){
            return await this.getTextFromElement(shadowDomElements.scenarioDot3)
        }
    }
    async getThePlaygroundTitle(){
        return await this.getTextFromElement(shadowDomElements.playgroundTitle)
    }
    async #getInShadowDOMElement () {
        const guidGenerator = await this.driver.findElement(shadowDomElements.rootHost);
        const shadowRoot = await guidGenerator.getShadowRoot();
        return shadowRoot
    }
    async generateID(){
        let shadowRoot = await this.#getInShadowDOMElement()
        const buttonInsideShadowDom = await shadowRoot.findElement(shadowDomElements.genBtn);
        await buttonInsideShadowDom.click()
    }
    async clickCopyButton(){
        let shadowRoot = await this.#getInShadowDOMElement()
        const buttonInsideShadowDom = await shadowRoot.findElement(shadowDomElements.copyBtn);
        await buttonInsideShadowDom.click()
    }
    async getTheTextFieldValue(){
        let attribute = "value"
        let shadowRoot = await this.#getInShadowDOMElement()
        const buttonInsideShadowDom = await shadowRoot.findElement(shadowDomElements.textField);
        return await buttonInsideShadowDom.getAttribute(attribute)
    }
}

module.exports = ShadowDom
