const {By, Builder} = require('selenium-webdriver');
const Page = require('../Page')
const {dynamicIDDict} = require('../dictionary')

const dynamicIDElements = {

}

class DynamicID extends Page {
    constructor(browser) {
        super(browser);
    }
}
