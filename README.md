## Project Overview
This is a Hostinger QA automation task. The tests are designed using WebdriverIO and JavaScript. Below is a step-by-step guide on how to set up and run tests.

## Installation and Setup

### 1. Node.js

Go on [official Node.js website](https://nodejs.org/) and download the installer. To check if you already have Node.js installed open a terminal window and type:<br>
``node -v``<br>
This will display your nodejs version.

### 2. Repository
Clone repository using command or download from Github.<br>
``
git clone https://github.com/EgleLengv/Hostinger-QA-task.git
``

### 3. WebdriverIO

To setup WebdriverIO use command:<br>
 ``
 npm install @wdio/cli
 ``<br>
Documentation: https://webdriver.io/docs/gettingstarted

### 4. Run test
To run test use command:<br>
``npm run wdio``

### Additional information:

Faker.js library is used.
``
npm install @faker-js/faker --save-dev
``<br>
Documentation: https://fakerjs.dev/


