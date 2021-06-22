// React
import React, { useState, useEffect, ReactElement } from 'react';

// Components
import Card from '../components/Card';

// api calls
import getStudents from '../api/getStudents';

interface IStudent {
  id: number
  name: string
}

function StudentsView({ location } : any) : ReactElement {
  // TODO sort students by first name.
  const [students, setStudents] = useState<Array<IStudent>>([]);

  useEffect(() => {
    const q = location.search;
    const unitIDRegEx = /(?<=unit_id=).+$/;
    const unitID = q.match(unitIDRegEx)[0];

    getStudents(`http://localhost:3001/students?unit_id=${unitID}`)
      .then(s => setStudents(s));
    // eslint-disable-next-line
  }, []);
  
  return (
    <>
        <div style={{width: "100%", textAlign: "center", marginTop: "-50px"}} className="viewHeaderContainer">
            <h1 className="viewHeader">Students</h1>
        </div>
        {
          students[0] !== undefined
            ? students.map((student) => 
                    <Card
                        key={student.id}
                        cardType={"studentCard"}
                        link={``}
                        title={student.name}
                        subtitle=""
                    />
                )
            : ""
        }
    </>
  );
}

export default StudentsView;