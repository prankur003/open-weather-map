const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');
const acceptanceCriteriaPage = client.page.web.acceptanceCriteriaPage();
var flag = false;

Given(/^I am on open weather map home page$/, () => {
    if(!flag) return client.url(client.launch_url);
    else return acceptanceCriteriaPage.click('@openWeatherMap_logo');
});

Then(/^I verify all expected information$/, () => {
    return acceptanceCriteriaPage.verify.visible('@openWeatherMap_logo')
        .verify.visible('@signIn_btn')
        .verify.visible('@signUp_btn')
        .verify.visible('@search_tb')
        .verify.visible('@search_btn');
});

When(/^I search for city "(.*?)"$/, (city) => {
    return acceptanceCriteriaPage.click('@search_tb')
        .setValue('@search_tb', city)
        .click('@search_btn');
});

Then(/^I verify suggested city as "(.*?)"$/, (city) => {
    acceptanceCriteriaPage.waitForElementPresent('@cityList_ele', 5000);
    if(city=='Not found') return acceptanceCriteriaPage.verify.visible('@notFound_txt');
    else return acceptanceCriteriaPage.getText('@cityName_link', function(result){
        if(!result.value==city) throw "City name does not match"; 
    })
});

Then(/^I verify weather details$/, () => {
    return acceptanceCriteriaPage.verify.visible('@cityTemperature_txt');
});

Given(/^I am on selected city details page$/, () => {
    return acceptanceCriteriaPage.click('@cityName_link');
});

Then(/^I verify city name, weather codition and temperature$/, () => {
    client.pause(5000);
    acceptanceCriteriaPage.waitForElementPresent('@weatherForecast_txt', 10000);
    acceptanceCriteriaPage.waitForElementPresent('@detailed_graph', 10000);
    return acceptanceCriteriaPage.verify.visible('@cityName_txt')
        .verify.visible('@cityWeatherCondition_txt')
        .verify.visible('@cityTemperature_img');
});

Then(/^I verify all tabs Main, Daily, Hourly, Chart and Map$/, () => {
    return acceptanceCriteriaPage.verify.visible('@main_tab')
        .verify.visible('@daily_tab')
        .verify.visible('@hourly_tab')
        .verify.visible('@chart_tab')
        .verify.visible('@map_tab');
});

Then(/^I verify wrong data option$/, () => {
    return acceptanceCriteriaPage.verify.visible('@wrongDataOption_btn');
});

Then(/^I verify detailed table$/, () => {
    return acceptanceCriteriaPage.verify.visible('@details_table');
});

Then(/^I verify graph$/, () => {
    return acceptanceCriteriaPage.verify.visible('@detailed_graph');
});