const {By, Builder, until, Capabilities, Key} = require("selenium-webdriver");
const {commandsTimeout} = require('../config')
class Page{
    constructor(browser) {
        if(browser === 'chrome'){
            const {Options,ServiceBuilder} = require("selenium-webdriver/chrome");
            const options = new Options().setChromeBinaryPath("C:/Users/SokratisGlavinas/Downloads/chrome-win64/chrome.exe");
            const service = new ServiceBuilder('C:/Users/SokratisGlavinas/Downloads/chromedriver-win64/chromedriver.exe')
            this.driver = new Builder().forBrowser(browser).setChromeService(service).setChromeOptions(options).build();
        }else if (browser === 'firefox'){
            const {Options} = require("selenium-webdriver/firefox");
            const options = new Options().setBinary("C:/Program Files/Mozilla Firefox/firefox.exe");
            this.driver = new Builder().forBrowser(browser).setFirefoxOptions(options).build();
        }else if(browser === 'MicrosoftEdge') {
            const {Options,ServiceBuilder} = require("selenium-webdriver/edge");
            const options = new Options().setEdgeChromiumBinaryPath("C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe");
            const service = new ServiceBuilder('C:/Users/SokratisGlavinas/Downloads/msedge/edgedriver_win64/msedgedriver.exe')
            this.driver = new Builder().forBrowser(browser).setEdgeService(service).setEdgeOptions(options).build();
        }

        // this.driver = new Builder().forBrowser(browser).build();
    }
    // async driverCreation(browser) {
    //     if (browser === "firefox") {
    //         const {Options} = require("selenium-webdriver/firefox");
    //         const options = new Options().setBinary("C:/Program Files/Mozilla Firefox/firefox.exe");
    //         this.driver = await new Builder().forBrowser("firefox").setFirefoxOptions(options).build();
    //     } else this.driver = new Builder().forBrowser(browser).build();
    // };

    async visit (url) {
        await this.driver.get(url);
    };
    async click (element) {
        await this.driver.findElement(element).click();
    };
    async send (element,text) {
        await this.driver.findElement(element).sendKeys(text);
    }
    async sleep (ms){
        await this.driver.sleep(ms);
    }
    async mouseOver (element){
        const elementToHover = await this.driver.findElement(element);
        const actions = this.driver.actions({ bridge: true }); // Create an Actions instance
        await actions.move({ origin: elementToHover }).perform();
    }
    async mouseOut (element){
        const elementToHover = await this.driver.findElement(element);
        const actions = this.driver.actions({ bridge: true }); // Create an Actions instance
        await actions.move({ x: 0, y: 0 }).perform();
    }

    async isElementAttached(element) {
        try {
            const webElement = await this.driver.findElements(element);
            return webElement.length > 0;
        } catch (e) {
            console.error("Error occurred while checking the element", e);
        }
    };
    async waitUntilElementIsVisible (element) {
        await this.driver.wait(until.elementIsVisible(this.driver.findElement(element)), commandsTimeout)
    }
    async waitUntilElementIsVisible (element) {
        return await this.driver.wait(until.elementIsVisible(this.driver.findElement(element)), commandsTimeout);
    };
    async waitUntilElementIsNotVisible (element) {
        return await this.driver.wait(until.elementIsNotVisible(this.driver.findElement(element)), commandsTimeout);
    };
    async waitUntilElementLocated (element) {
        await this.driver.wait((until.elementLocated(element)), commandsTimeout);
    };
    async isVisible (element) {
        return await this.driver.findElement(element).isDisplayed();
    }
    async isEnabled (element) {
        return await this.driver.findElement(element).isEnabled();
    }
    async isSelected (element) {
        return await this.driver.findElement(element).isSelected();
    }
    async getTextFromElement (element) {
        // await this.sleep(1500)
        await this.driver.wait((until.elementLocated(element)), commandsTimeout);
        await this.driver.wait(until.elementIsVisible(this.driver.findElement(element)), commandsTimeout);
        await this.driver.wait(until.elementIsEnabled(this.driver.findElement(element)), commandsTimeout);
        return await this.driver.wait(until.elementLocated(element), commandsTimeout).getText();
    };
    /**
     * Set the window size for specific input values width and height
     * @param width - Input the width
     * @param height - Input the height
     */
 async setWindowSize(width, height) {
        await this.driver.manage().window().setSize({ x: 0, y: 0, width: width, height: height });
    };
    /**
     * This function maximize the current window  */
 async maximizeWindow() {
        await this.driver.manage().window().maximize();
    };
    /**
     * This function minimize the current window */
 async minimizeWindow() {
        await this.driver.manage().window().minimize();
    };
    /**
     * This function set the window in  fullscreen mode */
 async setFullScreen() {
        await this.driver.manage().window().fullscreen();
    };
    async closeBrowser() {
        await this.driver.quit();
    };
    async refreshPage () {
        await this.driver.navigate().refresh();
    }
    async findElement(element) {
        let theElem = await this.driver.findElement(element);
        return theElem;
    };
    async getAttributeID(element) {
        return element.getAttribute('id')
    };
    async getAttribute(element) {
        return element.getAttribute('placeholder')
    };
    async getClassAttribute(element) {
        return element.getAttribute('class')
    };
    async getClassAttributeValue(element) {
        return element.getAttribute('value')
    };
    async waitAlert() {
        await this.driver.wait(until.alertIsPresent())
    };
    async getAlertText() {
        let alert = await this.driver.switchTo().alert()
        return await alert.getText()
    };
    async confirmAlert() {
        let alert = await this.driver.switchTo().alert();
        await alert.accept();
    };
    async cancelAlert() {
        let alert = await this.driver.switchTo().alert();
        await alert.dismiss();
    };

}


module.exports = Page;
