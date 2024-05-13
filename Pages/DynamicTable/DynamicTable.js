const {By} = require("selenium-webdriver");
const Page = require("../Page");

const dynamicTableElements = {
    dynamicTableLink: By.css("a[href='/dynamictable']"),
    yellowLabelValue: By.css(".bg-warning"),
    tableChromeValue: By.xpath("//div[4] //span[contains(text(),'%')]")
};

class DynamicTable extends Page {
    constructor(browser) {
        super(browser);
    }
    async clickTheDynamicTableLink () {
        await this.click(dynamicTableElements.dynamicTableLink);
    }
    async getTheYellowLabelValue () {
        const value = await this.getTextFromElement(dynamicTableElements.yellowLabelValue);
        const regex = /(\d+(\.\d+)?)%/;
        const match = value.match(regex);
        return match[0];
    }
    async getTheChromeCPUUsageFromDynamicTable () {
        const rows = await this.driver.findElements(By.xpath("(//div[@role='row'])"));
        for (let i = 1; i <= rows.length; i++) {
            for(let k = 1; k<= rows.length; k++) {
                let appCell = await this.findElement(By.xpath(`(//div[@role='row'])[${i}]//span[${k}]`));
                let appText = await appCell.getText();
                if (appText === "Chrome") {
                    let appCell = await this.findElement(By.xpath(`(//div[@role='row'])[${i}]//span[contains(text(),'%')]`));
                    return await appCell.getText();
                }
            }
        }
    }
}

module.exports = DynamicTable;
