$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/FeatureFiles/requests.feature");
formatter.feature({
  "line": 1,
  "name": "Authenticated user can Post and Get data from endpoints",
  "description": "",
  "id": "authenticated-user-can-post-and-get-data-from-endpoints",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "1.Get data from valid endPoint",
  "description": "",
  "id": "authenticated-user-can-post-and-get-data-from-endpoints;1.get-data-from-valid-endpoint",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am an authenticated user who can get request from \"\u003cend-point\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I make a get request on endpoint \"\u003cend-point\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "get request response should be \"\u003crespCode\u003e\" with endpoint \"\u003cend-point\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "authenticated-user-can-post-and-get-data-from-endpoints;1.get-data-from-valid-endpoint;",
  "rows": [
    {
      "cells": [
        "respCode",
        "end-point"
      ],
      "line": 11,
      "id": "authenticated-user-can-post-and-get-data-from-endpoints;1.get-data-from-valid-endpoint;;1"
    },
    {
      "cells": [
        "200",
        "http://a.wunderlist.com/api/v1/folders"
      ],
      "line": 12,
      "id": "authenticated-user-can-post-and-get-data-from-endpoints;1.get-data-from-valid-endpoint;;2"
    },
    {
      "cells": [
        "200",
        "http://a.wunderlist.com/api/v1/lists"
      ],
      "line": 13,
      "id": "authenticated-user-can-post-and-get-data-from-endpoints;1.get-data-from-valid-endpoint;;3"
    },
    {
      "cells": [
        "200",
        "http://a.wunderlist.com/api/v1/memberships"
      ],
      "line": 14,
      "id": "authenticated-user-can-post-and-get-data-from-endpoints;1.get-data-from-valid-endpoint;;4"
    },
    {
      "cells": [
        "200",
        "http://a.wunderlist.com/api/v1/root"
      ],
      "line": 15,
      "id": "authenticated-user-can-post-and-get-data-from-endpoints;1.get-data-from-valid-endpoint;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "User is authenticated to make API calls",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 12,
  "name": "1.Get data from valid endPoint",
  "description": "",
  "id": "authenticated-user-can-post-and-get-data-from-endpoints;1.get-data-from-valid-endpoint;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am an authenticated user who can get request from \"http://a.wunderlist.com/api/v1/folders\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I make a get request on endpoint \"http://a.wunderlist.com/api/v1/folders\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "get request response should be \"200\" with endpoint \"http://a.wunderlist.com/api/v1/folders\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://a.wunderlist.com/api/v1/folders",
      "offset": 53
    }
  ],
  "location": "CallStepDef.iAmAnAuthenticatedUserWhoCanGetRequestFrom(String)"
});
formatter.result({
  "duration": 2689855702,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://a.wunderlist.com/api/v1/folders",
      "offset": 34
    }
  ],
  "location": "CallStepDef.iMakeAGetRequestOnEndpoint(String)"
});
formatter.result({
  "duration": 326631964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    },
    {
      "val": "http://a.wunderlist.com/api/v1/folders",
      "offset": 52
    }
  ],
  "location": "CallStepDef.getRequestResponseShouldBeWithEndpoint(int,String)"
});
formatter.result({
  "duration": 860116829,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is authenticated to make API calls",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 13,
  "name": "1.Get data from valid endPoint",
  "description": "",
  "id": "authenticated-user-can-post-and-get-data-from-endpoints;1.get-data-from-valid-endpoint;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am an authenticated user who can get request from \"http://a.wunderlist.com/api/v1/lists\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I make a get request on endpoint \"http://a.wunderlist.com/api/v1/lists\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "get request response should be \"200\" with endpoint \"http://a.wunderlist.com/api/v1/lists\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://a.wunderlist.com/api/v1/lists",
      "offset": 53
    }
  ],
  "location": "CallStepDef.iAmAnAuthenticatedUserWhoCanGetRequestFrom(String)"
});
formatter.result({
  "duration": 522500492,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://a.wunderlist.com/api/v1/lists",
      "offset": 34
    }
  ],
  "location": "CallStepDef.iMakeAGetRequestOnEndpoint(String)"
});
formatter.result({
  "duration": 560117323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    },
    {
      "val": "http://a.wunderlist.com/api/v1/lists",
      "offset": 52
    }
  ],
  "location": "CallStepDef.getRequestResponseShouldBeWithEndpoint(int,String)"
});
formatter.result({
  "duration": 379168726,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is authenticated to make API calls",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 14,
  "name": "1.Get data from valid endPoint",
  "description": "",
  "id": "authenticated-user-can-post-and-get-data-from-endpoints;1.get-data-from-valid-endpoint;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am an authenticated user who can get request from \"http://a.wunderlist.com/api/v1/memberships\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I make a get request on endpoint \"http://a.wunderlist.com/api/v1/memberships\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "get request response should be \"200\" with endpoint \"http://a.wunderlist.com/api/v1/memberships\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://a.wunderlist.com/api/v1/memberships",
      "offset": 53
    }
  ],
  "location": "CallStepDef.iAmAnAuthenticatedUserWhoCanGetRequestFrom(String)"
});
formatter.result({
  "duration": 492524872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://a.wunderlist.com/api/v1/memberships",
      "offset": 34
    }
  ],
  "location": "CallStepDef.iMakeAGetRequestOnEndpoint(String)"
});
formatter.result({
  "duration": 479235089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    },
    {
      "val": "http://a.wunderlist.com/api/v1/memberships",
      "offset": 52
    }
  ],
  "location": "CallStepDef.getRequestResponseShouldBeWithEndpoint(int,String)"
});
formatter.result({
  "duration": 247924320,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is authenticated to make API calls",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 15,
  "name": "1.Get data from valid endPoint",
  "description": "",
  "id": "authenticated-user-can-post-and-get-data-from-endpoints;1.get-data-from-valid-endpoint;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am an authenticated user who can get request from \"http://a.wunderlist.com/api/v1/root\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I make a get request on endpoint \"http://a.wunderlist.com/api/v1/root\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "get request response should be \"200\" with endpoint \"http://a.wunderlist.com/api/v1/root\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://a.wunderlist.com/api/v1/root",
      "offset": 53
    }
  ],
  "location": "CallStepDef.iAmAnAuthenticatedUserWhoCanGetRequestFrom(String)"
});
formatter.result({
  "duration": 217037890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://a.wunderlist.com/api/v1/root",
      "offset": 34
    }
  ],
  "location": "CallStepDef.iMakeAGetRequestOnEndpoint(String)"
});
formatter.result({
  "duration": 232431739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    },
    {
      "val": "http://a.wunderlist.com/api/v1/root",
      "offset": 52
    }
  ],
  "location": "CallStepDef.getRequestResponseShouldBeWithEndpoint(int,String)"
});
formatter.result({
  "duration": 207525340,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "2.Get data from invalid endPoint",
  "description": "",
  "id": "authenticated-user-can-post-and-get-data-from-endpoints;2.get-data-from-invalid-endpoint",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am an authenticated user who can get request from \"\u003cend-point\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I make a get request on endpoint \"\u003cend-point\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "get request response should be \"\u003crespCode\u003e\" with endpoint \"\u003cend-point\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "authenticated-user-can-post-and-get-data-from-endpoints;2.get-data-from-invalid-endpoint;",
  "rows": [
    {
      "cells": [
        "respCode",
        "end-point"
      ],
      "line": 24,
      "id": "authenticated-user-can-post-and-get-data-from-endpoints;2.get-data-from-invalid-endpoint;;1"
    },
    {
      "cells": [
        "404",
        "http://a.wunderlist.com/api/v1/lists1"
      ],
      "line": 25,
      "id": "authenticated-user-can-post-and-get-data-from-endpoints;2.get-data-from-invalid-endpoint;;2"
    },
    {
      "cells": [
        "404",
        "http://a.wunderlist.com/api/v1/folders2"
      ],
      "line": 26,
      "id": "authenticated-user-can-post-and-get-data-from-endpoints;2.get-data-from-invalid-endpoint;;3"
    },
    {
      "cells": [
        "404",
        "http://a.wunderlist.com/api/v1/notes3"
      ],
      "line": 27,
      "id": "authenticated-user-can-post-and-get-data-from-endpoints;2.get-data-from-invalid-endpoint;;4"
    },
    {
      "cells": [
        "404",
        "http://a.wunderlist.com/api/v1/root4"
      ],
      "line": 28,
      "id": "authenticated-user-can-post-and-get-data-from-endpoints;2.get-data-from-invalid-endpoint;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "User is authenticated to make API calls",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 25,
  "name": "2.Get data from invalid endPoint",
  "description": "",
  "id": "authenticated-user-can-post-and-get-data-from-endpoints;2.get-data-from-invalid-endpoint;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am an authenticated user who can get request from \"http://a.wunderlist.com/api/v1/lists1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I make a get request on endpoint \"http://a.wunderlist.com/api/v1/lists1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "get request response should be \"404\" with endpoint \"http://a.wunderlist.com/api/v1/lists1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://a.wunderlist.com/api/v1/lists1",
      "offset": 53
    }
  ],
  "location": "CallStepDef.iAmAnAuthenticatedUserWhoCanGetRequestFrom(String)"
});
formatter.result({
  "duration": 360314648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://a.wunderlist.com/api/v1/lists1",
      "offset": 34
    }
  ],
  "location": "CallStepDef.iMakeAGetRequestOnEndpoint(String)"
});
formatter.result({
  "duration": 406555080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 32
    },
    {
      "val": "http://a.wunderlist.com/api/v1/lists1",
      "offset": 52
    }
  ],
  "location": "CallStepDef.getRequestResponseShouldBeWithEndpoint(int,String)"
});
formatter.result({
  "duration": 357560709,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is authenticated to make API calls",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 26,
  "name": "2.Get data from invalid endPoint",
  "description": "",
  "id": "authenticated-user-can-post-and-get-data-from-endpoints;2.get-data-from-invalid-endpoint;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am an authenticated user who can get request from \"http://a.wunderlist.com/api/v1/folders2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I make a get request on endpoint \"http://a.wunderlist.com/api/v1/folders2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "get request response should be \"404\" with endpoint \"http://a.wunderlist.com/api/v1/folders2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://a.wunderlist.com/api/v1/folders2",
      "offset": 53
    }
  ],
  "location": "CallStepDef.iAmAnAuthenticatedUserWhoCanGetRequestFrom(String)"
});
formatter.result({
  "duration": 490135892,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://a.wunderlist.com/api/v1/folders2",
      "offset": 34
    }
  ],
  "location": "CallStepDef.iMakeAGetRequestOnEndpoint(String)"
});
formatter.result({
  "duration": 248854877,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 32
    },
    {
      "val": "http://a.wunderlist.com/api/v1/folders2",
      "offset": 52
    }
  ],
  "location": "CallStepDef.getRequestResponseShouldBeWithEndpoint(int,String)"
});
formatter.result({
  "duration": 235720598,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is authenticated to make API calls",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 27,
  "name": "2.Get data from invalid endPoint",
  "description": "",
  "id": "authenticated-user-can-post-and-get-data-from-endpoints;2.get-data-from-invalid-endpoint;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am an authenticated user who can get request from \"http://a.wunderlist.com/api/v1/notes3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I make a get request on endpoint \"http://a.wunderlist.com/api/v1/notes3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "get request response should be \"404\" with endpoint \"http://a.wunderlist.com/api/v1/notes3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://a.wunderlist.com/api/v1/notes3",
      "offset": 53
    }
  ],
  "location": "CallStepDef.iAmAnAuthenticatedUserWhoCanGetRequestFrom(String)"
});
formatter.result({
  "duration": 179894976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://a.wunderlist.com/api/v1/notes3",
      "offset": 34
    }
  ],
  "location": "CallStepDef.iMakeAGetRequestOnEndpoint(String)"
});
formatter.result({
  "duration": 182344607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 32
    },
    {
      "val": "http://a.wunderlist.com/api/v1/notes3",
      "offset": 52
    }
  ],
  "location": "CallStepDef.getRequestResponseShouldBeWithEndpoint(int,String)"
});
formatter.result({
  "duration": 420294449,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is authenticated to make API calls",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 28,
  "name": "2.Get data from invalid endPoint",
  "description": "",
  "id": "authenticated-user-can-post-and-get-data-from-endpoints;2.get-data-from-invalid-endpoint;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am an authenticated user who can get request from \"http://a.wunderlist.com/api/v1/root4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I make a get request on endpoint \"http://a.wunderlist.com/api/v1/root4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "get request response should be \"404\" with endpoint \"http://a.wunderlist.com/api/v1/root4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://a.wunderlist.com/api/v1/root4",
      "offset": 53
    }
  ],
  "location": "CallStepDef.iAmAnAuthenticatedUserWhoCanGetRequestFrom(String)"
});
formatter.result({
  "duration": 680762414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://a.wunderlist.com/api/v1/root4",
      "offset": 34
    }
  ],
  "location": "CallStepDef.iMakeAGetRequestOnEndpoint(String)"
});
formatter.result({
  "duration": 223509822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 32
    },
    {
      "val": "http://a.wunderlist.com/api/v1/root4",
      "offset": 52
    }
  ],
  "location": "CallStepDef.getRequestResponseShouldBeWithEndpoint(int,String)"
});
formatter.result({
  "duration": 383354996,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is authenticated to make API calls",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 31,
  "name": "3.Post valid data into lists endpoint",
  "description": "",
  "id": "authenticated-user-can-post-and-get-data-from-endpoints;3.post-valid-data-into-lists-endpoint",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "I make a valid post request on lists endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I should get list response as 201 created",
  "keyword": "Then "
});
formatter.match({
  "location": "CallStepDef.iMakeAValidPostRequestOnListsEndpoint()"
});
formatter.result({
  "duration": 819522148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 30
    }
  ],
  "location": "CallStepDef.iShouldGetListResponseAsCreated(int)"
});
formatter.result({
  "duration": 375004672,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is authenticated to make API calls",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 35,
  "name": "4.Post valid data into folders endpoint",
  "description": "",
  "id": "authenticated-user-can-post-and-get-data-from-endpoints;4.post-valid-data-into-folders-endpoint",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "I make a valid post request on folders endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I should get folder response as 201 created",
  "keyword": "Then "
});
formatter.match({
  "location": "CallStepDef.iMakeAValidPostRequestOnFoldersEndpoint()"
});
formatter.result({
  "duration": 311069565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 32
    }
  ],
  "location": "CallStepDef.iShouldGetFolderResponseAsCreated(int)"
});
formatter.result({
  "duration": 536913713,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is authenticated to make API calls",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 39,
  "name": "5.Post valid data into comments endpoint",
  "description": "",
  "id": "authenticated-user-can-post-and-get-data-from-endpoints;5.post-valid-data-into-comments-endpoint",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "I make a valid post request on comment endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I should get comments response as 201 created",
  "keyword": "Then "
});
formatter.match({
  "location": "CallStepDef.iMakeAValidPostRequestOnCommentEndpoint()"
});
formatter.result({
  "duration": 196291668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 34
    }
  ],
  "location": "CallStepDef.iShouldGetCommentsResponseAsCreated(int)"
});
formatter.result({
  "duration": 421384036,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is authenticated to make API calls",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 44,
  "name": "6.Post Invalid data into lists endpoint",
  "description": "",
  "id": "authenticated-user-can-post-and-get-data-from-endpoints;6.post-invalid-data-into-lists-endpoint",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 45,
  "name": "I make an invalid post request on lists endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I should get response as 400 Bad Request for list",
  "keyword": "Then "
});
formatter.match({
  "location": "CallStepDef.iMakeAnInvalidPostRequestOnListsEndpoint()"
});
formatter.result({
  "duration": 414669503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 25
    }
  ],
  "location": "CallStepDef.iShouldGetResponseAsBadRequestForList(int)"
});
formatter.result({
  "duration": 416538726,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is authenticated to make API calls",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 48,
  "name": "7.Post Invalid data into membership endpoint",
  "description": "",
  "id": "authenticated-user-can-post-and-get-data-from-endpoints;7.post-invalid-data-into-membership-endpoint",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 49,
  "name": "I make an invalid post request on memberships endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "I should get response as 400 Bad Request for membership",
  "keyword": "Then "
});
formatter.match({
  "location": "CallStepDef.iMakeAnInvalidPostRequestOnMembershipEndpoint()"
});
formatter.result({
  "duration": 805395957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 25
    }
  ],
  "location": "CallStepDef.iShouldGetResponseAsBadRequestForMembership(int)"
});
formatter.result({
  "duration": 448263678,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is authenticated to make API calls",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 52,
  "name": "8.Post Invalid data into upload endpoint",
  "description": "",
  "id": "authenticated-user-can-post-and-get-data-from-endpoints;8.post-invalid-data-into-upload-endpoint",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 53,
  "name": "I make an invalid post request on upload endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "I should get response as 400 Bad Request for upload",
  "keyword": "Then "
});
formatter.match({
  "location": "CallStepDef.iMakeAnInvalidPostRequestOnUploadEndpoint()"
});
formatter.result({
  "duration": 245792398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 25
    }
  ],
  "location": "CallStepDef.iShouldGetResponseAsBadRequestForUpload(int)"
});
formatter.result({
  "duration": 336164613,
  "status": "passed"
});
});