import React from 'react';

const parse = require('app/assets/js/helpers');

const Markup = ({ text }) => (
  <div className="markup">
    {
      parse.paragraphs(text).map((paragraph, idx) => (
        <p key={idx}>
          {
            // Check if sentence forms a palindrome
            parse.sentences(paragraph).map((sentence) => {
              if (parse.isPalindrome(sentence)) {
                return <b>{`${sentence}`}</b>;
              }

              // Check if word forms a palindrome
              return parse.words(sentence)
                .map(word => (parse.isPalindrome(word) ? <b>{`${word} `}</b> : `${word} `));
            })
          }
        </p>
      ))
    }
  </div>
);

Markup.propTypes = {
  text: React.PropTypes.string.isRequired };

export default Markup;

