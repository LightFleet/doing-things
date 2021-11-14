/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function(x) {
    return x.toString() === x.toString().split('').reverse().join('')
};

let a = 1;
console.log(a) //*?*
console.log(isPalindrome(321123))

