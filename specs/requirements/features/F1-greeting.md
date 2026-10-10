# Greeting

## Purpose

Shows a signed-in user a "Hello, World!" greeting page.

## User Stories

- F1.1 As a user, I see the greeting "Hello, World!" on the page after I sign in. Needs: P1.
- F1.2 As a user, I can sign out from the greeting page.
- F1.3 As a user, the greeting I see is fetched from the product's API. *assumed*

## Decisions

- The API has one operation that returns the greeting text, open to any user holding the User role. *assumed*
- The greeting is the plain text "Hello, World!", the same for every user.
- The app has a single page; there is no navigation.

## Out of Scope

- Greeting the user by name or in other languages.

