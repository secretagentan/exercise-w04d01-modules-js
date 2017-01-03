var responses = ["yes", "no", "maybe", "ask again"];

function eightball() {
  return responses[Math.floor(Math.random() * responses.length)];
  // return cards[Math.floor(Math.random() * cards.length)];

};

module.exports = {
  shake: eightball
};
