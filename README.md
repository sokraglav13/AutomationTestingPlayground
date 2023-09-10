# AutomationTestingPlayground

This project is an approach to automate testing in web application by usiing popular framework like Selenium, Mocha & Chai.

The design pattern which was followed is Page Object Model that is a popular design pattern in automation testing and commonly used to achive the following benefits :
- Modular and Maintainable Code
- Improved Code Readability
- Enhanced Collaboration
- Reduced Redundancy
- Scalability
  
# Capabilities
- Run test in Selenium Grid
- Run test local to your computer
- Run test in 3 browsers (Chrome, Edge, Firefox)
- Run test in parallel execution
- Export reports from test execution

# Required Actions & Settings
1) Download and install the required browsers ([Google Chrome](https://googlechromelabs.github.io/chrome-for-testing/), [Firefox](https://www.mozilla.org/en-US/firefox/new/), [Microsoft Edge](https://www.microsoft.com/en-us/edge/download?form=MA13FJ) )
2) Downolad the require browser drivers ([Google Chrome](https://googlechromelabs.github.io/chrome-for-testing/), [Firefox](https://github.com/mozilla/geckodriver/releases), [Microsoft Edge](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/) )
3) To run successfully local test must add in Page.js file your path to driver and browser executables for all browsers Chrome, Firefox, Edge.
- `ADD YOUR PATH TO (BROWSER) DRIVER EXECUTABLE` : Path to driver executable.
- `ADD YOUR PATH TO (BROWSER) EXECUTABLE` : Path to browser executable.
```javascript
 if(browser === "chrome"){
            const pathToChromeDriver = 'ADD YOUR PATH TO CHROME DRIVER EXECUTABLE'   <----------
            const pathToChromeExecutable = 'ADD YOUR PATH TO CHROME EXECUTABLE'   <---------- 
            const {Options,ServiceBuilder} = require("selenium-webdriver/chrome");
            const options = new Options().setChromeBinaryPath(pathToChromeExecutable);
            const service = new ServiceBuilder(pathToChromeDriver);
            this.driver = new Builder().forBrowser(browser).setChromeService(service).setChromeOptions(options).build();
}else if (browser === "firefox"){
            const pathToFirefoxDriver = 'ADD YOUR PATH TO FIREFOX DRIVER EXECUTABLE'   <----------
            const pathToFirefoxExecutable = 'ADD YOUR PATH TO FIREFOX EXECUTABLE';   <----------
            const {Options,ServiceBuilder} = require("selenium-webdriver/firefox");
            const options = new Options().setBinary(pathToFirefoxExecutable);
            const service = new ServiceBuilder(pathToFirefoxDriver)
            this.driver = new Builder().forBrowser(browser).setFirefoxService(service).setFirefoxOptions(options).build();
}else if(browser === "MicrosoftEdge") {
            const pathToMicrosoftEdgeDriver = 'ADD YOUR PATH TO MICROSOFT EDGE DRIVER EXECUTABLE';   <----------
            const pathToMicrosoftEdgeExecutable = 'ADD YOUR PATH TO MICROSOFT EDGE EXECUTABLE';   <----------
            const {Options,ServiceBuilder} = require("selenium-webdriver/edge");
            const options = new Options().setEdgeChromiumBinaryPath(pathToMicrosoftEdgeExecutable);
            const service = new ServiceBuilder(pathToMicrosoftEdgeDriver);
            this.driver = new Builder().forBrowser(browser).setEdgeService(service).setEdgeOptions(options).build();
        }
```

# Configurations

In `config.js` file you can modify the configuration of the project :
- `timeoutTest` : Change the timeout of test in milliseconds 
- `commandsTimeout` : Chnge the timeout of command execution 
- `browser` : Specify the browsers for test (`chrome`,  `MicrosoftEdge`,  `firefox`)

# Run Tests

In `package.json` they have specify execution scripts :
- `test-serial`
- `test-parallel`
- `test-mochawesome`
- `test-parallel-mochawesome`


