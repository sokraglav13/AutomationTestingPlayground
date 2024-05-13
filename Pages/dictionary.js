module.exports = {
    sampleAppDict: {
        sampleAppTitlePage: "Sample App",
        loginSuccessfulMsg: (name) => {return `Welcome, ${name}!`;},
        loginFailMsg: "Invalid username/password",
        loginLogoutMsg: "User logged out.",
    },
    textInputDict: {
        textInputTitlePage: "Text Input",
        inputTextBoxPlaceholder: "MyButton",
        buttonText: "Button That Should Change it's Name Based on Input Value"
    },
    classAttributeDict: {
        classAttributeTitlePage: "Class Attribute",
        alertText: "Primary button pressed"
    },
    shadowDOMDict: {
        shadowDOMTitlePage: "Shadow DOM",
        playgroundTitle: "Playground",
        guiGenTitle: "GUID Generator:",
    },
    nonBreakingSpaceDict: {
        nonBreakingSpaceTitlePage: "Non-Breaking Space",
        buttonText: "My Button",
    },
    mouseOverDict: {
        mouseOverTitlePage: "Mouse Over",
        clickMeText: "Click me",
    },
    visibilityDisc: {
        visibilityTitlePage: "Visibility",
    },
    progressBarDict: {
        progressbarTitlePage: "Progress Bar",
        buttonStart: "Start",
        buttonStop: "Stop",
    },
    verifyTextDict: {
        verifyTextTitlePage: "Verify Text",
        playgroundText: "Welcome UserName!",
    },
    dynamicTableDict: {
        dynamicTableTitlePage: "Dynamic Table"
    },
    clickDict: {
        clickTitlePage: "Click",
        buttonClassNameBeforeClick : "btn btn-primary",
        buttonClassNameAfterClick: "btn btn-success"
    },
    clientSideDelayDict: {
        clientSideDelayTitlePage: "Client Side Delay",
        buttonText: "Button Triggering Client Side Logic",
        responseMessage: "Data calculated on the client side.",
    },
    ajaxDataDict: {
        ajaxDataTitlePage: "AJAX Data",
        buttonText: "Button Triggering AJAX Request",
        responseMessage: "Data loaded with AJAX get request.",
    },
    loadDelayDict: {
        loadDelayTitlePage: "Load Delays",
        ButtonTitle: "Button Appearing After Delay",
    },
    hiddenLayersDict: {
        hiddenLayersTitlePage: "Hidden Layers",
        greenButtonIdAttr: "greenButton",
        blueButtonIdAttr: "blueButton",
        buttonTitle: "Button",
    },
    dynamicIDDict: {
        dynamicIDTitlePage: "Dynamic ID",
    },
    homePageDict: {
        title: "UI Test Automation\n" +
            "Playground",
        quote: "Quality is not an act, it is a habit.",
        yellowBox: "The purpose of this website is to provide a platform for sharpening UI test automation skills. Use it to practice with your test automation tool. Use it to learn test automation techniques.",
        paragraph: "Different automation pitfalls appearing in modern web applications are described and emulated below."
    },
    overlappedElementDict: {
        overlappedElementTitlePage: "Overlapped Element"
    },
    scrollbarsDict: {
        scrollbarsTitlePage: "Scrollbars"
    },
    environments: {
        local: "local",
        grid: "grid",
        cicd: "cicd"
    },
    browsers: {
        chrome: "chrome",
        firefox: "firefox",
        edge: "MicrosoftEdge"
    }
};
