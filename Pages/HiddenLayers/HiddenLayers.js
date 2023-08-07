const {By, Builder} = require('selenium-webdriver');
const Page = require('../Page')
const {hiddenLayersDict} = require('../dictionary')

const hiddenLayersElements = {

}

class HiddenLayers extends Page {
    constructor(browser) {
        super(browser);
    }
}
