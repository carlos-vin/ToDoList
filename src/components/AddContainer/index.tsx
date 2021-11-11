import {useState,useEffect} from 'react';
import '../../App.css';

export default function AddContainer(props:{add(todo:string):void}){

    const [task,setTask]=useState('');

    function add(todo:string) {
        props.add(todo)
        
    }

    return(
        <div className="AddContainer">
            <input value={task}
             onChange={(e)=>setTask(e.target.value)}
             placeholder="Digite algo a se fazer hoje!"
             type="text"/>
            <button onClick={()=>add(task)}>+</button>
        </div>
    );
}