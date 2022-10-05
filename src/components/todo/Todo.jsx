import React from "react";
import "./style.css";


const Todo = ({ todo, onRemove, onDone }) => {

    return (
      <div className="todoBox">
        <div><h2>{todo.title}</h2></div>
        <div><p>{todo.body}</p></div>   
        <div className="btns">
        <button className="delete" onClick={()=>onRemove(todo.id)}><b>삭제하기</b></button>
        <button className="done" onClick={()=>onDone(todo.id)}><b>{!todo.isDone ? "완료하기" : "취소하기"}</b></button>
        </div>
      </div>
    );
  }
  
  export default Todo;