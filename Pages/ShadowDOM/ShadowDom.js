const {By} = require("selenium-webdriver");
const Page = require("../Page");

const shadowDomElements = {
    shadowDomLink: By.css("div:nth-of-type(5) > div:nth-of-type(2) > h3 > a"),
    genBtn: By.css(".button-generate"),
    copyBtn: By.css(".button-copy"),
    textField: By.css(".edit-field"),
    rootHost: By.xpath("//guid-generator")
};

class ShadowDom extends Page {
    constructor(browser) {
        super(browser);
    }
    async clickShadowDOMLink(){
        return await this.click(shadowDomElements.shadowDomLink);
    }

    async #getInShadowDOMElement () {
        const guidGenerator = await this.driver.findElement(shadowDomElements.rootHost);
        const shadowRoot = await guidGenerator.getShadowRoot();
        return shadowRoot;
    }
    async generateID(){
        let shadowRoot = await this.#getInShadowDOMElement();
        const buttonInsideShadowDom = await shadowRoot.findElement(shadowDomElements.genBtn);
        await buttonInsideShadowDom.click();
    }
    async clickCopyButton(){
        let shadowRoot = await this.#getInShadowDOMElement();
        const buttonInsideShadowDom = await shadowRoot.findElement(shadowDomElements.copyBtn);
        await buttonInsideShadowDom.click();
    }
    async getTheTextFieldValue(){
        let attribute = "value";
        let shadowRoot = await this.#getInShadowDOMElement();
        const buttonInsideShadowDom = await shadowRoot.findElement(shadowDomElements.textField);
        return await buttonInsideShadowDom.getAttribute(attribute);
    }
}

module.exports = ShadowDom;
