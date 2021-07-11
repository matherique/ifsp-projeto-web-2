import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  gap: 5px;
  cursor: pointer;
  align-items: center;
  margin: 5px 0px;
`

type CheckboxProps = {
  label?: string
  name: string
} & React.InputHTMLAttributes<HTMLInputElement>

const StyledCheckbox = styled.input`
  cursor: pointer;
`

type LabelProps = {
  disabled?: boolean
}

const Label = styled.label<LabelProps>`
  color: ${props => (props.disabled ? 'var(--gray)' : 'var(--dark2)')};
`

export default function Checkbox({
  label,
  name,
  disabled,
  ...props
}: CheckboxProps) {
  return (
    <Container>
      <StyledCheckbox
        {...props}
        id={name}
        disabled={disabled}
        type="checkbox"
      />
      <Label disabled={disabled} htmlFor={name}>
        {label}
      </Label>
    </Container>
  )
}
