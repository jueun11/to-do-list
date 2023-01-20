import React, {useRef, useState} from "react";
import styled from "styled-components";
// import TodoList from "../list/TodoList";
import TodoCreate from "../list/TodoList"
import TodoListItems from "./TodoLIstItem";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 2vh 0px;
  gap: 10px;
`;

const TodoAddTnput = styled.input`
  width: 95%;
  height: 60px;
  resize: none;
  background-color: #FFF;
  border: none;
  padding: 30px;
  box-sizing: border-box;
  :focus{
    outline: none;
  }
`;

const TodoAddBtn = styled.button`
  width: 60px;
  height: 60px;
  background-color: #D94B19;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;


const TodoAdd = (items) => {
  const [inputs, setInputs] = useState({
    text: '',
    Complet: false
  });
  const [todos, setTodos] = useState([

  ]);
  const { text, Complet } = inputs;
  const completBtn = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo,Complet: !todo.Complet } : todo
      )
    );
    console.log(id);
  }
  const nextId = useRef(0);
  const onChange = (e) => {
    console.log(e.target.value);
    setInputs({
      ...inputs,
      text: e.target.value 
    });
  };
  const TodoCreate = (e) => {
    const todo = {
      id: nextId.current,
      text,
      Complet: false
    };
    setTodos([...todos, todo]);

    setInputs({
      ...inputs,
      text: '',
      Complet: false
    });
    nextId.current += 1;
  };
  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setTodos(todos.filter(todo => todo.id !== id));
    console.log(id);

  };
  return(
    <>
      <Container>
        <TodoAddTnput value={text} onChange={onChange}  placeholder="할일"></TodoAddTnput>
        <TodoAddBtn onClick={TodoCreate}>
          <i className="fa-solid fa-plus fa-2x"></i>
        </TodoAddBtn>
      </Container>
      <div>
        {todos.map(el => <TodoListItems items={el} key={el.id} onRemove={onRemove} completBtn={completBtn}/>)}
      </div>
    </>
  );
}

export default TodoAdd;