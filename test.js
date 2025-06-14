test('getChange(1,1) should equal [] - an empty array', function(assert) {
    var result = getChange(1, 1); //no change/coins just an empty array
    var expected = [];
    assert.deepEqual(result, expected);        
}); // use deepEqual for arrays see: https://api.qunitjs.com/deepEqual/

test('getChange(215, 300) should return [50, 20, 10, 5]', function(assert) {
    var result = getChange(215, 300); // expect an array containing [50,20,10,5]
    var expected = [50, 20, 10, 5];
    assert.deepEqual(result, expected);
})

test('getChange(486, 600) should equal [100, 10, 2, 2]', function(assert) {
    var result = getChange(486, 600);
    var expected = [100, 10, 2, 2];
    assert.deepEqual(result, expected);
});

// This test returns one of each coins -- return 388 in total.
test('getChange(12, 400) should return [200, 100, 50, 20, 10, 5, 2, 1]', function(assert) {
    var result = getChange(12, 400);
    var expected = [200, 100, 50, 20, 10, 5, 2, 1];
    assert.deepEqual(result, expected);
});       