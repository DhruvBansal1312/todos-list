import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, { useState , useEffect} from 'react';
function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const addTodo =(title,desc)=>{
    console.log("i am adding this todo",title,desc);
    let sno;
    if(todos.length===0){
      sno=1;
    }
    else{
      sno = todos[todos.length-1].sno +1;
    }
    const myTodo ={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }
  const onDelete=(todo)=>{
    console.log("i am onDelete of todo",todo);
  
  setTodos(todos.filter((e)=>{
    return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const [todos,setTodos] =useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  return (
    <>
    <Router>
      <Header title="My Todos list" searchBar={false}/>
      <Switch>
        <Route exact path="/" render={()=>{
          return(
          <>
          <AddTodo addTodo={addTodo}/>
          <Todos todos={todos} onDelete={onDelete}/>
          </>)
        }}>
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
