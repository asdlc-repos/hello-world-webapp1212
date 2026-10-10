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

  @story-F1.2
  Rule: A signed-in user can sign out from the greeting page

    Scenario: Signing out
      Given Una the user is signed in and viewing the greeting
      When Una signs out
      Then the page no longer shows "Hello, World!"
