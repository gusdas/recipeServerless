import React from 'react'
import styled from 'styled-components'
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
    radius = '50%',
    margin = '50px',
}: Props) => {
    return (
        <ImgWrapper
            width={width}
            height={height}
            margin={margin}
            radius={radius}>
            <ImageTag width={width} height={height} src={src} alt={alt} />
        </ImgWrapper>
    )
}

interface wrapperProps {
    width?: string
    height?: string
    margin?: string
    radius?: string
}

const ImgWrapper = styled.div<wrapperProps>`
    width: ${(props) => props.width};
    height: ${(props) => (props.height ? props.height : '120px')};
    margin: ${(props) => props.margin};
    border-radius: ${(props) => props.radius};
    overflow: hidden;
`

export default Image
