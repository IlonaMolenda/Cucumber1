$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "LoginFeature",
  "description": "Tu mozna dac jakis opis",
  "id": "loginfeature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 742964,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with correct username and password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I just need to see how step looks for Java8",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter the following for login",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "admin",
        "adminpassword"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see userForm page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 78647050,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 42
    }
  ],
  "location": "Java8VersionSteps.java:9"
});
formatter.result({
  "duration": 1472530,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iEnterUserNameAndPasssword(DataTable)"
});
formatter.result({
  "duration": 11599345,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 84981,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeUserFormPage()"
});
formatter.result({
  "duration": 194645,
  "status": "passed"
});
formatter.after({
  "duration": 219681,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Login with correct username and password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see userForm page",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 20,
      "id": "loginfeature;login-with-correct-username-and-password;;1"
    },
    {
      "cells": [
        "execute",
        "automation"
      ],
      "line": 21,
      "id": "loginfeature;login-with-correct-username-and-password;;2"
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 22,
      "id": "loginfeature;login-with-correct-username-and-password;;3"
    },
    {
      "cells": [
        "testing",
        "qa"
      ],
      "line": 23,
      "id": "loginfeature;login-with-correct-username-and-password;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 246127,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Login with correct username and password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter execute and automation",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see userForm page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 179835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "execute",
      "offset": 8
    },
    {
      "val": "automation",
      "offset": 20
    }
  ],
  "location": "LoginStep.iEnterUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 134700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 223206,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeUserFormPage()"
});
formatter.result({
  "duration": 194997,
  "status": "passed"
});
formatter.after({
  "duration": 134347,
  "status": "passed"
});
formatter.before({
  "duration": 500011,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Login with correct username and password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter admin and admin",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see userForm page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 223912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 8
    },
    {
      "val": "admin",
      "offset": 18
    }
  ],
  "location": "LoginStep.iEnterUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 503537,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 137521,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeUserFormPage()"
});
formatter.result({
  "duration": 80044,
  "status": "passed"
});
formatter.after({
  "duration": 125884,
  "status": "passed"
});
formatter.before({
  "duration": 266226,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Login with correct username and password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter testing and qa",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see userForm page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 534921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing",
      "offset": 8
    },
    {
      "val": "qa",
      "offset": 20
    }
  ],
  "location": "LoginStep.iEnterUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 807846,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 83217,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeUserFormPage()"
});
formatter.result({
  "duration": 160793,
  "status": "passed"
});
formatter.after({
  "duration": 30677,
  "status": "passed"
});
});