const {By, Builder, until, Capabilities, Key} = require("selenium-webdriver");
const {commandsTimeout} = require("../config");
class Page{
    /**
     * Construct Webdriver instance for specific browser.
     * @param browser - chrome, firefox, MicrosoftEdge
     */
    constructor(browser) {
        // Remote Driver for docker test running
        // const {Options} =require(`selenium-webdriver/${browser}`)
        // const capabilities = Capabilities.chrome();
        // const chromeOptions = new Options();
        // chromeOptions.addArguments('--headless');
        // capabilities.merge(chromeOptions)
        // this.driver = new Builder().usingServer('http://localhost:4444') // replace with your Selenium hub URL
        //     .withCapabilities(capabilities).build();
        this.driver = new Builder().forBrowser(browser).build();

        // if(browser === "chrome"){
        //     const {Options,ServiceBuilder} = require("selenium-webdriver/chrome");
        //     const options = new Options().setChromeBinaryPath("C:/Users/SokratisGlavinas/Downloads/chrome-win64/chrome.exe");
        //     const service = new ServiceBuilder("C:/Users/SokratisGlavinas/Downloadgs/chromedriver-win64/chromedriver.exe");
        //     this.driver = new Builder().forBrowser(browser).setChromeService(service).setChromeOptions(options).build();
        // }else if (browser === "firefox"){
        //     const {Options} = require("selenium-webdriver/firefox");
        //     const options = new Options().setBinary("C:/Program Files/Mozilla Firefox/firefox.exe");
        //     this.driver = new Builder().forBrowser(browser).setFirefoxOptions(options).build();
        // }else if(browser === "MicrosoftEdge") {
        //     const {Options,ServiceBuilder} = require("selenium-webdriver/edge");
        //     const options = new Options().setEdgeChromiumBinaryPath("C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe");
        //     const service = new ServiceBuilder("C:/Users/SokratisGlavinas/Downloads/msedge/edgedriver_win64/msedgedriver.exe");
        //     this.driver = new Builder().forBrowser(browser).setEdgeService(service).setEdgeOptions(options).build();
        // }
    }
    /** Perform a visit to a specified URL
     * @param url - https://www.exampleURL.com
     */
    async visit (url) {
        await this.driver.get(url);
    };

    /** Click the element
     * @param element - Input the locator and name of web element
     */
    async click (element) {
        await this.driver.sleep(200);
        await this.driver.findElement(element).click();
    };

    /** Send in web element the key value
     * @param element - Input the locator and name of web element
     * @param key - Input the value to send in web element
     */
    async send (element,key) {
        await this.driver.findElement(element).sendKeys(key);
    }
    /** Pause the execution for the specify time
     * @param time - Input the time for pause (ms)
     */
    async sleep (ms){
        await this.driver.sleep(ms);
    }

    /** Find an element and hover the mouse to this element
     * @param element - Input the locator and name of web element
     * */
    async mouseOver (element){
        const elementToHover = await this.driver.findElement(element);
        const actions = this.driver.actions({ bridge: true }); // Create an Actions instance
        await actions.move({ origin: elementToHover }).perform();
    }

    /** Move the element to specific x,y axis */
    async mouseOut (element){
        const actions = this.driver.actions({ bridge: true }); // Create an Actions instance
        await actions.move({ x: 0, y: 0 }).perform();
    }

    /** Scrolls to specific element
     * @param element - Input the locator and name of web element
     * */
    async scrollToMakeElementVisible(element) {
        const ele = this.driver.findElement(element);
        await this.driver.executeScript("arguments[0].scrollIntoView(true);", ele);
    }
        async scrollTo(element) {
        const ele = this.driver.findElement(element);
        await this.driver.actions()
            .scroll(0, 0, 0, 0, ele)
            .perform();
    }

    /** Return if the input element is attached in page
     * @param element - Input the locator and name of web element
     * @returns boolean
     * */
    async isElementAttached(element) {
        try {
            const webElement = await this.driver.findElements(element);
            return webElement.length > 0;
        } catch (e) {
            console.error("Error occurred while checking the element", e);
        }
    };

    /** Wait until an element is visible
     * @param element - Input the locator and name of web element
     */
    async waitUntilElementIsVisible (element) {
        await this.driver.wait(until.elementIsVisible(this.driver.findElement(element)), commandsTimeout);
    }

    /** Wait until an element is not visible
     * @param element - Input the locator and name of web element
     */
    async waitUntilElementIsNotVisible (element) {
        await this.driver.wait(until.elementIsNotVisible(this.driver.findElement(element)), commandsTimeout);
    };

    /** Wait until an element located
     * @param element - Input the locator and name of web element
     */
    async waitUntilElementLocated (element) {
        await this.driver.wait((until.elementLocated(element)), commandsTimeout);
    };

    /** Return if the element is visible (True, False)
     * @param element - Input the locator and name of web element
     * @return boolean
     */
    async isVisible (element) {
        return await this.driver.findElement(element).isDisplayed();
    }

    /** Return if the element is enabled (True, False)
     * @param element - Input the locator and name of web element
     * @return boolean
     */
    async isEnabled (element) {
        return await this.driver.findElement(element).isEnabled();
    }

    /** Return if the element is selected (True, False)
     * @param element - Input the locator and name of web element
     * @return boolean
     */
    async isSelected (element) {
        return await this.driver.findElement(element).isSelected();
    }

    /** Wait until an element located and then return the text of element
     * @param element - Input the locator and name of web element
     */
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

    /** This function maximize the current window  */
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

    /** End the current session of the webdriver */
    async closeBrowser() {
        await this.driver.quit();
    };

    /** Refresh the current page */
    async refreshPage () {
        await this.driver.navigate().refresh();
    }

    /** Search for web element
     * @param element - Input the locator and name of web element
     * @example element form (By.css(loginBtn))
     */
    async findElement(element) {
        let theElem = await this.driver.findElement(element);
        return theElem;
    };

    /** Find an element and return the id attribute
     * @param element - Input the locator and name of web element
     */
    async getAttributeID(element) {
        return element.getAttribute("id");
    };

    /** Find an element and return the placeholder attribute
     * @param element - Input the locator and name of web element
     */
    async getAttribute(element) {
        return element.getAttribute("placeholder");
    };

    /** Find an element and return the class attribute
     * @param element - Input the locator and name of web element
     */
    async getClassAttribute(element) {
        return element.getAttribute("class");
    };

    /** Waits for the alert to present */
    async waitAlert() {
        await this.driver.wait(until.alertIsPresent());
    };

    /** Return the alert text */
    async getAlertText() {
        let alert = await this.driver.switchTo().alert();
        return await alert.getText();
    };

    /** Confirm the alert prompt */
    async confirmAlert() {
        let alert = await this.driver.switchTo().alert();
        await alert.accept();
    };

    /** Cancel the alert prompt */
    async cancelAlert() {
        let alert = await this.driver.switchTo().alert();
        await alert.dismiss();
    };

}


module.exports = Page;
