"use strict";

/**
    * 8 types of coins: 200, 100, 50, 20, 10, 5, 2, 1
    * Return an array of coins representing the change.
    * Return a number again if there are multiple coins.
*/
function getChange(totalPayable, cashPaid) {
    "use strict";
    let back = cashPaid - totalPayable;
    let value = [200, 100, 50, 20, 10, 5, 2, 1];
    let output = [];

    for (let num of value) {
        let count = Math.floor(back/num);
        for (let i = 0; i < count; i++) {
            output.push(num);
        }
        back = back-count*num;
    }
            
    return output;
}

function helper(arr, index, num) {
    for (let i = 1; i <= index; i++) {
        arr.push(num);
    }
    return arr;
}