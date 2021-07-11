import * as React from 'react'

import styled from 'styled-components'

type StyledLogoProps = {
  width?: string
  height?: string
}

const StyledLogo = styled.img<StyledLogoProps>`
  width: ${props => (props.width ? props.width : '205px')};
  height: ${props => (props.height ? props.height : '200px')};
`

type LogoProps = {
  width?: string
  height?: string
} & React.ImgHTMLAttributes<HTMLImageElement>

export default function Logo(props: LogoProps) {
  return <StyledLogo {...props} src="/logo.svg" />
}
