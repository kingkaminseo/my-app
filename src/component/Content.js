import React from "react";
import styled from "styled-components";
import Clock from "../Clock";
import { useState } from 'react';

const Content = () => {
    const [toDo,setTodo] = useState("");
    const [toDos,setTodos] = useState([]);
    const onSubmit = (e) => {
        e.preventDefault();
        if(toDo === ""){
            return
        }
        setTodos((currentArray) =>[toDo, ...currentArray])
        setTodo("")
    } 
    const onChange = (e) => {
        setTodo(e.target.value)
    }
    return (
        <Container>
            <Clock/>
            <h1 style={{color : 'white'}}>To-do list</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="입력하세요"  onChange={onChange} value={toDo}/>
                <button>등록하기</button>
            </form>
            <ul>
                {toDos.map((item,index)=><li key={index}>{item}</li>)}
            </ul>
        </Container>

    );
}

const Container = styled.div`
    position: absolute;
    right: 0;
    top: 33px;
    width: 500px;
    height: calc(100% - 33px);
    color: black;
`

export default Content