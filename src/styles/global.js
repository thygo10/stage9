import { createGlobalStyle } from "styled-components";


export default  createGlobalStyle`

*{
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}

body{
  background: ${({theme}) => theme.colors.background700};
  color: ${({theme})=> theme.colors.white};
  //font-family: 'Poppins', sans-serif;
  font-family: 'Roboto Slab', serif;

  -webkit-font-smoothing: antialiased;
}

a{
  text-decoration: none;
}

button, a{
  cursor: pointer;
  transition: filter 0.2s
}
button:hover, a:hover{
  filter: brightness(0.9)
}


`