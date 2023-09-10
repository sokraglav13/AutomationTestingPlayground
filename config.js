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
    environment: ['local']
}
