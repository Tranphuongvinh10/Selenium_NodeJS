var webdriver = require('selenium-webdriver');


var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.firefox()).build();

setTimeout(function () {
    driver.get('http://www.google.com');
    setTimeout(function () {
        driver.findElement(webdriver.By.name('q')).sendKeys('selenium trong nodejs');
        setTimeout(function () {
            driver.findElement(webdriver.By.name('btnK')).click();
            setTimeout(function () {
                driver.quit();
            }, 5000)
        }, 5000)
    }, 5000)
}, 5000)



