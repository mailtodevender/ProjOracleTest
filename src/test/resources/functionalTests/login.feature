Feature: Login scenarios
Description: The purpose of this feature is to test login scenarios.

@LoginTest
Scenario Outline: User can sign-on from registration page.
  Given User is on Register Page
  When User enter username as "<Username>"
  And User enter password as "<Password>"
  And User enter confirmpassword as "<ConfirmPassword>"
  And User press submit
  Then User is logged in successfully as "<Username>"

  Examples:
    | Username 		| Password	 	| ConfirmPassword 	|
    | user1			| pass1 		| pass1				|

@LoginTest
Scenario Outline: User can sign-off from registration page.
  Given User is already logged in with "<Username>" and "<Password>" from registration page
  When User clicks Signoff
  Then User is signed off successfully

  Examples:
    | Username 		| Password	 	|
    | user2			| pass2 		|