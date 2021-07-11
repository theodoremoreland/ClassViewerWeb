// React
import React, { FunctionComponent } from 'react';
import { IconType } from 'react-icons';

// Styles
import './Panel.css';

type PanelProps = {
  title: string,
  icons: Array<{
      img: IconType,
      label: string
    }>
}

const Panel: FunctionComponent<PanelProps> = ({ title, icons }) => {


  return (
    <div className="panel">
        <h3 className="panelTitle">{title}</h3>
      {
        icons.map(({img, label}) => {
            const Icon = img;

            return (
                <div key={`${label}`} className="iconContainer">
                    <Icon className="icon" size={32}/>
                    <h4 className="iconLabel">{label}</h4>
                </div>
            )
        })
      }
    </div>
  )
};

export default Panel;