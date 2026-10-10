Feature: F1 Greeting

  @story-F1.1
  Rule: A signed-in user sees the plain greeting "Hello, World!"

    Scenario: Greeting after sign-in
      Given Una the user has signed in
      When the app opens
      Then the page shows "Hello, World!"

    @negative
    Scenario: A visitor who has not signed in does not see the greeting
      Given Vic the visitor has not signed in
      When Vic opens the app
      Then the page does not show "Hello, World!"

  @story-F1.3
  Rule: The greeting comes from the product's API, for users holding the User role only

    Scenario: Signed-in user requests the greeting
      Given Una the user has signed in
      When the greeting is requested from the API
      Then the API answers with the greeting "Hello, World!"

    @negative
    Scenario: A request without signing in is refused
      Given Vic the visitor has not signed in
      When Vic requests the greeting from the API
      Then no greeting is returned

    @negative
    Scenario: A signed-in person without the User role is refused
      Given Wes has signed in but does not hold the User role
      When Wes requests the greeting from the API
      Then no greeting is returned

  @story-F1.2
  Rule: A signed-in user can sign out from the greeting page

    Scenario: Signing out
      Given Una the user is signed in and viewing the greeting
      When Una signs out
      Then the page no longer shows "Hello, World!"
