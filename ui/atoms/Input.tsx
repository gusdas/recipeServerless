import React from 'react'
import styled from 'styled-components'

type Props = {}

const Input = (props: Props) => {
    return (
        <InputWrapper>
            <StyledInput />
        </InputWrapper>
    )
}

interface styledProps {
    color?: string
}

const InputWrapper = styled.div<styledProps>`
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
    box-sizing: border-box;
    border-bottom: 1px solid black;
    margin-top: 16px;
`

const StyledInput = styled.input`
    width: 100%;
    border: none;
    background: none;
`

export default Input
