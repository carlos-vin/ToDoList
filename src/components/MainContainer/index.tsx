import React from 'react';
import '../../App.css';

export default function MainContainer(props:{children:JSX.Element[]}){
    return(
    <div style={{color:'white'}} className="mainContainer">
        {props.children}
    </div>
    );
  }

  