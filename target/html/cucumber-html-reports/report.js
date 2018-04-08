$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/FeatureFiles/requests.feature");
formatter.feature({
  "line": 1,
  "name": "Authenticated user can Post and Get data from endpoints",
  "description": "",
  "id": "authenticated-user-can-post-and-get-data-from-endpoints",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 5,
      "value": "# some negative test plugged in this scenario using wrong status code."
    }
  ],
  "line": 6,
  "name": "1.Get data from valid endPoint",
  "description": "",
  "id": "authenticated-user-can-post-and-get-data-from-endpoints;1.get-data-from-valid-endpoint",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am an authenticated user who can get request from \"\u003cend-point\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I make a get request on endpoint \"\u003cend-point\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "get request response should be \"\u003crespCode\u003e\" with endpoint \"\u003cend-point\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "authenticated-user-can-post-and-get-data-from-endpoints;1.get-data-from-valid-endpoint;",
  "rows": [
    {
      "cells": [
        "respCode",
        "end-point"
      ],
      "line": 12,
      "id": "authenticated-user-can-post-and-get-data-from-endpoints;1.get-data-from-valid-endpoint;;1"
    },
    {
      "cells": [
        "400",
        "http://a.wunderlist.com/api/v1/folders"
      ],
      "line": 13,
      "id": "authenticated-user-can-post-and-get-data-from-endpoints;1.get-data-from-valid-endpoint;;2"
    },
    {
      "cells": [
        "200",
        "http://a.wunderlist.com/api/v1/lists"
      ],
      "line": 14,
      "id": "authenticated-user-can-post-and-get-data-from-endpoints;1.get-data-from-valid-endpoint;;3"
    },
    {
      "cells": [
        "201",
        "http://a.wunderlist.com/api/v1/memberships"
      ],
      "line": 15,
      "id": "authenticated-user-can-post-and-get-data-from-endpoints;1.get-data-from-valid-endpoint;;4"
    },
    {
      "cells": [
        "200",
        "http://a.wunderlist.com/api/v1/root"
      ],
      "line": 16,
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
  "line": 13,
  "name": "1.Get data from valid endPoint",
  "description": "",
  "id": "authenticated-user-can-post-and-get-data-from-endpoints;1.get-data-from-valid-endpoint;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am an authenticated user who can get request from \"http://a.wunderlist.com/api/v1/folders\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I make a get request on endpoint \"http://a.wunderlist.com/api/v1/folders\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "get request response should be \"400\" with endpoint \"http://a.wunderlist.com/api/v1/folders\"",
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
  "duration": 2389825165,
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
  "duration": 276540249,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
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
  "duration": 471234209,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c400\u003e but was \u003c200\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:60)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:235)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:471)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:643)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:122)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:130)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:117)\r\n\tat StepDefs.CallStepDef.getRequestResponseShouldBeWithEndpoint(CallStepDef.java:43)\r\n\tat ✽.Then get request response should be \"400\" with endpoint \"http://a.wunderlist.com/api/v1/folders\"(src/test/java/FeatureFiles/requests.feature:9)\r\n",
  "status": "failed"
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
  "id": "authenticated-user-can-post-and-get-data-from-endpoints;1.get-data-from-valid-endpoint;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am an authenticated user who can get request from \"http://a.wunderlist.com/api/v1/lists\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I make a get request on endpoint \"http://a.wunderlist.com/api/v1/lists\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
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
  "duration": 240554272,
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
  "duration": 238594074,
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
  "duration": 143597286,
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
  "id": "authenticated-user-can-post-and-get-data-from-endpoints;1.get-data-from-valid-endpoint;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am an authenticated user who can get request from \"http://a.wunderlist.com/api/v1/memberships\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I make a get request on endpoint \"http://a.wunderlist.com/api/v1/memberships\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "get request response should be \"201\" with endpoint \"http://a.wunderlist.com/api/v1/memberships\"",
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
  "duration": 176514790,
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
  "duration": 153189174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
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
  "duration": 85929241,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c201\u003e but was \u003c200\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:471)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:643)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:122)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:130)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:117)\r\n\tat StepDefs.CallStepDef.getRequestResponseShouldBeWithEndpoint(CallStepDef.java:43)\r\n\tat ✽.Then get request response should be \"201\" with endpoint \"http://a.wunderlist.com/api/v1/memberships\"(src/test/java/FeatureFiles/requests.feature:9)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 3,
  "name": "User is authenticated to make API calls",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 16,
  "name": "1.Get data from valid endPoint",
  "description": "",
  "id": "authenticated-user-can-post-and-get-data-from-endpoints;1.get-data-from-valid-endpoint;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am an authenticated user who can get request from \"http://a.wunderlist.com/api/v1/root\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I make a get request on endpoint \"http://a.wunderlist.com/api/v1/root\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
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
  "duration": 61272496,
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
  "duration": 60333477,
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
  "duration": 53001864,
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
  "duration": 58854601,
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
  "duration": 48454515,
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
  "duration": 56733962,
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
  "duration": 95967543,
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
  "duration": 53245522,
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
  "duration": 62012287,
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
  "duration": 43758009,
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
  "duration": 50769798,
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
  "duration": 59283383,
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
  "duration": 381380341,
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
  "duration": 74618698,
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
  "duration": 47174516,
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
  "duration": 182478601,
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
  "duration": 127195658,
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
  "duration": 143431556,
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
  "duration": 134322753,
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
  "duration": 78952008,
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
  "duration": 123871890,
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
  "comments": [
    {
      "line": 43,
      "value": "# scenario 6-8 make a post request using invalid payload data"
    }
  ],
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
  "duration": 54277280,
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
  "duration": 86265285,
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
  "duration": 69162654,
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
  "duration": 46199176,
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
  "duration": 52333302,
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
  "duration": 50878757,
  "status": "passed"
});
});