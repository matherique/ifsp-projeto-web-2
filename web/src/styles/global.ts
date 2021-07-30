import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 14px;
    --green: #1BB55C;
    --gray: #979797;
    --red: #ff5555;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  
  body[data-theme='light'] {
    --color-text: #000000;
    --color-background: hsl(0, 0%, 98%);
    --black: hsl(200, 19%, 18%)
  }
  
  body[data-theme='dark'] {
    --color-text: #ffffff;
    --color-background: hsl(0, 20%, 2%);
    --black: hsl(200, 19%, 82%)
  }
  
  body {
    transition: background 0.3s ease;
    background-color: var(--color-background);
    color: var(--color-text);
  }
`
