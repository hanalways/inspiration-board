import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  render() {
    console.log(this.props);
    const emojiDictionary = require("emoji-dictionary");
    const { text, emoji, id } = this.props.card;

    return (
      <div className="card">
        { text }
        { emoji && emojiDictionary.getUnicode(emoji) }
        <button 
          onClick={() => this.props.deleteCardCallback(id)}
        >Delete</button>
      </div>
    )
  }
}

Card.propTypes = {
  key: PropTypes.number,
  card: PropTypes.object,
  deleteCardCallback: PropTypes.func,
};

export default Card;
