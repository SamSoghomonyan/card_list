import React from "react";

function CardList({ card, dispatch }) {
  return (
    <div className="card">
      <h1 className="name">{card}</h1>
      <p onClick={() => dispatch({ type: "DELETE_CARD", payload: { card } })}>
        X
      </p>
    </div>
  );
}

export default CardList;
