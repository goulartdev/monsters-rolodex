import React from 'react';

import Monster from '../../model/monster';
import Card from '../card/card.component';

import './card-list.styles.css';

interface CardListProps {
  monsters: Monster[]
}

const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className="card-list">
      {monsters.map(monster => {
        return <Card key={monster.id} monster={monster} />
      })}
    </div>
  );
}

export default CardList;