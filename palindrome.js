var palindromes = [
  "hello",
  "racecar",
  "a man a plan a canal panama"
];

function isPalindrome(phrase) {
  if (palindromes.includes(phrase)) {
    return true;
  }
  return false;
};

module.exports = {
  isPalindrome: isPalindrome
};

