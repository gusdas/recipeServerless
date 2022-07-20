import React from 'react'
import styled from 'styled-components'

import { Colar100 } from 'assets/colorSet'
interface Props {
    src?: string
    placeholder?: string
}

const Input = ({ src, placeholder }: Props) => {
    return (
        <InputWrapper>
            {src && <StyledIcon src={src} />}
            <StyledInput placeholder={placeholder} />
        </InputWrapper>
    )
}

interface styledProps {
    color?: string
}

const InputWrapper = styled.div<styledProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
    box-sizing: border-box;

    margin-top: 16px;
`
const StyledIcon = styled.img`
    width: 17px;
    padding: 17px;
    border-color: transparent;
    border-bottom: 1px solid darkgrey;

    &:focus {
        outline: none;
        border-bottom: 1px solid ${Colar100};
    }
`
const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    border-color: transparent;
    border-bottom: 1px solid darkgrey;

    &:focus {
        outline: none;
        border-bottom: 1px solid ${Colar100};
    }
`

export default Input
