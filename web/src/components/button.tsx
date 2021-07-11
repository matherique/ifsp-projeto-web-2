import * as React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  width: 244px;
  height: 35px;
  padding: 5px;
  margin: 2px;
  border-radius: 4px;
  border: none;
  background: #ffffff;
  font-weight: bold;

  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16), 0px 2px 4px rgba(0, 0, 0, 0.12),
    0px 1px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.16), 0px 2px 4px rgba(0, 0, 0, 0.12),
      0px 1px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`

export default Button
