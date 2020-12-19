import React from 'react';

import Monster from '../../model/monster';

import './card.styles.css';

interface CardProps {
  monster: Monster;
}

const Card = ({ monster }: CardProps) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt="monster"/>
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  )
}

export default Card;