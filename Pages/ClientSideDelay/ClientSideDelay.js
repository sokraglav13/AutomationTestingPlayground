const {By, Builder} = require('selenium-webdriver');
const Page = require('../Page')
const {clientSideDelayDict} = require('../dictionary')

const clientSideDelayElements = {

}

class ClientSideDelay extends Page {
    constructor(browser) {
        super(browser);
    }
}
