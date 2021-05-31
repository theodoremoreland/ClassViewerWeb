// React
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

// Styles
import './CourseCard.css';

type CardProps = {
  id: number,
  title: string,
  subtitle: string
}

const CourseCard: FunctionComponent<CardProps> = ({ id, title, subtitle }) => {

  return (
    <Link to={`/cohorts?course_id=${id}`}>
        <div className="cardContainer">
        <div className="cardHeader">
            <h3>{subtitle}</h3>
            <h1>{title}</h1>
        </div>
        </div>
    </Link>
  )
};

export default CourseCard;