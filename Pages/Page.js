const {By, Builder, until, Capabilities, Key} = require("selenium-webdriver");
const {commandsTimeout} = require('../config')
class Page{
    constructor(browser) {
        this.driver = new Builder().forBrowser(browser).build();
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
    async findElement(element) {
        let theElem = await this.driver.findElement(element);
        return theElem;
    };
    async getAttribute(element) {
        return element.getAttribute('placeholder')
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