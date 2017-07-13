'use strict';
require('chai').should();
var expect = require('chai').expect;

let webdriver = require('selenium-webdriver');
let By = webdriver.By;

let d = new webdriver.Builder()
  .forBrowser('firefox')
  .build();

var chai = require('chai');
var chaiWebdriver = require('chai-webdriver');
chai.use(chaiWebdriver(d));

after(function(done){
  d.quit().then(done())
});

describe('Social Tables Help Page', function(){

  // increase timeout from 2000ms to account for webdriver load
  this.timeout(150000);

  beforeEach(function(done){
    d.get('http://help.socialtables.com')
    // wait for page to load
    .then(d.wait(d.findElement(By.tagName('title'))))
    .then(done()) 

  });

  // Test 0
  it.skip('has the correct title', function(done) {
    d.getTitle()
      .then(title => title.should.equal('Social Tables Help - Home'))
      .then(() => done())
      .catch(error => done(error));
  });

  // Test 1
  // note - change xdescribe to describe to get this code to run
  describe('Logo', function(){
    it.skip('should link to https://www.socialtables.com/', function(done){
        d.findElement(By.xpath(".//*[@id='logo-grey']/img")).click()
        d.getCurrentUrl()
          .then(currentUrl => currentUrl.should.equal('https://www.socialtables.com/'))
          .then(() => done())
          .catch(error => done(error)); 
    });
  });

  // Test 2
  describe('Searching for \'Bobby Fisher\'', function(){
    it.skip('should return 0 results', function(done){
      // Insert Your Code Here
      d.findElement(By.id("searchAskInput")).sendKeys("Bobby Fisher")
       .then(d.findElement(By.xpath(".//*[@id='searchAskButton']/span")).click())
       .then(expect('#results .article').dom.to.have.count(0))  //made use of the sizzle-style selector method
       .then(() => done())
       .catch(error => done(error));
    })
  });

  // Test 3
  describe('Searching for \'event\'', function(){
    it.skip('should return 10 results', function(done){
      // Insert Your Code Here
      //enter the value 'event' into the search input text
      d.findElement(By.id("searchAskInput")).sendKeys("event")
         //click the search button afterwards 
        .then(d.findElement(By.xpath(".//*[@id='searchAskButton']/span")).click()) 
        .then(expect('#results .article').dom.to.have.count(10)) //also made use of the sizzle-style selector method
        .then(() => done())
        .catch(error => done(error));
    })
  });

  // Test 4
  describe('Searching for a word under three character', function(){
    it.skip('should trigger an alert box with the text \'Search string must be at least 3 characters long\'', function(done){
      // Insert Your Code Here
        var textInput = "He"; //input value to enter into input text
        d.findElement(By.id("searchAskInput")).sendKeys(textInput)
            .then(expect(textInput.length).to.be.below(3))
            .then(d.findElement(By.xpath(".//*[@id='searchAskButton']/span")).click())
            //let for the page load the alertbox and compare string against expected and actual 
            .then(d.wait(d.switchTo().alert().getText()
              .then(alertMessage => alertMessage.should.equal('Search string must be at least 3 characters long'))
              ))
              .then(() => done())
              .catch(error => done(error));      
    })
  });




});
