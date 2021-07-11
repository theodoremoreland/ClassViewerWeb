// React
import React, { FunctionComponent, ReactElement } from 'react';
import { Link } from 'react-router-dom';

// Styles
import './StudentCard.styles.css';

const StudentCard: FunctionComponent<ICard> = ({ link, title, subtitle, key }) : ReactElement => {

    return (
      <React.Fragment key={key ?? title + " " + subtitle}>
          <Link to={link} className="cardLink" style={{ textDecoration: 'none' }}>
              <div className="card studentCard">
                  <div className="cardHeader">
                      <h3 className="cardSubtitle">{subtitle}</h3>
                      <h1 className="cardTitle">{title}</h1>
                  </div>
              </div>
          </Link>
      </React.Fragment>
    )
  };
  
  export default StudentCard;