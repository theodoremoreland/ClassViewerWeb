// React
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Panel from './components/Panel';

// Views
import CoursesView from './views/CoursesView';
import CohortsView from './views/CohortsView';
import UnitsView from './views/UnitsView';
import StudentsView from './views/StudentsView';

// Icons
import {
    GoPerson
    , GoInbox
    , GoCalendar
    , GoSignOut
    , GoHome
}  from "react-icons/go"

// Styles
import './App.css';

const icons = [
    {img: GoHome, label: "Home"}
    , {img: GoPerson, label: "Profile"}
    , {img: GoCalendar, label: "Calendar"}
    , {img: GoInbox, label: "Inbox"}
    , {img: GoSignOut, label: "Sign out"} 
];

function App() {

  return (
    <>
      <BrowserRouter>
        <div id="controlPanelContainer">
          <Panel
          title="Class Viewer Web"
          icons={icons} />
        </div>
        <div id="contentContainer">
          <Switch>
            <Route exact path="/" component={CoursesView}/>
            <Route exact path="/cohorts" component={CohortsView} />
            <Route exact path="/units" component={UnitsView} />
            <Route exact path="/students" component={StudentsView} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;