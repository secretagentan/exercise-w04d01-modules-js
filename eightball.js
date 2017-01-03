var responses = [
  "yes",
  "no",
  "maybe",
  "ask again"
  ];

function eightball() {
  return responses[Math.floor(Math.random() * responses.length)];
};

module.exports = {
  shake: eightball
};
