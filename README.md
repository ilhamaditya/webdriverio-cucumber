# webdriverio-cucumber

# Cucumber WebDriver.IO

## What is in this repository?

- Testing Automation Framework for Web

## What to prepare?

- Node.js (latest version)
- IDE : VSCode
- install npm packages : npm install
- Cucumber plugins : Cucumber (Gherkin) Full Support & Cuke Step Definition Generator

## How to run your script?

Specify your tag name in wdio.conf.js

```js
tagExpression: "@TagExample";
```

Then run this command in terminal

```bash
npm run wdio or npm run wdio:allure
```

## How to contribute?

Please create new branch from master when you want to add new test cases with name format as below.

```git
feature/feature-name
```

For fixing code in master you can create new branch with name.

```git
hotfix/feature-name
```

