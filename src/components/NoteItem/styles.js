import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({theme, isNew})=> isNew? 'transparent' : theme.colors.background900};
  color: ${({theme})=>theme.colors.gray300};

  border: ${({theme, isNew})=> isNew? `1px dashed ${theme.colors.gray300}` : 'none'};

  margin-bottom:8px;
  border-radius:10px;
  padding-right:16px;

  > button{
    border:none;
    background:none;
  }

  .button-delete{
    color:${({theme})=>theme.colors.red}
  }

  .button-add{
    color:${({theme})=>theme.colors.orange}
  }

  >input{
    height:56px,
    width:100%;

    padding: 12px;
    color:${({theme})=>theme.colors.white};
    background:transparent;
    border:none;

    &::placeholder{
      color:${({theme})=>theme.colors.gray300};
    }
  }



`