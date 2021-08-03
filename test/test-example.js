TEST_SUITE.runAllTestsComplete = false;

testTitle('manual testing of add');
assert('add two positive numbers', add(1,1), 2);
assert('add negative and positive', add(-1,1), 0);
assert('add negative and negative', add(-1,-1), -2);

testTitle('10x random testing of add');
for(let i = 0; i < 10; i++) {
    let a = Math.random() * 20000 -10000;
    let b = Math.random() * 20000 -10000;

    assert('random test: ' + a + " + " + b, add(a,b), a+b);
}