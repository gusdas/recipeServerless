import React, { Children } from 'react'
import styled from 'styled-components'

interface Props {
    children: React.ReactNode
}

const Grid = ({ children }: Props) => {
    return <StyledGrid>{children}</StyledGrid>
}

interface styledProps {
    color?: string
}
const StyledGrid = styled.div<styledProps>`
    display: flex;
`
export default Grid
