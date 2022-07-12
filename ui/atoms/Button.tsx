import React from 'react'
import styled from 'styled-components'
type Props = {}

const Button = (props: Props) => {
    return <StyledButton color='blue'>Button</StyledButton>
}

interface styledProps {
    color?: string
}
const StyledButton = styled.div<styledProps>`
    color: ${(props) => props.color};
`
export default Button
