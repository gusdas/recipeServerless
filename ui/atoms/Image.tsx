import React from 'react'
import styled, { css } from 'styled-components'
import ImageTag from 'next/image'

interface Props {
    width?: string
    height?: string
    src?: string
    alt?: string
    radius?: string
    margin?: string
}

const Image = ({
    width = '100px',
    height = '100px',
    src = 'https://i.pinimg.com/564x/b9/cd/cc/b9cdccde10d5a581874f58bb7e914962.jpg',
    alt,
    radius,
    margin,
}: Props) => {
    return (
        <ImgWrapper margin={margin} radius={radius}>
            <ImageTag width={width} height={height} src={src} alt={alt} />
        </ImgWrapper>
    )
}

interface wrapperProps {
    margin?: string
    radius?: string
}

const ImgWrapper = styled.div<wrapperProps>`
    margin: ${(props) => props.margin};

    img {
        border-radius: ${(props) => props.radius};
    }
    &:hover {
        cursor: pointer;
    }
`

export default Image
