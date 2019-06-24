import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      text: '',
      emoji: '',
    }
  }

  formSelects = (emojiArray) => {
    const emojiDictionary = require("emoji-dictionary");
    return emojiArray.map((field) => {
      if (field) {
        return <option value={field} className="new-card-form__form-select" >{emojiDictionary.getUnicode(field)}</option>
      }
    })
  }

  onValueChange = (event) => {
    const { target: { name, value }} = event;
    this.setState({ [name]: value })
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const { text, emoji } = this.state;
    this.props.addCardCallback(this.state);
    
    this.resetState();
  }

  resetState = () => {
    this.setState({
      text: null,
      emoji: null,
    });
  }

  render() {
    return(
      <div className="new-card-form">
        <h3 className="new-card-form__header">Put up a new card!</h3>
        <form
          className="new-card-form__form"
          onSubmit={ this.onFormSubmit }
        >
          <label className="new-card-form__form-label">Card message:</label>
          <textarea
            name="text"
            type="text"
            value={this.state.text}
            placeholder="Text here"
            onChange={this.onValueChange}
            className="new-card-form__form-textarea"
          />
          <label className="new-card-form__form-label">Emoji:</label>
          <select 
            name="emoji"
            value={this.state.emoji}
            onChange={this.onValueChange}
          >
            { this.formSelects(EMOJI_LIST) }
          </select>
          <input
            type="submit"
            value="Submit"
          className="new-card-form__form-button"
          />
        </form>
      </div>
    )
  }
}

export default NewCardForm;