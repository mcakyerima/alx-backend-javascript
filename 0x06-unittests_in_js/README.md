# Unit Testing in JavaScript with Mocha, Chai, and Sinon

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-blue)
![Node.js](https://img.shields.io/badge/Node.js-v18.19.0-green)
![Express.js](https://img.shields.io/badge/Express.js-v4.17.1-orange)
![Mocha](https://img.shields.io/badge/Mocha-v6.2.2-red)
![Chai](https://img.shields.io/badge/Chai-v4.2.0-lightgrey)
![Sinon](https://img.shields.io/badge/Sinon-v7.5.0-brightgreen)

## Overview

This repository contains a series of challenges and exercises related to unit testing in JavaScript using Mocha, Chai, and Sinon. Each challenge focuses on a different aspect of testing, including async testing, integration testing, regex testing, deep equality testing, and more.

## Challenges

1. **Async Tests with `done`**: Learn how to support async testing using Mocha's `done` callback.

2. **Skip Tests**: Understand how to skip tests in Mocha when you need to come back to a failing test later.

3. **Basic Integration Testing**: Explore basic integration testing in JavaScript with Express.js using Mocha.

4. **Regex Integration Testing**: Perform integration testing with regular expressions in JavaScript.

5. **Deep Equality & Post Integration Testing**: Delve into deep equality testing and perform integration testing for POST requests in JavaScript.

## Directory Structure

```
0x06-unittests_in_js/
├── 6-payment_token.js
├── 6-payment_token.test.js
├── 7-skip.test.js
├── 8-api/
│   ├── api.js
│   ├── api.test.js
│   ├── package.json
│   └── ...
├── 9-api/
│   ├── api.js
│   ├── api.test.js
│   ├── package.json
│   └── ...
├── 10-api/
│   ├── api.js
│   ├── api.test.js
│   ├── package.json
│   └── ...
├── utils.js
├── package-lock.json
└── package.json
```

## Usage

To run the tests for each challenge, navigate to the respective directory and execute:

```bash
npm test <test_file_name>
```

Ensure that all tests pass without any warnings or errors.
