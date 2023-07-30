const {By, Builder} = require('selenium-webdriver');
const Page = require('../Page')
const {classAttributeDict} = require('../dictionary')

const classAttributeElements = {
    classAttributeLink: By.css("body section[id='overview'] div[class='container'] div:nth-child(1) div:nth-child(2) h3:nth-child(1)"),
    classAttributeTitle: By.css("div[class='container'] h3"),
    classAttributeFirstDesc: By.css("div > p:nth-of-type(1)"),
    classAttributeSecondDesc: By.css("div > p:nth-of-type(2)"),
    classAttributeThirdDesc: By.css("div > p:nth-of-type(3)"),
    classAttributeCode1: By.xpath("/html//section/div/pre[1]"),
    classAttributeCode2: By.xpath("/html//section/div/pre[2]"),
    classAttributeCode3: By.xpath("/html//section/div/pre[3]"),
    ScenarioTitle: By.css('div > h4:nth-of-type(1)'),
    classAttributeScenarioDot1: By.css("body section li:nth-child(1)"),
    classAttributeScenarioDot2: By.css("body section li:nth-child(2)"),
    classAttributePlaygroundTitle: By.css("div > h4:nth-of-type(2)"),
    yellowBtn: By.css("button[class='btn class1 btn-warning btn-test']"),
    blueBtn: By.css("button[class='btn class2 btn-primary btn-test']"),
    greenBtn: By.css("button[class='btn class3 btn-success btn-test']"),
}
class ClassAttribute extends Page{
    constructor(browser) {
        super(browser);
    }
    async clickClassAttribute(){
        return await this.click(classAttributeElements.classAttributeLink);
    }
    async getFirstTitleName(){
        return await this.getTextFromElement(classAttributeElements.classAttributeTitle);
    }
    async getFirstDescription(){
        return await this.getTextFromElement(classAttributeElements.classAttributeFirstDesc);
    }
    async getSecondDescription(){
        return await this.getTextFromElement(classAttributeElements.classAttributeSecondDesc);
    }
    async getThirdDescription(){
        return await this.getTextFromElement(classAttributeElements.classAttributeThirdDesc);
    }
    async getFirstCode(){
        return await this.getTextFromElement(classAttributeElements.classAttributeCode1);
    }
    async getSecondCode(){
        return await this.getTextFromElement(classAttributeElements.classAttributeCode2);
    }
    async getThirdCode(){
        return await this.getTextFromElement(classAttributeElements.classAttributeCode3);
    }
    async getDotsText(number){
        if(number === 1){
            return await this.getTextFromElement(classAttributeElements.classAttributeScenarioDot1);
        } else if (number === 2){
            return await this.getTextFromElement(classAttributeElements.classAttributeScenarioDot2);
        }
    }
    async getSecondTitleName(){
        return await this.getTextFromElement(classAttributeElements.ScenarioTitle);
    }
    async getThirdTitleName(){
        return await this.getTextFromElement(classAttributeElements.classAttributePlaygroundTitle);
    }
    async getThirdDescription(){
        return await this.getTextFromElement(classAttributeElements.classAttributeThirdDesc);
    }
    async getButtonText(color){
        switch (color){
            case 'yellow':
                await this.sleep(500)
                return await this.getTextFromElement(classAttributeElements.yellowBtn);

            case 'green':
                await this.sleep(500)
                return await this.getTextFromElement(classAttributeElements.greenBtn);

            case 'blue':
                await this.sleep(500)
                return await this.getTextFromElement(classAttributeElements.blueBtn);
            default : return 'Give a valid color name (yellow, green, blue)'
        }
    }
    async clickButtonByColor(buttonColor){
        switch (buttonColor){
            case 'yellow':
                await this.sleep(500)
                return await this.click(classAttributeElements.yellowBtn);

            case 'green':
                await this.sleep(500)
                return await this.click(classAttributeElements.greenBtn);


            case 'blue':
                await this.sleep(500)
                return await this.click(classAttributeElements.blueBtn);

            default : return 'Give a valid color name (yellow, green, blue)'
        }
    }
}

module.exports = ClassAttribute;