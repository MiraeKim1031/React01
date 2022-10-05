import React from "react";
import "./style.css";
import Todo from '../todo/Todo'

const List = ({ todos, onRemove, onDone }) => {

    return (
        <div className="lists">

        <h2>Working... 🐻</h2>
        <div className="list">
        {todos.map(todo => (
        !todo.isDone &&
        <Todo todo={todo} key={todo.id} onRemove={onRemove} onDone={onDone}/>
        ))}
        </div>

        <h2>Done...! 🥰</h2>
        <div className="list">
        {todos.map(todo => (
        todo.isDone &&
        <Todo todo={todo} key={todo.id} onRemove={onRemove} onDone={onDone}/>
        ))}
        </div>

        </div>
    )}
  
  export default List;


  