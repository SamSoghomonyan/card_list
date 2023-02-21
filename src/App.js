import logo from "./logo.svg";
import "./App.css";

import Header from "./Components/Header";
import Card from "./Components/Card";

import { useReducer, useEffect } from "react";
import Footer from "./Components/Footer";
import Instructions from "./Components/Instructions";

const intialState = {
  cards: JSON.parse(localStorage.getItem("cardsState")) || [],
};

const ACTION_TYPE = {
  ADD_CARD: "ADD_CARD",
  SORT_CARDS: "SORT_CARDS",
  DELETE_CARD: "DELETE_CARD",
};

const reduser = (state, action) => {
  switch (action.type) {
    case "ADD_CARD":
      return {
        ...state,
        cards: [...state.cards, { id: Math.floor(Math.random() * 1000) + 1 }],
      };
    case "SORT_CARDS":
      return {
        ...state,
        cards: state.cards.sort(function (a, b) {
          return a.id - b.id;
        }),
      };
    case "DELETE_CARD":
      const {
        payload: { card: id },
      } = action;
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== id),
      };
  }
};

function App() {
  const [state, dispatch] = useReducer(reduser, intialState);

  useEffect(() => {
    localStorage.setItem("cardsState", JSON.stringify(state.cards));
  }, [state.cards]);
  console.log("state", state);
  return (
    <div className="globalContainer">
      <div className="conatinerCards">
        <Header dispatch={dispatch} />
        <Card cards={state} dispatch={dispatch} />
        <Footer cards={state.cards} />
      </div>
      <div className="instructions">
        <Instructions />
      </div>
    </div>
  );
}

export default App;
