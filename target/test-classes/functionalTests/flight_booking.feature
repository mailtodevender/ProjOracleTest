Feature: Booking flights on specific dates
Description: The purpose of this feature is to search and book flights with different dates.

@BookingFlight
Scenario Outline: User is able to search and book multiple flights for return
  Given User is logged in from registration page
  And User navigates to Flights page
  When User selects departing details as "<departingPort>", "<departingMonth>", "<departingDate>"
  And User selects arriving details as "<arrivingPort>", "<arrivingMonth>", "<arrivingDate>"
  Then User should be able to book flights with "<departingPort>" and "<arrivingPort>"

  Examples:
  	| departingPort	| departingMonth| departingDate | arrivingPort 	| arrivingMonth | arrivingDate  |
    | Frankfurt		| March			| 10			| London		| October		| 23			|
    | Paris			| January		| 5				| Portland		| June			| 25			|
