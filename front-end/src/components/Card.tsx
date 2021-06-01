// React
import React, { FunctionComponent, ReactElement } from 'react';
import { Link } from 'react-router-dom';

// Styles
import './Card.css';

type CardProps = {
  cardType: string,
  link: any,
  title: string,
  subtitle: string
}

const Card: FunctionComponent<CardProps> = ({ cardType, link, title, subtitle }) : ReactElement => {

  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
        <div className={`cardContainer ${cardType}`}>
            <div className={`cardHeader`}>
                <h3>{subtitle}</h3>
                <h1>{title}</h1>
            </div>
        </div>
    </Link>
  )
};

export default Card;