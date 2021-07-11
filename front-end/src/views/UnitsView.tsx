// React
import React, { useState, useEffect, ReactElement } from 'react';

// Components
import UnitCard from '../components/Cards/UnitCard';

// api calls
import getUnits from '../api/getUnits';

interface IUnit {
  id: number
  name: string
}

function UnitsView({ location } : any) : ReactElement {
  // TODO sort unit by unit order.
  const [units, setUnits] = useState<Array<IUnit>>([]);

  useEffect(() => {
    const q = location.search;
    const cohortIDRegEx = /(?<=cohort_id=).+$/;
    const cohortID = q.match(cohortIDRegEx)[0];

    getUnits(`http://localhost:3001/units?cohort_id=${cohortID}`)
      .then(s => setUnits(s));
    // eslint-disable-next-line
  }, []);
  
  return (
    <>
        <div className="viewHeaderContainer">
            <h1 className="viewHeader">Units</h1>
        </div>
        {
          units[0] !== undefined
            ? units.map((unit) => 
                    <UnitCard
                        key={unit.id}
                        link={`/students?unit_id=${unit.id}`}
                        title={unit.name}
                        subtitle=""
                    />
                )
            : ""
        }
    </>
  );
}

export default UnitsView;