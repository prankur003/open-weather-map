module.exports = {
    elements: {
      openWeatherMap_logo: {
        selector: '//a/img[@class="img-responsive"]',
        locateStrategy: 'xpath'
      },
      signIn_btn: 'a[href*="sign_in"][class="pull-right"]',
      signUp_btn: 'a[href*="sign_up"][class="pull-right"]',
      search_tb: 'input[placeholder="Your city name"]',
      search_btn: 'button[class="btn btn-orange"]',
      cityList_ele: '#forecast_list_ul',
      notFound_txt: 'div[class="alert alert-warning"]',
      cityName_link: 'a[href*="/city/"]',
      cityTemperature_txt: 'span[class="badge badge-info"]',

      cityName_txt: 'h2[class="weather-widget__city-name"]',
      cityTemperature_img: 'h3[class="weather-widget__temperature"]',
      cityWeatherCondition_txt: 'p[class="weather-widget__main"]',
      weatherForecast_txt: 'h2[class="weather-forecast-hourly-graphic__header"]',
      main_tab: '#tab-main',
      daily_tab: '#tab-daily',
      hourly_tab: '#tab-hourly',
      chart_tab: '#tab-chart',
      map_tab: '#tab-map',
      wrongDataOption_btn: 'button[class="weather-widget__link"]',
      details_table: 'table[class="weather-widget__items"]',
      detailed_graph: 'rect[class="highcharts-background"]',
    }
}