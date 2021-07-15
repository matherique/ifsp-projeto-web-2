import * as React from 'react'
import styled from 'styled-components'

type StyledInputProps = {
  error?: boolean
}

export const StyledInput = styled.input<StyledInputProps>`
  width: 244px;
  height: 35px;
  margin: 2px;
  padding: 5px;
  border-radius: 4px;
  border: ${props =>
    props.error ? '2px solid var(--red)' : '1px solid var(--gray)'};

  &:focus {
    outline: none;
    border: 2px solid green;
  }
`

const Container = styled.div<{ error?: boolean }>`
  display: flex;
  flex-direction: column;

  & > small {
    color: var(--red);
    padding: 0px 4px;
    font-weight: bold;
  }

  & > span {
    font-size: 12px;
    padding: 0px 4px;
    color: ${props => (!!props.error ? 'var(--red)' : 'var(--gray)')};
  }
`

type InputProps = {
  error?: boolean
  errorMessage?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error, errorMessage, ...props }: InputProps,
  ref
) => {
  return (
    <Container error={!!error}>
      <span>{props.placeholder}</span>
      <StyledInput
        error={!!error}
        type={props.type}
        {...props}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder=""
        ref={ref}
      />
      {error ? <small>{errorMessage || ''}</small> : null}
    </Container>
  )
}

export default React.forwardRef(Input)
