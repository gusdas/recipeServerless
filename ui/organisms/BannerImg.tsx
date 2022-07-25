import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import BookmarkIcon from '@mui/icons-material/Bookmark'

import { Black100, Black40 } from 'assets/colorSet'

import styled from 'styled-components'

import Wrapper from 'ui/atoms/Wrapper'

interface Props {
    width?: string
    height?: string
    id?: string
    title?: string
    cookTime?: string
    isBookmark?: boolean
    url: string
}

const BannerImg = ({
    width,
    height,
    id,
    title,
    cookTime,
    isBookmark,
    url,
}: Props) => {
    const router = useRouter()
    const [bookmark, setBookmark] = React.useState(isBookmark)
    const style = {
        color: bookmark ? 'black' : 'white',
        position: 'absolute',
        bottom: '5px',
        right: '5px',
    }
    return (
        <MainBannerImgWrapper width={width} height={height}>
            <ImgWrapper width={width} height={height}>
                <Link href={url}>
                    <a>
                        <Img src={url} alt='음식사진' />
                    </a>
                </Link>
                <StyleBookIcon
                    onClick={() => {
                        setBookmark(!bookmark)
                    }}>
                    <BookmarkIcon fontSize='small' sx={style} />
                </StyleBookIcon>
            </ImgWrapper>
            <MainBannerTitle>{title}</MainBannerTitle>
            <Wrapper display='flex'>
                <MainBannerTime color={Black100}>{cookTime}</MainBannerTime>
                {router.pathname === '/recipe' && (
                    <MainBannerTime color={Black40} margin='0px 0px 0px 10px'>
                        100% 일치
                    </MainBannerTime>
                )}
            </Wrapper>
        </MainBannerImgWrapper>
    )
}
interface StyledProps {
    width?: string
    height?: string
    id?: string
    title?: string
    cookTime?: string
    isBookmark?: string
    margin?: string
}
const MainBannerImgWrapper = styled.div<StyledProps>`
    width: ${(props) => props.width};
`
const ImgWrapper = styled.div<StyledProps>`
    width: ${(props) => props.width};
    height: ${(props) => (props.height ? props.height : '130px')};
    object-fit: contain;
    position: relative;
    border-radius: 4px;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    border-radius: 4px;
`

const MainBannerTitle = styled.p`
    margin: 0.5rem 0px 0.2rem 0px;
    font-size: 14px;
    font-weight: bold;
`
const MainBannerTime = styled.p<StyledProps>`
    margin: 0.5rem 0px;
    font-size: 12px;
    color: ${(props) => props.color};
    margin: ${(props) => (props.margin ? props.margin : '0px')};
`

const StyleBookIcon = styled.div`
    cursor: pointer;
`

export default BannerImg
