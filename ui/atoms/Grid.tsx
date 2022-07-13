import React, { Children } from 'react'
import styled from 'styled-components'

interface Props {
    children: React.ReactNode
}

const Grid = ({ children }: Props) => {
    return <StyledGrid>{children}</StyledGrid>
}

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
`
export default Grid
