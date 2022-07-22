import React from 'react'
import styled from 'styled-components'

interface Props {
    src: string
    alt: string
    margin?: string
}

const Icon = ({ src, alt, margin }: Props) => {
    return <StyledIcon src={src} alt={alt} margin={margin} />
}

interface StyledProps {
    margin?: string
}
const StyledIcon = styled.img<StyledProps>`
    width: 24px;
    height: 24px;
    border-radius: 50%;

    margin: ${(props) => props.margin};
`
export default Icon
