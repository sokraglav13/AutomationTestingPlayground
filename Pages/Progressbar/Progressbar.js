const {By, Builder} = require('selenium-webdriver');
const Page = require('../Page')
const {progressBarDict} = require('../dictionary')

const progressbarElements = {

}

class Progressbar extends Page {
    constructor(browser) {
        super(browser);
    }
}
