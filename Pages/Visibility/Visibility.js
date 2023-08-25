const {By} = require("selenium-webdriver");
const Page = require("../Page");

const visibilityElements = {
    visibilityLink: By.css("a[href='/visibility']"),
    hideButton: By.css("#hideButton"),
    removedButton: By.id("removedButton"),
    zeroWidthButton: By.id("zeroWidthButton"),
    overlappedButton: By.id("overlappedButton"),
    overlappedHidingLayer: By.id("hidingLayer"),
    opacityButton: By.id("transparentButton"),
    visibilityHiddenButton: By.id("invisibleButton"),
    displayNoneButton: By.id("notdisplayedButton"),
    offscreenButton: By.id("offscreenButton"),
};

class Visibility extends Page {
    constructor(browser) {
        super(browser);
    }
    async clickVisibilityLink () {
        await this.click(visibilityElements.visibilityLink);
    }
    async clickHideButton () {
        await this.click(visibilityElements.hideButton);
    }
    async checkIfHideButtonIsVisible () {
        return await this.isVisible(visibilityElements.hideButton);
    }
    async checkIfRemovedButtonIsVisible () {
        return await this.isVisible(visibilityElements.removedButton);
    }
    async checkIfZeroWidthButtonIsVisible () {
        return await this.isVisible(visibilityElements.zeroWidthButton);
    }
    async checkIfOverlappedButtonIsVisible () {
        return await this.isVisible(visibilityElements.overlappedButton);
    }
    async checkIfOpacityButtonIsVisible () {
        return await this.isVisible(visibilityElements.opacityButton);
    }
    async checkIfVisibilityHiddenButtonIsVisible () {
        return await this.isVisible(visibilityElements.visibilityHiddenButton);
    }
    async checkIfDisplayNoneButtonIsVisible () {
        return await this.isVisible(visibilityElements.displayNoneButton);
    }
    async checkIfOffscreenButtonIsVisible () {
        return await this.isVisible(visibilityElements.offscreenButton);
    }
    async checkIfRemovedButtonIsAttachedInDOm () {
        return await this.isElementAttached(visibilityElements.removedButton);
    }
    async checkTheWidthOfZeroWidthButton () {
        const elem = await this.findElement(visibilityElements.zeroWidthButton);
        return await elem.getCssValue("width");
    }
    async checkTheOverlappedElementHidingLayersIsAttached () {
        return await this.isVisible(visibilityElements.overlappedHidingLayer);
    }
    async checkTheElementOpacityValue () {
        const elem = await this.findElement(visibilityElements.opacityButton);
        return await elem.getCssValue("opacity");
    }
    async checkTheElementVisibilityValue () {
        const elem = await this.findElement(visibilityElements.visibilityHiddenButton);
        return await elem.getCssValue("visibility");
    }
    async checkTheElementDisplayValue () {
        const elem = await this.findElement(visibilityElements.displayNoneButton);
        return await elem.getCssValue("display");
    }
    async checkTheElementClassAttribute () {
        const elem = await this.findElement(visibilityElements.offscreenButton);
        return await elem.getAttribute("class");
    }
}

module.exports = Visibility;

