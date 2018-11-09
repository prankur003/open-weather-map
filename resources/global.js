var fs = require('fs');

module.exports = {
    // this controls whether to abort the test execution when an assertion failed and skip the rest it's being used in waitFor commands and expect assertions
    abortOnAssertionFailure: false,

    // default timeout value in milliseconds for waitFor commands and implicit waitFor value for expect assertions
    waitForConditionTimeout: 5000,

    before: function (cb) {
        console.log("********Automation Test Suits Starts**********");
        startTime = new Date().toLocaleString('en-US');
        cb();
    },
    after: function (cb) {
        var endTime = new Date().toLocaleString('en-US');
        var jsonData = [{ StartTime: startTime }];
        jsonData.push({ EndTime: endTime });
        fs.writeFileSync("report.json", JSON.stringify(jsonData));
        console.log("********Automation Test Suits Ends**********");
        cb();
    },
};