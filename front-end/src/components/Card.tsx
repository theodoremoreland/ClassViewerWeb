// React
import React, { FunctionComponent } from 'react';

// Styles
import './Card.css';

type CardProps = {
  title: string,
  subtitle: string
}

const Card: FunctionComponent<CardProps> = ({ title, subtitle }) => {

  return (
    <div className="cardContainer">
      <div className="cardHeader">
        <h3>{subtitle}</h3>
        <h1>{title}</h1>
      </div>
    </div>
  )
};

export default Card;