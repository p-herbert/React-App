import React from 'react';

const h = require('app/assets/js/helpers');

const Markup = ({ text }) => (
  <div>
    {
      h.paragraphs(text)
        .map((p, idx) => {
          return (
            <p key={idx}>
              {
                h.sentences(p).map((sentence) => {
                  if (h.isPalindrome(h.compress(h.normal(sentence)))) {
                    return <b>{ `${sentence} ` }</b>;
                  }

                  return h.words(sentence)
                    .map(word => (h.isPalindrome(word.toLowerCase())
                      ? <b>{`${word} `}</b>
                      : `${word} `));
                })
              }
            </p>
          );
        })
    }
  </div>
);

Markup.propTypes = {
  text: React.PropTypes.string.isRequired };

export default Markup;
