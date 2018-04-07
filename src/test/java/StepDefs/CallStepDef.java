package StepDefs;

import Utility.PayLoads;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static io.restassured.RestAssured.given;


public class CallStepDef {
    PayLoads payLoad = new PayLoads();

    @Given("^I am an authenticated user who can get request from \"([^\"]*)\"$")
    public void iAmAnAuthenticatedUserWhoCanGetRequestFrom(String endPoint) throws Throwable {
        given().contentType("application/json")
                .header("X-Client-ID", "2174bddbc41e1098d48d")
                .header("X-Access-Token", "92f627d4bd9d027da6b1f93d582a44d8fd8c55c2686c0003799d79d063d3")
                .when()
                .get(endPoint)
                .then().log().all();
    }


    @When("^I make a get request on endpoint \"([^\"]*)\"$")
    public void iMakeAGetRequestOnEndpoint(String endPoint) throws Throwable {
        given().contentType("application/json")
                .header("X-Client-ID", "2174bddbc41e1098d48d")
                .header("X-Access-Token", "92f627d4bd9d027da6b1f93d582a44d8fd8c55c2686c0003799d79d063d3")
                .when()
                .get(endPoint)
                .then().log().all();
    }

    @Then("^get request response should be \"([^\"]*)\" with endpoint \"([^\"]*)\"$")
    public void getRequestResponseShouldBeWithEndpoint(int resCode, String endPoint) throws Throwable {
        given().contentType("application/json")
                .header("X-Client-ID", "2174bddbc41e1098d48d")
                .header("X-Access-Token", "92f627d4bd9d027da6b1f93d582a44d8fd8c55c2686c0003799d79d063d3")
                .when()
                .get(endPoint)
                .then()
                .statusCode(resCode);
    }


    @When("^I make a valid post request on lists endpoint$")
    public void iMakeAValidPostRequestOnListsEndpoint() throws Throwable {
        given()
                .contentType("application/json")
                .header("X-Client-ID", "2174bddbc41e1098d48d")
                .header("X-Access-Token", "92f627d4bd9d027da6b1f93d582a44d8fd8c55c2686c0003799d79d063d3")
                .with()
                .body(payLoad.list())
                .when()
                .post("http://a.wunderlist.com/api/v1/lists")
                .then().log().all();
    }


    @Then("^I should get comments response as (\\d+) created$")
    public void iShouldGetCommentsResponseAsCreated(int code) throws Throwable {
        given()
                .contentType("application/json")
                .header("X-Client-ID", "2174bddbc41e1098d48d")
                .header("X-Access-Token", "92f627d4bd9d027da6b1f93d582a44d8fd8c55c2686c0003799d79d063d3")
                .with()
                .body(payLoad.list())
                .when()
                .post("http://a.wunderlist.com/api/v1/lists")
                .then().log().all()
                .statusCode(code);
    }

    @Then("^I should get list response as (\\d+) created$")
    public void iShouldGetListResponseAsCreated(int code) throws Throwable {
        given()
                .contentType("application/json")
                .header("X-Client-ID", "2174bddbc41e1098d48d")
                .header("X-Access-Token", "92f627d4bd9d027da6b1f93d582a44d8fd8c55c2686c0003799d79d063d3")
                .with()
                .body(payLoad.list())
                .when()
                .post("http://a.wunderlist.com/api/v1/lists")
                .then().log().all()
                .statusCode(code);
    }

    @Then("^I should get folder response as (\\d+) created$")
    public void iShouldGetFolderResponseAsCreated(int code) throws Throwable {
        given()
                .contentType("application/json")
                .header("X-Client-ID", "2174bddbc41e1098d48d")
                .header("X-Access-Token", "92f627d4bd9d027da6b1f93d582a44d8fd8c55c2686c0003799d79d063d3")
                .with()
                .body(payLoad.folder())
                .when()
                .post("http://a.wunderlist.com/api/v1/folders")
                .then().log().all()
                .statusCode(code);
    }


    @When("^I make a valid post request on folders endpoint$")
    public void iMakeAValidPostRequestOnFoldersEndpoint() throws Throwable {
        given()
                .contentType("application/json")
                .header("X-Client-ID", "2174bddbc41e1098d48d")
                .header("X-Access-Token", "92f627d4bd9d027da6b1f93d582a44d8fd8c55c2686c0003799d79d063d3")
                .with()
                .body(payLoad.folder())
                .when()
                .post("http://a.wunderlist.com/api/v1/folders")
                .then().log().all();
    }

    @When("^I make a valid post request on comment endpoint$")
    public void iMakeAValidPostRequestOnCommentEndpoint() throws Throwable {
        given()
                .contentType("application/json")
                .header("X-Client-ID", "2174bddbc41e1098d48d")
                .header("X-Access-Token", "92f627d4bd9d027da6b1f93d582a44d8fd8c55c2686c0003799d79d063d3")
                .with()
                .body(payLoad.comments())
                .when()
                .post("http://a.wunderlist.com/api/v1/task_comments")
                .then().log().all();
    }

    @Given("^I am an authenticated list endpoint user$")
    public void iAmAnAuthenticatedListEndpointUser() throws Throwable {
        given()
                .contentType("application/json")
                .header("X-Client-ID", "2174bddbc41e1098d48d")
                .header("X-Access-Token", "92f627d4bd9d027da6b1f93d582a44d8fd8c55c2686c0003799d79d063d3")
                .with()
                .body(payLoad.list())
                .when()
                .post("http://a.wunderlist.com/api/v1/lists");
    }

    @Given("^I am an authenticated folders endpoint user$")
    public void iAmAnAuthenticatedFoldersEndpointUser() throws Throwable {
        given()
                .contentType("application/json")
                .header("X-Client-ID", "2174bddbc41e1098d48d")
                .header("X-Access-Token", "92f627d4bd9d027da6b1f93d582a44d8fd8c55c2686c0003799d79d063d3")
                .when()
                .get("http://a.wunderlist.com/api/v1/folders");
    }

    @Given("^I am an authenticated comment endpoint user$")
    public void iAmAnAuthenticatedCommentEndpointUser() throws Throwable {
        given()
                .contentType("application/json")
                .header("X-Client-ID", "2174bddbc41e1098d48d")
                .header("X-Access-Token", "92f627d4bd9d027da6b1f93d582a44d8fd8c55c2686c0003799d79d063d3")
                .when()
                .get("http://a.wunderlist.com/api/v1/task_comments")
                .then().log().all();
    }

    @When("^I make an invalid post request on lists endpoint$")
    public void iMakeAnInvalidPostRequestOnListsEndpoint() throws Throwable {
        given()
                .contentType("application/json")
                .header("X-Client-ID", "2174bddbc41e1098d48d")
                .header("X-Access-Token", "92f627d4bd9d027da6b1f93d582a44d8fd8c55c2686c0003799d79d063d3")
                .with()
                .body(payLoad.badlist())
                .when()
                .post("http://a.wunderlist.com/api/v1/lists");
    }

    @Then("^I should get response as (\\d+) Bad Request for list$")
    public void iShouldGetResponseAsBadRequestForList(int code) throws Throwable {
        given()
                .contentType("application/json")
                .header("X-Client-ID", "2174bddbc41e1098d48d")
                .header("X-Access-Token", "92f627d4bd9d027da6b1f93d582a44d8fd8c55c2686c0003799d79d063d3")
                .with()
                .body(payLoad.badlist())
                .when()
                .post("http://a.wunderlist.com/api/v1/lists")
                .then().log().all()
                .statusCode(code);
    }

//    @Given("^I am an authenticated membership endpoint user$")
//    public void iAmAnAuthenticatedMembershipEndpointUser() throws Throwable {
//        given()
//                .contentType("application/json")
//                .header("X-Client-ID", "2174bddbc41e1098d48d")
//                .header("X-Access-Token", "92f627d4bd9d027da6b1f93d582a44d8fd8c55c2686c0003799d79d063d3")
//                .when()
//                .get("http://a.wunderlist.com/api/v1/memberships")
//                .then()
//                .statusCode(200);
//    }

    @When("^I make an invalid post request on upload endpoint$")
    public void iMakeAnInvalidPostRequestOnUploadEndpoint() throws Throwable {
        given()
                .contentType("application/json")
                .header("X-Client-ID", "2174bddbc41e1098d48d")
                .header("X-Access-Token", "92f627d4bd9d027da6b1f93d582a44d8fd8c55c2686c0003799d79d063d3")
                .when()
                .with()
                .body(payLoad.badUploadData())
                .post("http://a.wunderlist.com/api/v1/uploads");
    }


//    @Given("^I am an authenticated upload endpoint user$")
//    public void iAmAnAuthenticatedUploadEndpointUser() throws Throwable {
//        given()
//                .contentType("application/json")
//                .header("X-Client-ID", "2174bddbc41e1098d48d")
//                .header("X-Access-Token", "92f627d4bd9d027da6b1f93d582a44d8fd8c55c2686c0003799d79d063d3")
//                .when()
//                .get("http://a.wunderlist.com/api/v1/uploads")
//                .then()
//                .statusCode(200);
//    }


    @When("^I make an invalid post request on memberships endpoint$")
    public void iMakeAnInvalidPostRequestOnMembershipEndpoint() throws Throwable {
        given()
                .contentType("application/json")
                .header("X-Client-ID", "2174bddbc41e1098d48d")
                .header("X-Access-Token", "92f627d4bd9d027da6b1f93d582a44d8fd8c55c2686c0003799d79d063d3")
                .when()
                .with()
                .body(payLoad.badMemberData())
                .post("http://a.wunderlist.com/api/v1/memberships")
                .then()
                .statusCode(400);
    }

    @Then("^I should get response as (\\d+) Bad Request for membership$")
    public void iShouldGetResponseAsBadRequestForMembership(int code) throws Throwable {
        given()
                .contentType("application/json")
                .header("X-Client-ID", "2174bddbc41e1098d48d")
                .header("X-Access-Token", "92f627d4bd9d027da6b1f93d582a44d8fd8c55c2686c0003799d79d063d3")
                .with()
                .body(payLoad.badMemberData())
                .when()
                .post("http://a.wunderlist.com/api/v1/memberships")
                .then()
                .statusCode(code);
    }

    @Then("^I should get response as (\\d+) Bad Request for upload$")
    public void iShouldGetResponseAsBadRequestForUpload(int code) throws Throwable {
        given()
                .contentType("application/json")
                .header("X-Client-ID", "2174bddbc41e1098d48d")
                .header("X-Access-Token", "92f627d4bd9d027da6b1f93d582a44d8fd8c55c2686c0003799d79d063d3")
                .with()
                .body(payLoad.badMemberData())
                .when()
                .post("http://a.wunderlist.com/api/v1/uploads")
                .then()
                .statusCode(code);
    }
}
