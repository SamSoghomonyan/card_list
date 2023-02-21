import React from "react";

function Header({ dispatch }) {
  return (
    <div className="header">
      <button
        onClick={() => dispatch({ type: "ADD_CARD" })}
        className="buttonCard"
      >
        Add Card
      </button>
      <button
        onClick={() => dispatch({ type: "SORT_CARDS" })}
        className="buttonCard"
      >
        Sort Cards
      </button>
    </div>
  );
}

export default Header;
