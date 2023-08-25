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
        return new Promise(async (resolve) => {
            const interval = setInterval(async () => {
                const expectedPercentage = 75;
                const progressBar = await this.findElement(progressbarElements.progressBar);
                const style = await progressBar.getAttribute("style");
                const widthPercentage = parseInt(style.match(/width: (\d+)/)[1], 10);
                if (widthPercentage >= expectedPercentage) {
                    await this.click(progressbarElements.stopBtn);
                    clearInterval(interval);
                    resolve(widthPercentage);
                }
            }, 30);
        });
    }
}

module.exports = Progressbar;
