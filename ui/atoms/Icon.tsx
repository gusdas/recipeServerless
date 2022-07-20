import React from 'react'
import styled from 'styled-components'

interface Props {
    src: string
    alt: string
}

const Icon = ({ src, alt }: Props) => {
    return <StyledIcon src={src} alt={alt} />
}

const StyledIcon = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
`
export default Icon
