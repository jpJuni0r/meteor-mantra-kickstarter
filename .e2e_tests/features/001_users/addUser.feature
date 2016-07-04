Feature: 001 Register a new user
  As an unauthorized user
  I want to join up

  @watch
  Scenario: Register a new user
    Given my email is "yourself.yourorg@gmail.com" and I have opened the registration page, "http://localhost:3000/register"
    When I enter my email and the repeated password : "yourpassword",
    Then I see the login page submit button : "Login".