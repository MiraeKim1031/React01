import React, { useState } from "react";
import Layout from '../components/layout/Layout'
import Header from '../components/header/Header'
import Form from '../components/form/Form'
import List from '../components/list/List'


function TodoList () {
    const [todos, setTodos] = useState ([
        {
            id: 1,
            title: "리액트 공부하기",
            body: "프로젝트 클론 코딩 해보기",
            isDone: false
        },
        {
            id: 2,
            title: "태오 간식 사기",
            body: "츄르, 가다랑어, 닭가슴살 주문하기",
            isDone: false
        },
        {
            id: 3,
            title: "리액트 과제하기",
            body: "투두리스트 구현해서 배포하기",
            isDone: true
        },

    ])


    const onRemove = (id) => {
        setTodos((todos) => todos.filter((todo)=>todo.id !== id));
    };

    const onDone = (id) => {
        setTodos(
            todos.map(todo => 
                todo.id === id ? {...todo, isDone: !todo.isDone} : todo));
    };



    return (
        <div>
        <Layout>
        <Header/>
        <Form todos={todos} setTodos={setTodos}/>
        <List todos={todos} setTodos={setTodos} onRemove={onRemove} onDone={onDone}/>
        </Layout>
        </div>
    );
}

export default TodoList;