import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      // url: this.props.url,
      // boardName: this.props.boardName,
    };
  }

  componentDidMount() {
    const { url, boardName } = this.props;
    const BOARD_API_URL = `${url}/${boardName}/cards`;

    axios.get(BOARD_API_URL)
      .then((response) => {
        console.log(response.data);
        this.setState({
          cards: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        })
      }) 
  }

  render() {

    const cardList = this.state.cards.map((card) => {
      return <Card 
        card={ card.card }
        key={ card.id }
      />
    });

    return (
      <div>
        { cardList }
      </div>
    )
  }

}

Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string,
};

export default Board;
