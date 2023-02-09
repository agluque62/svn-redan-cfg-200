const logggerTests = require("./Tests/loggerTests")
const dbasyncTest = require('./Tests/dbAsyncTest')
const autTest = require('./Tests/authenticationTests');
const http_client_test = require('./Tests/httpclientTests');

// logggerTests.ExecuteTest();
// dbasyncTest.ExecuteTest();
// autTest.Test(); TODO
http_client_test.test();