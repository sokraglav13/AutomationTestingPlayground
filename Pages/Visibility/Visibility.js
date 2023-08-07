const {By, Builder} = require('selenium-webdriver');
const Page = require('../Page')
const {visibilityDisc} = require('../dictionary')

const visibilityElements = {

}

class Visibility extends Page {
    constructor(browser) {
        super(browser);
    }
}
