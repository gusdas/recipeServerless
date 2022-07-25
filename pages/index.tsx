import type { NextPage } from 'next'
import Head from 'next/head'

import styles from 'styles/Home.module.css'

import Button from 'ui/atoms/Button'
import Grid from 'ui/atoms/Grid'
import Image from 'ui/atoms/Image'
import Input from 'ui/atoms/Input'
import Typography from 'ui/atoms/Typography'
import Wrapper from 'ui/atoms/Wrapper'
import Dvider from 'ui/atoms/Dvider'
import Header from 'ui/templates/Header'
import search from 'assets/imgs/search.png'

import BannerText from 'ui/organisms/BannerText'
import BannerImg from 'ui/organisms/BannerImg'

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <Wrapper padding='16px'>
                <Input
                    iconSrc={search.src}
                    placeholder='오늘은 무엇을 만들어 볼까요?'
                />
            </Wrapper>
            <Dvider mt='24px' />
            <Wrapper padding='24px 16px'>
                <BannerText
                    text='지금 가장\n인기있는 레시피에요'
                    url='/recipe'
                />
                <BannerImg
                    url='https://i.pinimg.com/564x/0e/e6/e5/0ee6e5a0ee77d6599e7bfd43f46e6c10.jpg'
                    width='160px'
                    id='id'
                    cookTime='100분'
                    isBookmark={true}
                    title='제목'></BannerImg>
            </Wrapper>
        </>
    )
}

export default Home
