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

  // componentDidUpdate() {

  // }

  deleteCard = (id) => {
    const DELETE_CARD_URL = `https://inspiration-board.herokuapp.com/cards/${id}`;

    axios.delete(DELETE_CARD_URL)
      .then((response) => {
        console.log(response.data);
        const newCards = [...this.state.cards];
        const cardIndex = newCards.findIndex((eachCard) => eachCard.card.id == id);
        newCards.splice(cardIndex, 1);

        this.setState({
          cards: newCards,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        })
      })


  }

  componentDidMount() {
    const { url, boardName } = this.props;
    const BOARD_API_URL = `${url}${boardName}/cards`;

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
        deleteCardCallback={ this.deleteCard }
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
