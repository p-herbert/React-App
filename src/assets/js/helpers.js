const nlp = require('nlp_compromise');

function normal(text) {
  return nlp.text(text).normal();
}

function sentences(text) {
  return nlp.text(text).sentences;
}

function isPalindrome(str) {
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
}

function paragraphs(text) {
  return text.replace('/\r\n/g', '\n').split('\n');
}

module.exports = {
  isPalindrome: isPalindrome,
  paragraphs: paragraphs };

