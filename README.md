# Light-Wight-TestFramework-JS

This is a minimalistic pure Javascript / html test framework. Aimed at pure javascript projects.

## Why?

This Project was mainly a fun one, I decided to recreate a simple Testframework just to understand how it works.

I mainly use it in smaller projects with already develop a certain complexety but are programmed in pure Javascript and html.

## Setup

1. Copy the context of this Repository somwhere in your javascript.
2. Open the index.html in your browser to see hwo the example.js is tested with the test script test/test-example.js
3. Create test classes in the folder test/. i.e. test-[my-own-class-name].js based on test-example
4. add test-my-own-class-name.js as a script at the bottom of the test_index.html
5. open test_index.html in the browser
6. to rerun the tests you have to click the button "run tests" on top

## Remarks

1. you can also move the test_index.html file within the test folder (do not forget to update the paths declared at the bottom of the file(!)
2. to just exclude the test-example.js class from running just remove its path from the bottom of the test-index.html file
