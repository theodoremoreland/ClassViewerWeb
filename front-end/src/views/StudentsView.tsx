// React
import React, { useState, useEffect, ReactElement } from 'react';

// Components
import StudentCard from '../components/Cards/StudentCard';

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
        <div className="viewHeaderContainer">
            <h1 className="viewHeader">Students</h1>
        </div>
        {
          students[0] !== undefined
            ? students.map((student) => 
                    <StudentCard
                        key={student.id}
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