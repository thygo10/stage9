import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  background-color: ${({theme})=>theme.colors.background900};
  color: ${({theme})=>theme.colors.gray300};
  margin-bottom:8px;
  border-radius:10px;

  >input{
    width:100%;
    height:56px;
    padding:12px;
    background: transparent;
    
    color: ${({theme})=>theme.colors.white};
    border:0;
    & placeholder{
      color: ${({theme})=>theme.colors.gray300};
    }  
  }
  >svg{
      margin-left:16px;
    }

`