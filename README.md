

## The Tests

Please add coverage for the following functionality:

1. The Social Tables logo in the top left should link to <https://www.socialtables.com/>.
2. Searching for `Bobby Fisher` should return 0 results.
3. Searching for `event` should return 10 results.
4. Searching for a word under three character should trigger an alert box with the text `Search string must be at least 3 characters long`.


## Requirements

* You must use [Node](https://nodejs.org/)
* You must use [Selenium](https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs)
* You must use [Mocha](https://mochajs.org/)

You probably haven't used some or all of these packages before. Fear not.  We designed this challenge anticipating you would need to learn to pass.

## How To Get Started

You are provided with boilerplate that includes a sample test with all requirements working together.

General steps to get the boilerplate running:

* Install [Firefox](https://www.mozilla.org/en-US/firefox/new/)
* Install [Node](https://nodejs.org/en/download/)
  * For OS X, we prefer using [Homebrew](http://brew.sh/) to `brew install node`
  * Make sure you are installing a version of Node that is 6.0.0 or higher
* `npm install mocha -g`
* `npm install chai -g`
* `git clone https://github.com/socialtables/apprentice-challenge.git`
* `cd apprentice-challenge`
* `npm install`
* `mocha test`


