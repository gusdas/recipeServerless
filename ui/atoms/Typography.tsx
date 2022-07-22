import React from 'react'
import styled from 'styled-components'
import { Body1Font } from 'assets/fonts'
interface Props {
    children: string
    color?: string
    margin?: string
    _onClick?: React.MouseEventHandler<HTMLElement>
    mt?: string
    w?: string
    align?: string
    font?: string
}

const Typography = ({
    children,
    color,
    margin,
    _onClick,
    mt,
    w,
    align,
    font = Body1Font,
}: Props) => {
    return (
        <div>
            {children.split('\\n').map((v) => (
                <StyledTypography
                    color={color}
                    margin={margin}
                    mt={mt}
                    w={w}
                    align={align}
                    onClick={_onClick}
                    font={font}>
                    {v}
                </StyledTypography>
            ))}
        </div>
    )
}

interface styledProps {
    color?: string
    margin?: string
    mt?: string
    w?: string
    align?: string
    font?: string
}

const StyledTypography = styled.p<styledProps>`
    color: ${(props) => props.color};
    margin-top: ${(props) => props.mt};
    margin: ${(props) => props.margin};
    width: ${(props) => props.w};
    text-align: ${(props) => props.align};

    ${(props) => props.font}
`

export default Typography
