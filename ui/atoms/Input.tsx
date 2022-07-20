import React from 'react'
import styled from 'styled-components'

import { Colar100 } from 'assets/colorSet'
interface Props {
    iconSrc?: string
    placeholder?: string
}

const Input = ({ iconSrc, placeholder }: Props) => {
    const [active] = React.useState()
    return (
        <InputWrapper active={active}>
            {iconSrc && <StyledIcon src={iconSrc} />}
            <StyledInput placeholder={placeholder} active={active} />
        </InputWrapper>
    )
}

interface styledProps {
    color?: string
    active?: string
}

const InputWrapper = styled.div<styledProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
    box-sizing: border-box;

    margin-top: 16px;

    border-color: transparent;
    border-bottom: 1px solid darkgrey;
    &:focus-within {
        outline: none;
        border-bottom: 1px solid ${Colar100};
    }
`
const StyledIcon = styled.img`
    height: 17px;
    width: 17px;
`
const StyledInput = styled.input<styledProps>`
    width: 100%;
    padding: 10px;
    outline: none;

    border: none;
`

export default Input
