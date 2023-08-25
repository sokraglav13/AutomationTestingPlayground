const {By} = require("selenium-webdriver");
const Page = require("../Page");

const textInputElements = {
    inputTextBoxPlaceholder: By.id("newButtonName"),
    blueButton: By.id("updatingButton"),
    textInputLink: By.css("a[href='/textinput']"),
};
class TextInput extends Page{
    constructor(browser) {
        super(browser);
    }
    async clickBlueBtn(){
        await this.click(textInputElements.blueButton);
    }
    async getButtonText(){
        await this.sleep(300);
        return await this.getTextFromElement(textInputElements.blueButton);
    }
    async clickTextInput(){
        await this.click(textInputElements.textInputLink);
    }
    async writeInTextField(text){
        await this.send(textInputElements.inputTextBoxPlaceholder,text);
    }
}

module.exports = TextInput;
