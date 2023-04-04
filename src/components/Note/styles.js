import styled from "styled-components"


export const Container = styled.button`
  width: 100%;
  background-color: ${({theme})=> theme.colors.background700};

  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 16px;


  >h1{
    flex: 1;
    text-align: left;
    font-weight:700;
    font-size:24px;
    color: ${({theme})=> theme.colors.white};
  }

  >footer{
    display: flex;
    width: 100%;
    margin-top: 16px;
  }

`