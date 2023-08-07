const {By, Builder} = require('selenium-webdriver');
const Page = require('../Page')
const {loadDelayDict} = require('../dictionary')

const loadDelayElements = {

}

class LoadDelay extends Page {
    constructor(browser) {
        super(browser);
    }
}
