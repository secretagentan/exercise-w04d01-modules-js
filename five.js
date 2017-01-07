
function five() {
  console.log(5);
};

five.upHigh = function() {
  console.log('⁵');
};
// five.upHigh();

five.downLow = function() {
  console.log('₅');
}

five.tooSlow = function() {
  setTimeout(function() {
  console.log(5);
}, 500);
};

five.roman = function() {
  console.log('V');
}

five.morseCode = function() {
  console.log('.....');
}

five.negative = function() {
  console.log('-5');
}

five.loud = function() {
  console.log('FIVE');
}

five.smooth = function() {
  console.log('S');
}

module.exports = five;
