const {By} = require("selenium-webdriver");
const Page = require("../Page");

const progressbarElements = {
    progressBarLink: By.css("a[href='/progressbar']"),
    startBtn: By.css("#startButton"),
    stopBtn: By.css("#stopButton"),
    progressBar: By.id("progressBar"),
};

class Progressbar extends Page {
    constructor(browser) {
        super(browser);
    }
    async clickTheProgressBarLink() {
        await this.click(progressbarElements.progressBarLink);
    }
    async pressStartButton () {
        await this.click(progressbarElements.startBtn);
    }
    async conditionMetPromise () {
        while(true){
            try {
                const progressBar = await this.findElement(progressbarElements.progressBar);
                const style = await progressBar.getAttribute("aria-valuenow");
                if (Number(style) === 75)
                    return Number(style);
            } catch (e) {
                return e;
            }
        }
    }
}

module.exports = Progressbar;
