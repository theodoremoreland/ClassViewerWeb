// React
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

// Styles
import './CohortCard.css';

type CardProps = {
  id: number | undefined,
  title: string,
  subtitle: string
}

const CohortCard: FunctionComponent<CardProps> = ({ id, title, subtitle }) => {

  return (
    <Link to={`/units?cohort_id=${id}`}>
        <div className="cardContainer">
        <div className="cardHeader">
            <h3>{subtitle}</h3>
            <h1>{title}</h1>
        </div>
        </div>
    </Link>
  )
};

export default CohortCard;