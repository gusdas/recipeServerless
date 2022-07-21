import type { NextPage } from 'next'
import Head from 'next/head'

import styles from 'styles/Home.module.css'

import Button from 'ui/atoms/Button'
import Grid from 'ui/atoms/Grid'
import Image from 'ui/atoms/Image'
import Input from 'ui/atoms/Input'
import Typography from 'ui/atoms/Typography'
import Wrapper from 'ui/atoms/Wrapper'

import Header from 'ui/templates/Header'
import search from 'assets/imgs/search.png'

const Home: NextPage = () => {
    return (
        <Wrapper>
            <Header />

            <Input
                iconSrc={search.src}
                placeholder='오늘은 무엇을 만들어 볼까요?'
            />
            <Wrapper margin='50px'>
                <Button>hi</Button>
            </Wrapper>
        </Wrapper>
    )
}

export default Home
