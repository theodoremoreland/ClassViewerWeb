import React from 'react';


// Components
import Panel from './components/Panel';
import Card from './components/Card';

// Icons
import { GiCalendar, GiMailbox, GiHood } from "react-icons/gi"; 

// Styles
import './App.css';

function App() {
  return (
    <>
      <div id="controlPanelContainer">
        <Panel title="Class Viewer Web" icons={[ GiHood, GiCalendar, GiMailbox,]} />
      </div>
      <div id="contentContainer">
        <Card title="Unit 1 - JavaScript" subtitle="Lc101 2021"/>
        <Card title="Unit 2 - Java" subtitle="Lc101 2021"/>
        <Card title="Unit 1 - Python" subtitle="Lc101 2018"/>
        <Card title="Unit 2 - Java" subtitle="Lc101 2018"/>
      </div>
    </>
  );
}

export default App;