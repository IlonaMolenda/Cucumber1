Feature: LoginFeature
  Tu mozna dac jakis opis

  Scenario: Login with correct username and password
    Given I navigate to the login page
    And I just need to see how step looks for Java8
    And I enter the following for login
      | username | password      |
      | admin    | adminpassword |
    And I click login button
    Then I should see userForm page

  Scenario Outline: Login with correct username and password
    Given I navigate to the login page
    And I enter <username> and <password>
    And I click login button
    Then I should see userForm page

    Examples:
      | username | password   |
      | execute  | automation |
      | admin    | admin      |
      | testing  | qa         |