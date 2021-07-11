// React
import React, { useState, useEffect, ReactElement } from 'react';

// Components
import CourseCard from '../components/Cards/CourseCard';

// api calls
import getCourses from '../api/getCourses';

interface ICourse {
  id: number
  type: string
}

function CoursesView() : ReactElement {
  const [courses, setCourses] = useState<Array<ICourse>>([]);

  useEffect(() => {
    getCourses("http://localhost:3001/courses")
      .then(s => setCourses(s));
  }, []);
  
  return (
    <>
        <div className="viewHeaderContainer">
            <h1 className="viewHeader">Courses</h1>
        </div>
        {
          courses[0] !== undefined
            ? courses.map((course) =>
                    <CourseCard
                        key={course.id}
                        link={`/cohorts?course_id=${course.id}`}
                        title={course.type}
                        subtitle=""
                    />
                )
            : ""
        }
    </>
  );
}

export default CoursesView;