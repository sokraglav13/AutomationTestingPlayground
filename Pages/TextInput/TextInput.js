const {By, Builder} = require('selenium-webdriver');
const Page = require('../Page')
const {sampleAppDict} = require('../dictionary')

const textInputElements = {
    textInputTitle: By.css("div[class='container'] h3"),
    textInputDescription: By.css("div[class='container'] p"),
    scenarioTitle: By.css("div > h4:nth-of-type(1)"),
    scenarioDotOne: By.css("body section li:nth-child(1)"),
    scenarioDotTwo: By.css("body section li:nth-child(2)"),
    playgroundTitle: By.css("div > h4:nth-of-type(2)"),
    playgroundDescription: By.css("label[for='newButtonName']"),
    inputTextBoxPlaceholder: By.id("newButtonName"),
    blueButton: By.id("updatingButton"),
    textInputLink: By.css("a[href='/textinput']"),
}
class TextInput extends Page{
    constructor(browser) {
        super(browser);
    }
    async clickBlueBtn(){
        await this.click(textInputElements.blueButton)
    }
    async getFirstTitleName(){
        return await this.getTextFromElement(textInputElements.textInputTitle);
    }
    async getFirstDescription(){
        return await this.getTextFromElement(textInputElements.textInputDescription);
    }
    async getSecondTitleName(){
        return await this.getTextFromElement(textInputElements.scenarioTitle);
    }
    async getSecondDotText(number){
        if(number === 1){
            return await this.getTextFromElement(textInputElements.scenarioDotOne);
        } else if (number === 2){
            return await this.getTextFromElement(textInputElements.scenarioDotTwo);
        }
    }
    async getThirdTitleName(){
        return await this.getTextFromElement(textInputElements.playgroundTitle);
    }
    async getThirdDescription(){
        return await this.getTextFromElement(textInputElements.playgroundDescription);
    }
    async getButtonText(){
        await this.sleep(300)
        return await this.getTextFromElement(textInputElements.blueButton);
    }
    async getInputTextFieldPlaceholder(){
        let element = await this.findElement(textInputElements.inputTextBoxPlaceholder)
        return await this.getAttribute(element);
    }
    async clickTextInput(){
        await this.click(textInputElements.textInputLink)
    }
    async writeInTextField(text){
        await this.send(textInputElements.inputTextBoxPlaceholder,text)
    }
}

module.exports = TextInput;