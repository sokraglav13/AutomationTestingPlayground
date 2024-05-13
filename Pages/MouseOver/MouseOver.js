const {By} = require("selenium-webdriver");
const Page = require("../Page");

const mouseOverElements = {
    mouseOverLink: By.css("a[href='/mouseover']"),
    clickMeButtonBeforeHover: By.className("text-primary"),
    clickMeButtonAfterHover: By.className("text-warning"),
    clickTimes: By.id("clickCount")
};

class MouseOver extends Page {
    constructor(browser) {
        super(browser);
    }
    async clickTheMouseOverLink () {
        await this.click(mouseOverElements.mouseOverLink);
    }
    async clickTheClickMeLink () {
        await this.click(mouseOverElements.clickMeButtonAfterHover);
    }
    async mouseOverTheElement () {
        await this.mouseOver(mouseOverElements.clickMeButtonBeforeHover);
    }
    async mouseOutTheElement () {
        await this.mouseOut(mouseOverElements.clickMeButtonAfterHover);
    }
    async getTheClickMeAttributeBeforeHover () {
        const elem = await this.findElement(mouseOverElements.clickMeButtonBeforeHover);
        return await this.getClassAttribute(elem);
    }
    async getTheClickMeAttributeAfterHover () {
        const elem = await this.findElement(mouseOverElements.clickMeButtonAfterHover);
        return await this.getClassAttribute(elem);
    }
    async getTheClickTimeValue () {
        return await this.getTextFromElement(mouseOverElements.clickTimes);
    }
}


module.exports = MouseOver;
