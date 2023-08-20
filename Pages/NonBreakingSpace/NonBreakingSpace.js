const {By, Builder} = require('selenium-webdriver');
const Page = require('../Page')
const {nonBlockingSpaceDict} = require('../dictionary')

const nonBreakingSpaceElements = {

}

class NonBreakingSpace extends Page {
    constructor(browser) {
        super(browser);
    }
}

module.exports = NonBreakingSpace
