const nlp = require('nlp_compromise');

function normal(text) {
  return nlp.text(text).normal();
}

function sentences(text) {
  return nlp.text(text).sentences.map(sentence => sentence.str);
}

function compress(str) {
  return str.replace(/[^a-z0-9]/ig, '');
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function paragraphs(text) {
  return text.replace(/\r\n/g, '\n').split('\n');
}

function words(text) {
  return text.split(' ').filter(word => word !== '');
}

module.exports = {
  normal: normal,
  sentences: sentences,
  words: words,
  compress: compress,
  isPalindrome: isPalindrome,
  paragraphs: paragraphs };

