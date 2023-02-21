import React from "react";

import CardList from "../CardList";

function Card({ cards, dispatch }) {
  return (
    <div className="container">
      {cards.cards.map((card) => (
        <CardList key={card.id} card={card.id} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default Card;
