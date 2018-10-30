$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("flight_booking.feature");
formatter.feature({
  "line": 1,
  "name": "Booking flights on specific dates",
  "description": "Description: The purpose of this feature is to search and book flights with different dates.",
  "id": "booking-flights-on-specific-dates",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User is able to search and book multiple flights for return",
  "description": "",
  "id": "booking-flights-on-specific-dates;user-is-able-to-search-and-book-multiple-flights-for-return",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@BookingFlight"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is logged in from registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User navigates to Flights page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User selects departing details as \"\u003cdepartingPort\u003e\", \"\u003cdepartingMonth\u003e\", \"\u003cdepartingDate\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User selects arriving details as \"\u003carrivingPort\u003e\", \"\u003carrivingMonth\u003e\", \"\u003carrivingDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be able to book flights with \"\u003cdepartingPort\u003e\" and \"\u003carrivingPort\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "booking-flights-on-specific-dates;user-is-able-to-search-and-book-multiple-flights-for-return;",
  "rows": [
    {
      "cells": [
        "departingPort",
        "departingMonth",
        "departingDate",
        "arrivingPort",
        "arrivingMonth",
        "arrivingDate"
      ],
      "line": 13,
      "id": "booking-flights-on-specific-dates;user-is-able-to-search-and-book-multiple-flights-for-return;;1"
    },
    {
      "cells": [
        "Frankfurt",
        "March",
        "10",
        "London",
        "October",
        "23"
      ],
      "line": 14,
      "id": "booking-flights-on-specific-dates;user-is-able-to-search-and-book-multiple-flights-for-return;;2"
    },
    {
      "cells": [
        "Paris",
        "January",
        "5",
        "Portland",
        "June",
        "25"
      ],
      "line": 15,
      "id": "booking-flights-on-specific-dates;user-is-able-to-search-and-book-multiple-flights-for-return;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "User is able to search and book multiple flights for return",
  "description": "",
  "id": "booking-flights-on-specific-dates;user-is-able-to-search-and-book-multiple-flights-for-return;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@BookingFlight"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is logged in from registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User navigates to Flights page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User selects departing details as \"Frankfurt\", \"March\", \"10\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User selects arriving details as \"London\", \"October\", \"23\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be able to book flights with \"Frankfurt\" and \"London\"",
  "matchedColumns": [
    0,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "steps_flight_booking.user_is_logged_in_from_registration_page()"
});
formatter.result({
  "duration": 13944064914,
  "status": "passed"
});
formatter.match({
  "location": "steps_flight_booking.user_navigates_to_Flights_page()"
});
formatter.result({
  "duration": 790051204,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Frankfurt",
      "offset": 35
    },
    {
      "val": "March",
      "offset": 48
    },
    {
      "val": "10",
      "offset": 57
    }
  ],
  "location": "steps_flight_booking.user_selects_departing_details_as(String,String,String)"
});
formatter.result({
  "duration": 801282755,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 34
    },
    {
      "val": "October",
      "offset": 44
    },
    {
      "val": "23",
      "offset": 55
    }
  ],
  "location": "steps_flight_booking.user_searches_with_arriving_details_as(String,String,String)"
});
formatter.result({
  "duration": 530667320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Frankfurt",
      "offset": 42
    },
    {
      "val": "London",
      "offset": 58
    }
  ],
  "location": "steps_flight_booking.user_should_be_able_to_book_flights_with(String,String)"
});
formatter.result({
  "duration": 4463942016,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User is able to search and book multiple flights for return",
  "description": "",
  "id": "booking-flights-on-specific-dates;user-is-able-to-search-and-book-multiple-flights-for-return;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@BookingFlight"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is logged in from registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User navigates to Flights page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User selects departing details as \"Paris\", \"January\", \"5\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User selects arriving details as \"Portland\", \"June\", \"25\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be able to book flights with \"Paris\" and \"Portland\"",
  "matchedColumns": [
    0,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "steps_flight_booking.user_is_logged_in_from_registration_page()"
});
formatter.result({
  "duration": 8812059195,
  "status": "passed"
});
formatter.match({
  "location": "steps_flight_booking.user_navigates_to_Flights_page()"
});
formatter.result({
  "duration": 808928530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Paris",
      "offset": 35
    },
    {
      "val": "January",
      "offset": 44
    },
    {
      "val": "5",
      "offset": 55
    }
  ],
  "location": "steps_flight_booking.user_selects_departing_details_as(String,String,String)"
});
formatter.result({
  "duration": 752840110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Portland",
      "offset": 34
    },
    {
      "val": "June",
      "offset": 46
    },
    {
      "val": "25",
      "offset": 54
    }
  ],
  "location": "steps_flight_booking.user_searches_with_arriving_details_as(String,String,String)"
});
formatter.result({
  "duration": 787710316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Paris",
      "offset": 42
    },
    {
      "val": "Portland",
      "offset": 54
    }
  ],
  "location": "steps_flight_booking.user_should_be_able_to_book_flights_with(String,String)"
});
formatter.result({
  "duration": 5968036015,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login scenarios",
  "description": "Description: The purpose of this feature is to test login scenarios.",
  "id": "login-scenarios",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User can sign-on from registration page.",
  "description": "",
  "id": "login-scenarios;user-can-sign-on-from-registration-page.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Register Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enter username as \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enter confirmpassword as \"\u003cConfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User press submit",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User is logged in successfully as \"\u003cUsername\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login-scenarios;user-can-sign-on-from-registration-page.;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "ConfirmPassword"
      ],
      "line": 14,
      "id": "login-scenarios;user-can-sign-on-from-registration-page.;;1"
    },
    {
      "cells": [
        "user1",
        "pass1",
        "pass1"
      ],
      "line": 15,
      "id": "login-scenarios;user-can-sign-on-from-registration-page.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "User can sign-on from registration page.",
  "description": "",
  "id": "login-scenarios;user-can-sign-on-from-registration-page.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Register Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enter username as \"user1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter password as \"pass1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enter confirmpassword as \"pass1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User press submit",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User is logged in successfully as \"user1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "steps_login.user_is_on_Register_Page()"
});
formatter.result({
  "duration": 5827431633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 24
    }
  ],
  "location": "steps_login.User_enter_username_as(String)"
});
formatter.result({
  "duration": 32108875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass1",
      "offset": 24
    }
  ],
  "location": "steps_login.User_enter_password_as(String)"
});
formatter.result({
  "duration": 21978656,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass1",
      "offset": 31
    }
  ],
  "location": "steps_login.User_enter_confirmpassword_as(String)"
});
formatter.result({
  "duration": 19326214,
  "status": "passed"
});
formatter.match({
  "location": "steps_login.User_press_submit()"
});
formatter.result({
  "duration": 1234824785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 35
    }
  ],
  "location": "steps_login.user_is_logged_in_successfully_as(String)"
});
formatter.result({
  "duration": 1850284066,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "User can sign-off from registration page.",
  "description": "",
  "id": "login-scenarios;user-can-sign-off-from-registration-page.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User is already logged in with \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\" from registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User clicks Signoff",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User is signed off successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "login-scenarios;user-can-sign-off-from-registration-page.;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 24,
      "id": "login-scenarios;user-can-sign-off-from-registration-page.;;1"
    },
    {
      "cells": [
        "user2",
        "pass2"
      ],
      "line": 25,
      "id": "login-scenarios;user-can-sign-off-from-registration-page.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "User can sign-off from registration page.",
  "description": "",
  "id": "login-scenarios;user-can-sign-off-from-registration-page.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User is already logged in with \"user2\" and \"pass2\" from registration page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User clicks Signoff",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User is signed off successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 32
    },
    {
      "val": "pass2",
      "offset": 44
    }
  ],
  "location": "steps_login.user_is_already_logged_in_from_registration_page(String,String)"
});
formatter.result({
  "duration": 11488525116,
  "status": "passed"
});
formatter.match({
  "location": "steps_login.user_clicks_Signoff()"
});
formatter.result({
  "duration": 2551441977,
  "status": "passed"
});
formatter.match({
  "location": "steps_login.User_is_signed_off_successfully()"
});
formatter.result({
  "duration": 1886420495,
  "status": "passed"
});
});