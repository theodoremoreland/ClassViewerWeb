// React
import React, { FunctionComponent } from 'react';
import { IconType } from 'react-icons';

// Styles
import './Panel.css';

type PanelProps = {
  title: string,
  icons: IconType[]
}

const Panel: FunctionComponent<PanelProps> = ({ title, icons }) => {


  return (
    <div className="panel">
        <h3 className="panelTitle">{title}</h3>
      {
        icons.map((Icon) => <div key={`${Icon}`}><Icon className="icon" size={40}/></div>)
      }
    </div>
  )
};

export default Panel;