const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const specialWords = [
  'API', 'OO', 'NaN', 'JSONP', 'Web', 'StopPropagation', 'PreventDefault'
];

function titleCased() {
  return tutorials.map(tutorial => {
    return tutorial
      .split(' ')
      .map(word => {
        // Remove punctuation for matching
        let baseWord = word.replace(/[^\w]/g, '');
        let punctuation = word.match(/[^\w]$/) ? word.match(/[^\w]$/)[0] : '';
        // Find the special word with correct casing
        let special = specialWords.find(sw => sw.toLowerCase() === baseWord.toLowerCase());
        if (special) {
          return special + punctuation;
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');
  });
}
