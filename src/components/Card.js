import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    const emojiDictionary = require("emoji-dictionary");
    const { text, emoji } = this.props.card;

    return (
      <div className="card">
        { text }
        { emoji && emojiDictionary.getUnicode(emoji) }
      </div>
    )
  }
}

Card.propTypes = {
  key: PropTypes.number,
  card: PropTypes.object,
};

export default Card;
