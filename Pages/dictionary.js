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
    shadowDOMDict: {

    },
    overlappedElementDict: {

    },
    nonBreakingSpaceDict: {

    },
    mouseOverDict: {},
    visibilityDisc: {},
    progressBarDict: {},
    verifyTextDict: {},
    dynamicTableDict: {},
    scrollbarsDict: {},
    clickDict: {
        clickTitle: "Click",
        clickDesc: "Physical mouse click and DOM event emulated click are differently handled by browsers. There are still cases, with sometimes hardly identifiable reasons, when an event based click does not work. The solution for this problem is emulating physical mouse click. This page is specifically designed to ignore event based click.",
        scenarioTitle: "Scenario",
        scenarioDot1: "Record button click. The button becomes green after clicking.",
        scenarioDot2: "Then execute your test to make sure that it is able to click the button.",
        playgroundTitle: "Playground",
        buttonText: "Button That Ignores DOM Click Event",
        buttonClassNameBeforeClick : "btn btn-primary",
        buttonClassNameAfterClick: "btn btn-success"
    },
    clientSideDelayDict: {
        clientSideDelayTitle: "Client Side Delay",
        clientSideDelayDesc: "An element may appaear on a page after heavy JavaScript processing on a client side. A test should be able to wait for an element to show up.",
        scenarioTitle: "Scenario",
        scenarioDot1: "Record the following steps. Press the button below and wait for data to appear (15 seconds), click on text of the loaded label.",
        scenarioDot2: "Then execute your test to make sure it waits for label text to appear.",
        playgroundTitle: "Playground",
        buttonText: "Button Triggering Client Side Logic",
        responseMessage: "Data calculated on the client side.",
    },
    ajaxDataDict: {
        ajaxTitle: "AJAX Data",
        ajaxDescription: "An element may appaear on a page after processing of an AJAX request to a web server. A test should be able to wait for an element to show up.",
        scenarioTitle: "Scenario",
        dot1: "Record the following steps. Press the button below and wait for data to appear (15 seconds), click on text of the loaded label.",
        dot2: "Then execute your test to make sure it waits for label text to appear.",
        playgroundTitle: "Playground",
        buttonText: "Button Triggering AJAX Request",
        responseMessage: "Data loaded with AJAX get request.",

    },
    loadDelayDict: {},
    hiddenLayersDict: {},
    dynamicIDDict: {},
    homePageDict: {
        title: "UI Test Automation\n" +
            "Playground",
        quote: "Quality is not an act, it is a habit.",
        yellowBox: "The purpose of this website is to provide a platform for sharpening UI test automation skills. Use it to practice with your test automation tool. Use it to learn test automation techniques.",
        paragraph: "Different automation pitfalls appearing in modern web applications are described and emulated below."
    }
}
