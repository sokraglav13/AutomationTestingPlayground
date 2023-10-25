# AutomationTestingPlayground

The **Automated Testing** for Web Applications is a comprehensive quality assurance project aimed at enhancing the reliability and stability of web-based software systems. Leveraging the power of Selenium, Mocha & Chai, this project is designed to automate the testing process, ensuring consistent and efficient evaluation of web applications.

# Design Pattern
The Page Object Model (POM) is a widely adopted design pattern in automated software testing, specifically for web applications. It provides a **structured** and **organized** approach to test automation by separating the test code from the elements and actions on web pages. The primary goal of the Page Object Model is to enhance test **maintainability**, **reusability**, and **readability**, thereby improving the overall **efficiency** of automated testing efforts.
  
# Capabilities
- Run test in Selenium Grid
- Run test local to your computer
- Run test in 3 browsers (Chrome, Edge, Firefox)
- Run test in parallel execution
- Export reports from test execution

# Required Actions & Settings
1) Download and install the required browsers ([Google Chrome](https://googlechromelabs.github.io/chrome-for-testing/), [Firefox](https://www.mozilla.org/en-US/firefox/new/), [Microsoft Edge](https://www.microsoft.com/en-us/edge/download?form=MA13FJ) )
2) Downolad the require browser drivers ([Google Chrome](https://googlechromelabs.github.io/chrome-for-testing/), [Firefox](https://github.com/mozilla/geckodriver/releases), [Microsoft Edge](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/) )
3) To run tests successfully local must add in Page.js file your path to driver and browser executables for all browsers Chrome, Firefox, Edge.
- `ADD YOUR PATH TO (BROWSER) DRIVER EXECUTABLE` : Path to driver executable.
- `ADD YOUR PATH TO (BROWSER) EXECUTABLE` : Path to browser executable.
```javascript
 if(browser === browsers.chrome){
            const pathToChromeDriver = 'ADD YOUR PATH TO CHROME DRIVER EXECUTABLE'   <----------
            const pathToChromeExecutable = 'ADD YOUR PATH TO CHROME EXECUTABLE'   <---------- 
            const {Options,ServiceBuilder} = require("selenium-webdriver/chrome");
            const options = new Options().setChromeBinaryPath(pathToChromeExecutable);
            const service = new ServiceBuilder(pathToChromeDriver);
            this.driver = new Builder().forBrowser(browser).setChromeService(service).setChromeOptions(options).build();
}else if (browser === browsers.firefox){
            const pathToFirefoxDriver = 'ADD YOUR PATH TO FIREFOX DRIVER EXECUTABLE'   <----------
            const pathToFirefoxExecutable = 'ADD YOUR PATH TO FIREFOX EXECUTABLE';   <----------
            const {Options,ServiceBuilder} = require("selenium-webdriver/firefox");
            const options = new Options().setBinary(pathToFirefoxExecutable);
            const service = new ServiceBuilder(pathToFirefoxDriver)
            this.driver = new Builder().forBrowser(browser).setFirefoxService(service).setFirefoxOptions(options).build();
}else if(browser === browsers.edge) {
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
- `commandsTimeout` : Change the timeout of command execution 
- `browser` : Specify the browsers for test (`chrome`,  `MicrosoftEdge`,  `firefox`)
-  `environment` : Specify the environment for test to run :
   - `local` : Tests will run locally to your computer.
   - `grid` : Tests will run in Selenium Grid.
   - `cicd` : Tests will run to your CI CD (must set this settings when you are ready to push in github)

# Run Tests

In `package.json` they have specify execution scripts :
- `test-serial` : Run tests in serial mode.
- `test-parallel` : Run tests in parallel mode.
- `test-mochawesome` : Run tests in serial mode and save a report file to `TestResults/NormalExecution`.
- `test-parallel-mochawesome` : Run tests in parallel mode and save a report file to `TestResults/ParallelExecution`.


