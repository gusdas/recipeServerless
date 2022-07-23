import React from 'react'
import styled from 'styled-components'
import Wrapper from 'ui/atoms/Wrapper'

interface Props {
    width?: string
    height?: string
}

const BannerImg = ({ width, height }: Props) => {
    return (
        <Wrapper>
            <ImgWrapper width={width}></ImgWrapper>
        </Wrapper>
    )
}
interface StyledProps {
    width?: string
    height?: string
}
const ImgWrapper = styled.div`
    height: ${(props) => (props.height ? props.height : '130px')};
    object-fit: contain;
    position: relative;
    border-radius: 4px;
`
export default BannerImg
