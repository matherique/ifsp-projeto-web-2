import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 14px;
    /* --black: #000000; */
    /* --dark-white: hsl(0°, 0%, 98%); */
    /* --white: #FFFFFF; */
    --black: #ffffff;
    --white: #000000;
    --dark-white: hsl(0, 0%, 2%);
    --green: #1BB55C;
    --black2: #263238;
    --gray: #979797;
    --red: #ff5555;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: var(--dark-white);
    color: var(--black);
  }
`
