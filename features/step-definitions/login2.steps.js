// import { Given, When, Then } from "@wdio/cucumber-framework";
// import { Given, When, Then } from "cucumber";
const { Given, When, Then} = require("@wdio/cucumber-framework");
// const { Given, When, Then } = require('cucumber');
const login2Page = require("../pageobjects/login2.page");
const secure2Page = require("../pageobjects/secure2.page");
const { assert } = require('chai');


Given(/^User on the login page$/, () => {
	login2Page.isOnLoginPage();
});

When(/^User login with username and password$/, () => {
	login2Page.inputUsername.addValue("tomsmith");
	login2Page.inputPassword.addValue("SuperSecretPassword!");
	login2Page.btnSubmit.click();
});

Then(/^User should see secure page and logout$/, () => {
	// assert.strictEqual(secure2Page.flashAlert.waitForDisplayed(), true);
	login2Page.btnLogout.click();
	// browser.pause(2000)
});