import React, { useState } from "react";
import "./style.css";


function Form({ todos, setTodos }) {

  const [id, setId] = useState(4);
  const [inputs, setInputs] = useState({
    title: "",
    body: ""
  });


  const changeHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]  : e.target.value 
    });
  };

  const submitBtn = (e) => {

    e.preventDefault();
    if (!inputs.body) {
      return; 
    }
    if (!inputs.title) {
      return;
    }
    
    setTodos([...todos, {
      id: todos.length +1,
      title: inputs.title,
      body: inputs.body,
      isDone: false
    }]);
    
    setId((prev) => prev + 1 );

    setInputs({
      title: "",
      body: ""
    })
    
    alert ("추가 완료")

    };
  

    return (
      <div className="form">

      <div>
      <b>제목</b> 
      <input 
        type="text"
        name="title"
        className="subject"
        value={inputs.title}
        autoComplete="off"
        onChange={changeHandler}/>

      <b>내용</b> 
      <input 
        type= "text"
        name="body"
        className="content" 
        value={inputs.body} 
        autoComplete="off"
        onChange={changeHandler}/>
      </div>

      <div>
        <button
        type="submit" 
        className="submitbt" 
        onClick={submitBtn}>
          <b>추가하기</b>
          </button>
          </div>

      </div>
    );
  }
  
  export default Form;