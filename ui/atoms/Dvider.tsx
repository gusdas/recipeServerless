import React from 'react'
import styled from 'styled-components'
import { Black5 } from 'assets/colorSet'

interface Props {
    mt?: string
}

const Dvider = ({ mt }: Props) => {
    return <StyledDivider mt={mt} />
}

interface StyledProps {
    mt?: string
}

const StyledDivider = styled.div<StyledProps>`
    width: 100%;
    height: 16px;
    background: ${Black5};
    margin-top: ${(props) => props.mt};
`

export default Dvider
