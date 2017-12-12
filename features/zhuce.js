require('chromedriver')
let { Builder } = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();
let { defineSupportCode } = require('cucumber');
let assert = require('assert')
defineSupportCode(function ({ Given, When, Then }) {
    Given('导航到注册页面', function () {
        driver.get('http://192.168.21.128:3000')
        return driver.findElement({ xpath: '/html/body/div[1]/div/div/ul/li[5]/a' }).click()
    })
    When('在注册用户信息中填入注册信息', function () {
        driver.findElement({ id: 'loginname' }).sendKeys('simon')
        driver.findElement({ id: 'pass' }).sendKeys('simon')
        driver.findElement({ id: 're_pass' }).sendKeys('simon2')
        return driver.findElement({ id: 'email' }).sendKeys('simon@163.com')
    })
    Then('点击注册按钮，注册失败，得到错误提示。', function () {
        driver.findElement({ css: ".span-primary" }).click();
        return driver.findElement({ css: "#content > div > div.inner > div > strong" }).getText().then(function (errinfo) {
            console.log('errinfo:', errinfo)
            return assert.deepEqual("两次密码输入不一致。", errinfo);
        })
    })
})
