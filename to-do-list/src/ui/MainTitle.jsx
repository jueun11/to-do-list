import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
width: 100%;
border: 1px solid red;
display: flex;
align-items: center;
justify-content: center;
& > h1 {
    padding:0;
    margin:0;
    color: #52330F;
    font-size: 2rem;
  }
`;

const MainTitle = () => {
  return (
    <Wrapper>
      <h1>오늘의 할일</h1>
    </Wrapper>
  )
}

export default MainTitle;