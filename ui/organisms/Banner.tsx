import React from 'react'
import Typography from 'ui/atoms/Typography'
import Wrapper from 'ui/atoms/Wrapper'
import { Caption1Font, Large2Font } from 'assets/fonts'
import Link from 'next/link'

interface Props {
    text: string
    url: string
}

const Banner = ({ text, url }: Props) => {
    return (
        <Wrapper>
            <Wrapper
                display='flex'
                justify='space-between'
                align='end'
                margin='1.2rem 0px'>
                <Typography font={Large2Font}>{text}</Typography>
                <Link href={url}>
                    <a>
                        <Typography font={Caption1Font}>더보기</Typography>
                    </a>
                </Link>
            </Wrapper>
        </Wrapper>
    )
}
export default Banner
