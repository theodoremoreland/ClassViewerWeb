// React
import React, { useState, useEffect, ReactElement } from 'react';

// Components
import Card from '../components/Cards/CourseCard';

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
        {
          courses[0] !== undefined
            ? courses.map((course) => <Card key={course.id} id={course.id} title={course.type} subtitle=""/>)
            : ""
        }
    </>
  );
}

export default CoursesView;