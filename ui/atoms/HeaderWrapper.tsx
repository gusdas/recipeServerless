import React from 'react'
import styled from 'styled-components'

interface Props {
    children: React.ReactNode
}

const HeaderWrapper = ({ children }: Props) => {
    return <StyledWrapper>{children}</StyledWrapper>
}

const StyledWrapper = styled.div`
    padding: 24px 16px 16px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 72px;
    background: white;
    box-sizing: border-box;
    /* z-index: 100;
    position: fixed; */
`

export default HeaderWrapper
