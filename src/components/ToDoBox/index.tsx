import React from 'react';
import '../../App.css';

export default function ToDoBox(props:{children:JSX.Element[]}){

    return(
        <div className="ToDoBox">
            {props.children}
        </div>
    );
}