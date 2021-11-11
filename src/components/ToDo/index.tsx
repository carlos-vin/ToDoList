import {useState} from 'react';
import '../../App.css';

export default function ToDo(props:{del(index:number):void,chave:number,children:string}) {
    
    const[done,setDone]=useState(false);

    return(<div className="ToDo">
        <p style={{textDecoration: done===true ? 'line-through':'none'}}>{props.children}</p>
        
        <div className="options">
            
            <input onClick={()=>setDone(!done)} type="checkbox"/>
            <button onClick={()=>props.del(props.chave)}>Apagar</button>
        </div>
    </div>);
   
}