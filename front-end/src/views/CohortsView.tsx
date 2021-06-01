// React
import React, { useState, useEffect, ReactElement } from 'react';

// Components
import Card from '../components/Card';

// api calls
import getCohorts from '../api/getCohorts';

interface ICohort {
  id: number
  name: string
}

function CohortsView({ location } : any) : ReactElement {
  // TODO sort cohorts by start date.
  const [cohorts, setCohorts] = useState<Array<ICohort>>([]);

  useEffect(() => {
    const q = location.search;
    const courseIDRegEx = /(?<=course_id=).+$/;
    const courseID = q.match(courseIDRegEx)[0];

    getCohorts(`http://localhost:3001/cohorts?course_id=${courseID}`)
      .then(s => setCohorts(s));
    // eslint-disable-next-line
  }, []);
  
  return (
    <>
        {
          cohorts[0] !== undefined
            ? cohorts.map((cohort) => 
                    <Card
                        key={cohort.id}
                        cardType={"cohortCard"}
                        link={`/units?cohort_id=${cohort.id}`}
                        title={cohort.name}
                        subtitle=""
                    />
                )
            : ""
        }
    </>
  );
}

export default CohortsView;