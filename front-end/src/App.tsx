// React
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Panel from './components/Panel';

// Views
import CoursesView from './views/Courses';

// Icons
import { GiCalendar
  , GiMailbox
  , GiHood
  , GiExitDoor
  , GiHouse
} from "react-icons/gi"; 

// Styles
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <div id="controlPanelContainer">
          <Panel title="Class Viewer Web" icons={[ GiHouse, GiHood, GiCalendar, GiMailbox, GiExitDoor]} />
        </div>
        <div id="contentContainer">
          <Switch>
            <Route path="/" component={CoursesView}/>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;