const gulp = require('gulp-v4');
const report = require('multiple-cucumber-html-reporter');
const mydata = require('./report.json');
const nightwatch = require('nightwatch');
const shell = require('gulp-shell');
var URL;

module.exports = {
    URL: 'https://openweathermap.org/'
};

var multipleOptions = {
    jsonDir: './reports/',
    reportPath: './reports/',
    openReportInBrowser: false,
    saveCollectedJSON: false,
    disableLog: true,
    pageTitle: 'OpenWeather-BDD-Automation',
    reportName: 'OpenWeather-Automation-Status-Report',
    pageFooter: '',
    metadata: {
        browser: {
            name: 'chrome',
            version: '65.0'
        },
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            { label: 'Project', value: '<a href="' + URL + '">' + URL + '</a>' },
            { label: 'Release', value: '1..0.0' },
            { label: 'PLATFORM', value: 'web' },
            { label: 'Execution Start Time', value: mydata[0].StartTime },
            { label: 'Execution End Time', value: mydata[1].EndTime }
        ]
    }
};

//Gulp Tasks

//Task for Single File
gulp.task('singleFile', shell.task('npm run e2e-test -- --env chrome_web ' + process.argv[4]))    

//Task to Generate Report
gulp.task('cucumberReports', function (done) {
    report.generate(multipleOptions);
    done();
})

//Sequential Task
gulp.task('sequential', shell.task(' \
npm run e2e-test -- --env chrome_web \
	features/web/acceptanceCriteria.feature \
'))