import React from "react";

function Footer({ cards }) {
  return (
    <div className="footer">
      <p>Total number of cards: {cards.length}</p>
    </div>
  );
}

export default Footer;
