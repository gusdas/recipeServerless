import { Colar100 } from 'assets/colorSet'
import React from 'react'
import styled from 'styled-components'
import { Large1Font } from 'assets/fonts'

interface Props {
    children?: React.ReactNode | string
    color?: string
    bgColor?: string
    font?: string
    _onClick?: React.MouseEventHandler<HTMLElement>
}

const Button = ({
    bgColor = Colar100,
    color,
    font = Large1Font,
    _onClick,
    children,
}: Props) => {
    return (
        <StyledButton
            onClick={_onClick}
            font={font}
            color={color}
            bgColor={bgColor}>
            {children}
        </StyledButton>
    )
}

interface styledProps {
    color?: string
    bgColor?: string
    font?: string
}
const StyledButton = styled.div<styledProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 60px;

    color: ${(props) => props.color};
    background-color: ${(props) => props.bgColor};

    &:hover {
        cursor: pointer;
    }

    ${(props) => props.font}
`
export default Button
