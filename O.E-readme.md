# Social Tables Apprentice Challlenge

## Completed Tests Case

1. The Social Tables logo in the top left should link to <https://www.socialtables.com/>.
2. Searching for `Bobby Fisher` should return 0 results.
3. Searching for `event` should return 10 results.
4. Searching for a word under three character should trigger an alert box with the text `Search string must be at least 3 characters long`.

All tests ran against <http://help.socialtables.com> and are to be executed independently due to the set timeout on 'line 23' of the test code (test.js).

Remove the 'skip' keyword on each test case to run them independently.

## Requirements

* [Node](https://nodejs.org/)
* [Selenium](https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs)
* [Mocha](https://mochajs.org/)

## Installation Instructions

* Install [Firefox](https://www.mozilla.org/en-US/firefox/new/)
* Install [Node](https://nodejs.org/en/download/) 
* `npm install mocha -g`
* `npm install chai -g`
* `tar -xvf O.E-code.tar.gz`
* `npm install`
* `mocha test`



