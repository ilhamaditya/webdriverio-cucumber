Feature: Login Dua
@Regression
  Scenario: As a user, I can login logout

    Given User on the login page
    When User login with username and password
    Then User should see secure page and logout