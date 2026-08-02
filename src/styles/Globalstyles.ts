import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
margin:0;
padding:0;
box-sizing:border-box;
}

html{
scroll-behavior:smooth;
}

body{
font-family:Inter,sans-serif;
background:${({theme})=>theme.colors.background};
color:${({theme})=>theme.colors.text};
}

button{
cursor:pointer;
font:inherit;
}

input,textarea,select{
font:inherit;
}

a{
text-decoration:none;
color:inherit;
}

img{
max-width:100%;
display:block;
}

`;