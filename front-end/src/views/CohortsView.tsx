// React
import React, { useState, useEffect, ReactElement } from 'react';

// Components
import CohortCard from '../components/Cards/CohortCard';

// api calls
import getCohorts from '../api/getCohorts';

interface ICohort {
  id: number
  name: string
}

function CohortsView({ location } : any) : ReactElement {
  const [courseID, setCourseID] = useState<number>();
  const [cohorts, setCohorts] = useState<Array<ICohort>>([]);

  useEffect(() => {
    const q = location.search;
    const courseIDRegEx = /(?<=course_id=).+$/;
    const courseID = q.match(courseIDRegEx)[0];

    setCourseID(parseInt(courseID));
    getCohorts(`http://localhost:3001/cohorts?course_id=${courseID}`)
      .then(s => setCohorts(s));
    // eslint-disable-next-line
  }, []);
  
  return (
    <>
        {
          cohorts[0] !== undefined
            ? cohorts.map((cohort) => <CohortCard key={cohort.id} id={courseID} title={cohort.name} subtitle=""/>)
            : ""
        }
    </>
  );
}

export default CohortsView;