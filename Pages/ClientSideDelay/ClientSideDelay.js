const {By} = require("selenium-webdriver");
const Page = require("../Page");

const clientSideDelayElements = {
    clientSideDelayLink: By.css("a[href='/clientdelay']"),
    blueButton: By.css("#ajaxButton"),
    responseElement: By.css("body > section:nth-child(2) > div:nth-child(1) > div:nth-child(8) > p:nth-child(1)"),
    spinner: By.css("#spinner")
};

class ClientSideDelay extends Page {
    constructor(browser) {
        super(browser);
    }

    async clickClientSideDelayLink(){
        return await this.click(clientSideDelayElements.clientSideDelayLink);
    }
    async clickBlueButton(){
        return await this.click(clientSideDelayElements.blueButton);
    }
    async isSpinnerVisible(){
        await this.sleep(400);
        return await this.isVisible(clientSideDelayElements.spinner);
    }
    async getTheResponseMessage(){
        await this.sleep(400);
        await this.waitUntilElementLocated(clientSideDelayElements.responseElement);
        return await this.getTextFromElement(clientSideDelayElements.responseElement);
    }
}

module.exports = ClientSideDelay;
