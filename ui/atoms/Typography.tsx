import React from 'react'
import styled from 'styled-components'

interface Props {
    text?: string
    color?: string
    fontSize?: string
    margin?: string
    fontWeight?: string
    _onClick?: React.MouseEventHandler<HTMLElement>
    mt?: string
    w?: string
    align?: string
}

const Typography = ({
    text,
    color,
    fontSize,
    margin,
    fontWeight,
    _onClick,
    mt,
    w,
    align,
}: Props) => {
    return (
        <StyledTypography onClick={_onClick} color='red'>
            hihi
        </StyledTypography>
    )
}
interface styledProps {
    color?: string
}

const StyledTypography = styled.p<styledProps>`
    color: ${(props) => props.color};
`
export default Typography
