import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;
  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style:solid;
  border-bottom-color:${({theme})=> theme.colors.gray300};

  display: flex;
  justify-content: space-between;
  padding: 0 80px;
  background-color: ${({theme})=> theme.colors.background700};

`

export const Profile = styled(Link)`

display: flex;
align-items: center;

>img{
  width: 56px;
  height: 56px;
  border-radius: 50%;
}

>div{
  display: flex;
  flex-direction: column;
  margin-left:16px;
  line-height:24px;

  span{
    font-size: 14px;
    color: ${({theme})=> theme.colors.gray100};
  }
  strong{
    font-size: 18px;
    color: ${({theme})=> theme.colors.white};
  }
}`

export const Logout = styled.button`
  border: none;
  background: none;

  >svg{
    color: ${({theme})=> theme.colors.gray100};
    font-size:24px;

  }


`