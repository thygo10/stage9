import styled from "styled-components";

export const Container = styled.section`

  margin: 28px 0;

  >h2{
    border-bottom: 1px;
    border-bottom-style:solid;
    border-bottom-color:${({theme})=> theme.colors.backgroundColor700};

    padding-bottom:16px;
    margin-bottom:24px;

    color:${({theme})=> theme.colors.gray100};
    font-size:20px;
    font-weight:400;
  }

  


`;


