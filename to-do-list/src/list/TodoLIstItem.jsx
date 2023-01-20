import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  justify-content: space-between;
  margin-top: 30px;
  width: 100%;
  gap: 10px;
  &>button{
    height: 60px;
    width: 60px;
    background-color: #D94B19;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 50%;
  }
  `;
const Container = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  justify-content: space-between;
  width: 90%;
  background-color: #FFF;
  &>button{
    height: 60px;
    width: 60px;
    background-color: #fff;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #52330F;
  }
`;  

  
const Text = styled.h2`
  display: flex;
  align-items: center;
  height: 60px;
  fontSize: 16px;
  padding: 30px;
  box-sizing: border-box;
`;

function TodoListItems({ items, onChange, onRemove, completBtn}) {
  return (
    <Wrapper key={items.id}>
      <button style={items.Complet ? {backgroundColor: "#D94B19"} : {backgroundColor: "#FFF"} } onClick={() => completBtn(items.id)}></button>
      <Container>
        <Text style={items.Complet ? {color: "#DA9F58" , textDecorationLine: "line-through" } : {color: "#52330F"}} onChange={onChange}>
      {items.text}
      </Text>
      <button onClick={() => onRemove(items.id)}><i className ="fa-solid fa-xmark fa-2x"></i></button>
      </Container>
    </Wrapper>
  );
}

export default TodoListItems;