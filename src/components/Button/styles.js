import styled from "styled-components";


export const Container = styled.button`
  width: 100%;
  background-color: ${({theme})=>theme.colors.orange};
  color: ${({theme})=> theme.colors.background900};
  font-weight: 700;
  height: 56px;
  border-radius: 10px;
  margin-top: 16px;
  font-weight: 500;
  border: 0;

  &:disabled{
    opacity:  0.5;
  };
`