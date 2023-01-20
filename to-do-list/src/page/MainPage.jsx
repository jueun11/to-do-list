import React from "react";
import styled from "styled-components";
import TodoAdd from "../list/TodoAdd";
import MainTitle from "../ui/MainTitle";
import { useState } from "react";
import TodoList from "../list/TodoList";

const Wrapper = styled.div`
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #F2E4C6;
`;

const Container = styled.div`
  width: 70vw;
  height: 70vh;
  background-color: #F2AF5E;
  padding: 30px;
`;

const MainPage = () => {
  
  return(
    <Wrapper>
      <Container>
        <MainTitle/>
        <TodoAdd/>
      </Container>
    </Wrapper>
  );
}

export default MainPage;