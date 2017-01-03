# Module Practice

Working with Node is about creating and using modularized code!
Practice using `module.exports` and loading individual files into `main.js` with `require`

For each section create a new JavaScript file and then use `require` to load it into a `main.js` file.

`random.js`

```
var random = require('./random.js');
random(10) // returns random number between 0 and 10
```

`geometry.js`

```
var geometry = require('./geometry.js');
geometry.area(4, 5) // returns 20
```

`eightball.js`

```
var eightball = require('./eightball.js');
eightball.shake() // yes || no || maybe
```

`palindrome.js`

```
var palindrome = require('./palindrome');
palindrome.isPalindrome('hello') // true
palindrome.isPalindrome('racecar') // true
palindrome.isPalindrome('a man a plan panama') // true
```

`piglatin.js`

```
var pig = require ('./piglatin.js');
pig.toPig('hello world') // 'ellohay orldway'
pig.fromPig('ellohay orldway') // 'hello world'
```

`five.js`

```
var five = require('./five.js');
five(); // 5
five.upHigh() // ⁵
five.downLow() // ₅
five.tooSlow() // 5, with a ~500 millisecond delay
five.roman() // V
five.morseCode() // .....
five.negative() // -5
five.loud() // FIVE
five.smooth() // S
```
