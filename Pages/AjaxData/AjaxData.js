const {By, Builder} = require('selenium-webdriver');
const Page = require('../Page')
const {ajaxDataDict} = require('../dictionary')

const ajaxDataElements = {

}

class AjaxData extends Page {
    constructor(browser) {
        super(browser);
    }
}
