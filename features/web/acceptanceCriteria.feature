@web
Feature: Acceptance Criteria

  Scenario: Verify access to open weather map website and its home page

    Given I am on open weather map home page
    Then I verify all expected information

  Scenario: Verify Invalid city search and its expected behaviour

    Given I am on open weather map home page
    When I search for city "yourcity"
    Then I verify suggested city as "Not found"

  Scenario: Verify vaild city search and its expected behaviour

    Given I am on open weather map home page
    When I search for city "Chelsea, GB"
    Then I verify suggested city as "Chelsea, GB"
    Then I verify weather details

  Scenario: Verify City details page

    Given I am on selected city details page
    Then I verify city name, weather codition and temperature
    Then I verify all tabs Main, Daily, Hourly, Chart and Map
    Then I verify wrong data option
    Then I verify detailed table
    Then I verify graph
