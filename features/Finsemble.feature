Feature: Finsemble

  Scenario: Verify that user is able to communicate with electron
    Given I click 'Toolbar > Apps Menu'
    And I switch to '$AppLauncher' window
    And I click 'App Launcher > #ChartIQ Example App in Apps'
    When I switch to '$ChartIQ' window
    And I click 'ChartIQ App > Ticker Search'
    And I type 'EPAM' chars to 'ChartIQ App > Ticker Search'
    And I click 'ChartIQ App > #EPAM in Ticker Search Results'
    And I expect text of 'ChartIQ App > Ticket' to equal 'EPAM'

  Scenario: Verify that finsemble apps can communicate via channel
    Given I click 'Toolbar > Apps Menu'
    And I switch to '$AppLauncher' window
    And I click 'App Launcher > #ChartIQ Example App in Apps'
    And I click 'App Launcher > #Blotter in Apps'

    When I switch to '$ChartIQ' window
    And I click 'ChartIQ App > Ticker Search'
    And I type 'EPAM' chars to 'ChartIQ App > Ticker Search'
    And I click 'ChartIQ App > #EPAM in Ticker Search Results'
    And I expect text of 'ChartIQ App > Ticket' to equal 'EPAM'

    When I switch to '$Blotter' window
    And I type 'TSLA' chars to 'Blotter App > Search'
    And I click 'Blotter App > #TSLA in Companies > View Chart'
    And I switch to '$Resolver' window
    And I click 'Resolver > #ChartIQ in Apps'
    And I switch to '$ChartIQ' window
    And I expect text of 'ChartIQ App > Ticket' to equal 'TSLA'

  Scenario: Emit intent to current application
    Given I click 'Toolbar > Apps Menu'
    And I switch to '$AppLauncher' window
    And I click 'App Launcher > #ChartIQ Example App in Apps'
    When I switch to '$ChartIQ' window
    And I raise 'ViewChart' intent for current app:
    """
    {
      "type": "fdc3.instrument",
      "id": {
        "ticker": "EPAM"
       }
    }
    """
    And I expect text of 'ChartIQ App > Ticket' to equal 'EPAM'
    And I raise 'ViewChart' intent for current app:
    """
    {
      "type": "fdc3.instrument",
      "id": {
        "ticker": "MSFT"
       }
    }
    """
    And I expect text of 'ChartIQ App > Ticket' to equal 'MSFT'


