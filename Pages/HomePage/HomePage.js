const {By} = require("selenium-webdriver");
const Page = require("../Page");

const homePageElements = {
    title: By.css("h1#title"),
    quote: By.css(".mb-0"),
    yellowBox: By.css("div[role='alert']"),
    smallParagraph: By.css("body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(4)"),
    link: {
        dynamicID: By.css("div:nth-of-type(1) > div:nth-of-type(1) > h3 > a"),
        classAttribute: By.css("div:nth-of-type(1) > div:nth-of-type(2) > h3 > a"),
        hiddenLayers: By.css("div:nth-of-type(1) > div:nth-of-type(3) > h3 > a"),
        loadDelay: By.css("div:nth-of-type(1) > div:nth-of-type(4) > h3 > a"),
        ajaxData: By.css("div:nth-of-type(2) > div:nth-of-type(1) > h3 > a"),
        clientSideDelay: By.css("div:nth-of-type(2) > div:nth-of-type(2) > h3 > a"),
        click: By.css("div:nth-of-type(2) > div:nth-of-type(3) > h3 > a"),
        textInput: By.css("div:nth-of-type(2) > div:nth-of-type(4) > h3 > a"),
        scrollbars: By.css("div:nth-of-type(3) > div:nth-of-type(1) > h3 > a"),
        dynamicTable: By.css("div:nth-of-type(3) > div:nth-of-type(2) > h3 > a"),
        verifyText: By.css("div:nth-of-type(3) > div:nth-of-type(3) > h3 > a"),
        progressBar: By.css("div:nth-of-type(3) > div:nth-of-type(4) > h3 > a"),
        visibility: By.css("div:nth-of-type(4) > div:nth-of-type(1) > h3 > a"),
        sampleApp: By.css("div:nth-of-type(4) > div:nth-of-type(2) > h3 > a"),
        mouseOver: By.css("div:nth-of-type(4) > div:nth-of-type(3) > h3 > a"),
        nonBreakingSpace: By.css("div:nth-of-type(4) > div:nth-of-type(4) > h3 > a"),
        overlappedElement: By.css("div:nth-of-type(5) > div:nth-of-type(1) > h3 > a"),
        shadowDom: By.css("div:nth-of-type(5) > div:nth-of-type(2) > h3 > a"),
    }
};

class HomePage extends Page {
    constructor(browser) {
        super(browser);
    }
    async getTheTitle(){
        return await this.getTextFromElement(homePageElements.title);
    }
    async getTheQuote(){
        return await this.getTextFromElement(homePageElements.quote);
    }
    async getTheYellowBox(){
        return await this.getTextFromElement(homePageElements.yellowBox);
    }
    async getTheParagraph(){
        return await this.getTextFromElement(homePageElements.smallParagraph);
    }
    async clickLink(link){
        await this.click(link);
    }
}

module.exports = HomePage;
module.exports.homePageElements = homePageElements;
