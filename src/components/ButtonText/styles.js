import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({theme, isActive}) => isActive ? theme.colors.orange : theme.colors.gray100};
  font-weight: bold;

  border: none;
  font-size: 16px;



`