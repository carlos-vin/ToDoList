import {useState,useEffect} from 'react';
import './App.css';
import MainContainer from './components/MainContainer'; 
import Header from './components/Header';
import ToDoBox from './components/ToDoBox';
import AddContainer from './components/AddContainer';
import ToDo from './components/ToDo';


function App() {

  const [todoList,setTodoList]=useState(['']);
  
  useEffect(()=>{
    let listClone=[...todoList]
    if(listClone[0]==''){
      listClone.shift()
      setTodoList(listClone)
    }
  },[todoList])


  function addToDo(newTodo:string){
    const listClone = [...todoList];
    if(listClone[0]==''){
      listClone.shift()
    }
    listClone.push(newTodo);
    setTodoList(listClone);
    console.log(todoList)
   
  }

  function delToDo(index:number) {
    let listClone = [...todoList];
    listClone.splice(index,1);
    setTodoList(listClone);
  }

  return (
    <MainContainer>
      <Header/>
      <ToDoBox>
       {todoList.map((element,index)=>{return(<ToDo del={delToDo} chave={index}>{element}</ToDo>)})}
      </ToDoBox>  
      <AddContainer add={addToDo}/>
     
    </MainContainer>
    
  );
}

export default App;
