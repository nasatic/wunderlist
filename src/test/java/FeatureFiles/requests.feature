Feature: Authenticated user can Post and Get data from endpoints

  Background: User is authenticated to make API calls

# some negative test plugged in this scenario using wrong status code.
  Scenario Outline: 1.Get data from valid endPoint
    Given I am an authenticated user who can get request from "<end-point>"
    When I make a get request on endpoint "<end-point>"
    Then get request response should be "<respCode>" with endpoint "<end-point>"

    Examples:
      | respCode | end-point                                  |
      | 400      | http://a.wunderlist.com/api/v1/folders     |
      | 200      | http://a.wunderlist.com/api/v1/lists       |
      | 201      | http://a.wunderlist.com/api/v1/memberships |
      | 200      | http://a.wunderlist.com/api/v1/root        |

  Scenario Outline: 2.Get data from invalid endPoint
    Given I am an authenticated user who can get request from "<end-point>"
    When I make a get request on endpoint "<end-point>"
    Then get request response should be "<respCode>" with endpoint "<end-point>"

    Examples:
      | respCode | end-point                               |
      | 404      | http://a.wunderlist.com/api/v1/lists1   |
      | 404      | http://a.wunderlist.com/api/v1/folders2 |
      | 404      | http://a.wunderlist.com/api/v1/notes3   |
      | 404      | http://a.wunderlist.com/api/v1/root4    |


  Scenario: 3.Post valid data into lists endpoint
    When I make a valid post request on lists endpoint
    Then I should get list response as 201 created

  Scenario: 4.Post valid data into folders endpoint
    When I make a valid post request on folders endpoint
    Then I should get folder response as 201 created

  Scenario: 5.Post valid data into comments endpoint
    When I make a valid post request on comment endpoint
    Then I should get comments response as 201 created

# scenario 6-8 make a post request using invalid payload data
  Scenario: 6.Post Invalid data into lists endpoint
    When I make an invalid post request on lists endpoint
    Then I should get response as 400 Bad Request for list

  Scenario: 7.Post Invalid data into membership endpoint
    When I make an invalid post request on memberships endpoint
    Then I should get response as 400 Bad Request for membership

  Scenario: 8.Post Invalid data into upload endpoint
    When I make an invalid post request on upload endpoint
    Then I should get response as 400 Bad Request for upload
