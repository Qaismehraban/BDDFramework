$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login to Retail Website",
  "description": "",
  "id": "login-to-retail-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginRegression"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 20,
      "value": "#if i want to run same scenario with multiple userName and Password"
    },
    {
      "line": 21,
      "value": "# Should i copy and past same scenario with multiple user and pass ?"
    }
  ],
  "line": 24,
  "name": "Login to Retail Site with multiple users",
  "description": "",
  "id": "login-to-retail-website;login-to-retail-site-with-multiple-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@MultipleUserLogin"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User enter username \u0027\u003cuserName\u003e\u0027 and password \u0027\u003cpassword\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 32,
      "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;1"
    },
    {
      "cells": [
        "sdet@tekschool.us",
        "sdet"
      ],
      "line": 33,
      "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;2"
    },
    {
      "cells": [
        "consumer@tekschool.us",
        "JBond"
      ],
      "line": 34,
      "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;3"
    },
    {
      "cells": [
        "students@tekschool.us",
        "TEST"
      ],
      "line": 35,
      "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2400948000,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#any steps which are repeated at the beginning of all scenarios in one feature can be placed"
    },
    {
      "line": 5,
      "value": "#under Background keyword and it will reduce code duplicate and writing same steps over and over"
    }
  ],
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User click  on MyAccount",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 1882862600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 49190600,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Login to Retail Site with multiple users",
  "description": "",
  "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginRegression"
    },
    {
      "line": 23,
      "name": "@MultipleUserLogin"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User enter username \u0027sdet@tekschool.us\u0027 and password \u0027sdet\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3495536900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 21
    },
    {
      "val": "sdet",
      "offset": 54
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 553946300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 245153400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 3208286000,
  "status": "passed"
});
formatter.after({
  "duration": 656809800,
  "status": "passed"
});
formatter.before({
  "duration": 1462942600,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#any steps which are repeated at the beginning of all scenarios in one feature can be placed"
    },
    {
      "line": 5,
      "value": "#under Background keyword and it will reduce code duplicate and writing same steps over and over"
    }
  ],
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User click  on MyAccount",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 1760536300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 48289400,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Login to Retail Site with multiple users",
  "description": "",
  "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginRegression"
    },
    {
      "line": 23,
      "name": "@MultipleUserLogin"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User enter username \u0027consumer@tekschool.us\u0027 and password \u0027JBond\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3376511400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "consumer@tekschool.us",
      "offset": 21
    },
    {
      "val": "JBond",
      "offset": 58
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 506174700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 439485800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 3141109100,
  "status": "passed"
});
formatter.after({
  "duration": 694053100,
  "status": "passed"
});
formatter.before({
  "duration": 1541127400,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#any steps which are repeated at the beginning of all scenarios in one feature can be placed"
    },
    {
      "line": 5,
      "value": "#under Background keyword and it will reduce code duplicate and writing same steps over and over"
    }
  ],
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User click  on MyAccount",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 1572473500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 52746400,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Login to Retail Site with multiple users",
  "description": "",
  "id": "login-to-retail-website;login-to-retail-site-with-multiple-users;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginRegression"
    },
    {
      "line": 23,
      "name": "@MultipleUserLogin"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User enter username \u0027students@tekschool.us\u0027 and password \u0027TEST\u0027",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3379751300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "students@tekschool.us",
      "offset": 21
    },
    {
      "val": "TEST",
      "offset": 58
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 433014900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 252639000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 3724859800,
  "status": "passed"
});
formatter.after({
  "duration": 624554700,
  "status": "passed"
});
});