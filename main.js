// require things here
console.log("*****");

var random = require('./random.js');
console.log(random(10));


console.log("*****");

var geometry = require('./geometry.js');
console.log(geometry.area(4, 5));


console.log("*****");

var eightball = require('./eightball.js');
console.log(eightball.shake());


console.log("*****");
var palindrome = require('./palindrome');
console.log(palindrome.isPalindrome('hello')); // true
console.log(palindrome.isPalindrome('racecar')); // true
console.log(palindrome.isPalindrome('a man a plan a canal panama')); // true


console.log("*****");
// var pig = require ('./piglatin.js');
// pig.toPig('hello world') // 'ellohay orldway'
// pig.fromPig('ellohay orldway') // 'hello world'


console.log("*****");
// var five = require('./five.js');
// five(); // 5
// five.upHigh() // ⁵
// five.downLow() // ₅
// five.tooSlow() // 5, with a ~500 millisecond delay
// five.roman() // V
// five.morseCode() // .....
// five.negative() // -5
// five.loud() // FIVE
// five.smooth() // S
