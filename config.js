module.exports = {
    /**The URL of the website to automate */
    url: 'http://www.uitestingplayground.com/',

    /**The test timeout time (0) = infinity time*/
    timeoutTest: 0,

    /**The timeout is for command execution   */
    commandsTimeout: 40000,

    /** Available browsers for test execution: [chrome, MicrosoftEdge, firefox] */
    browser: ['chrome'],

    /** Available environments settings: [local, grid, cicd] */
    environment: 'cicd',

    /** Paths for browser executable and for driver executable */
    pathToChrome: {
        EXECUTABLE: "-> FILL THE PATH <-",
        DRIVER_EXECUTABLE: "-> FILL THE PATH <-"
    },
    pathToFirefox: {
        EXECUTABLE: "-> FILL THE PATH <-",
        DRIVER_EXECUTABLE: "-> FILL THE PATH <-"
    },
    pathToEdge: {
        EXECUTABLE: "-> FILL THE PATH <-",
        DRIVER_EXECUTABLE: "-> FILL THE PATH <-"
    },

    /** Selenium Grid Server */
    seleniumGridServerURL: "http://localhost:4444"
}
