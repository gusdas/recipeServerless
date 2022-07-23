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

import Banner from 'ui/organisms/Banner'
import { Large2Font } from 'assets/fonts'
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
                <Banner text='지금 가장\n인기있는 레시피에요' url='/recipe' />
            </Wrapper>
        </>
    )
}

export default Home
