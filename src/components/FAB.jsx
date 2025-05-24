import React from 'react';
import './FAB.css';

const FAB = ({ onClick }) => {
  return (
    <button className="fab" onClick={onClick}>
      +
    </button>
  );
};

export default FAB;
