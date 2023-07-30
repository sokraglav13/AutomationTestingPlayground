const {By} = require("selenium-webdriver");
module.exports = {
    sampleAppDict: {
        title: 'Sample App',
        description: 'Fill in and submit the form. For successfull login use any non-empty user name and `pwd` as password.',
        loginSuccessfulMsg: (name) => {return `Welcome, ${name}!`},
        loginFailMsg: 'Invalid username/password',
        loginLogoutMsg: 'User logged out.',
        loginBtnName: 'Log In'
    },
    textInputDict: {
        textInputTitle: 'Text Input',
        textInputDescription: 'Entering text with physical keyboard can be different from sending DOM events to an element. This page is specifically desined to illustrate this problem. There are cases when attempts to set a text via DOM events lead to nowhere and the only way to proceed is to emulate real keyboard input at OS level.',
        scenarioTitle: 'Scenario',
        scenarioDotOne: 'Record setting text into the input field and pressing the button.',
        scenarioDotTwo: 'Then execute your test to make sure that the button name is changing.',
        playgroundTitle: 'Playground',
        playgroundDescription: 'Set New Button Name',
        inputTextBoxPlaceholder: 'MyButton',
        buttonText: 'Button That Should Change it\'s Name Based on Input Value'
    },
    classAttributeDict: {
        classAttributeTitle: "Class Attribute",
        classAttributeFirstDesc: "Class attribute of an element may contain more than one class reference. E.g.",
        classAttributeSecondDesc: "XPath selector relying on a class must be well formed. For example, the following will not work:",
        classAttributeThirdDesc: "Correct variant is",
        classAttributeCode1: "<button class=\"btn btn-primary btn-test\">",
        classAttributeCode2: "//button[@class='btn-primary']",
        classAttributeCode3: "//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]",
        ScenarioTitle: "Scenario",
        classAttributeScenarioDot1: "Record primary (blue) button click and press ok in alert popup.",
        classAttributeScenarioDot2: "Then execute your test to make sure that it can identify the button using btn-primary class.",
        classAttributePlaygroundTitle: "Playground",
        greenBtn: "Button",
        blueBtn: "Button",
        greenBtn: "Button",
        alertText: 'Primary button pressed'
    },
}