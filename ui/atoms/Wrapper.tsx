import React from 'react'
import styled from 'styled-components'

interface Props {
    children: React.ReactNode
    padding?: string
    margin?: string
    display?: string
    align?: string
    direction?: string
    justify?: string
    disabled?: string
    background?: string
    mt?: string
    _onClick?: React.MouseEventHandler<HTMLElement>
}

const Wrapper = ({
    children,
    padding,
    margin,
    display,
    align,
    direction,
    justify,
    disabled,
    background,
    mt,
    _onClick,
}: Props) => {
    return (
        <StyledWrapper
            onClick={_onClick}
            padding={padding}
            margin={margin}
            display={display}
            align={align}
            direction={direction}
            justify={justify}
            disabled={disabled}
            background={background}
            mt={mt}>
            {children}
        </StyledWrapper>
    )
}
interface styledProps {
    padding?: string
    margin?: string
    display?: string
    align?: string
    direction?: string
    justify?: string
    disabled?: string
    background?: string
    mt?: string
}
const StyledWrapper = styled.div<styledProps>`
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    display: ${(props) => props.display};
    flex-direction: ${(props) => props.direction};
    justify-content: ${(props) => props.justify};
    align-items: ${(props) => props.align};
    background: ${(props) => props.background};

    margin-top: ${(props) => props.mt};
`
export default Wrapper
