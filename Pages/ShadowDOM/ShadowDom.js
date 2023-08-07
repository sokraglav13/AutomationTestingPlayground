const {By, Builder} = require('selenium-webdriver');
const Page = require('../Page')
const {shadowDOMDict} = require('../dictionary')

const shadowDomElements = {

}

class ShadowDom extends Page {
    constructor(browser) {
        super(browser);
    }
}
