// React
import React, { useState, useEffect } from 'react';

// Components
import Panel from './components/Panel';
import Card from './components/Card';

// api calls
import getCourses from './api/getCourses';

// Icons
import { GiCalendar
  , GiMailbox
  , GiHood
  , GiExitDoor
  , GiHouse
} from "react-icons/gi"; 

// Styles
import './App.css';

interface c {
  id: number
  type: string
}

function App() {
  const [courses, setCourses] = useState<Array<c>>([]);

  useEffect(() => {
    getCourses("http://localhost:3001/courses")
      .then(s => setCourses(s));
  }, []);
  

  return (
    <>
      <div id="controlPanelContainer">
        <Panel title="Class Viewer Web" icons={[ GiHouse, GiHood, GiCalendar, GiMailbox, GiExitDoor]} />
      </div>
      <div id="contentContainer">
        {
          courses[0] !== undefined
            ? courses.map((course) => <Card key={course.id} title={course.type} subtitle=""/>)
            : ""
        }
      </div>
    </>
  );
}

export default App;