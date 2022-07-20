import type { NextPage } from 'next'
import Head from 'next/head'

import styles from 'styles/Home.module.css'

import Button from 'ui/atoms/Button'
import Grid from 'ui/atoms/Grid'
import Image from 'ui/atoms/Image'
import Input from 'ui/atoms/Input'
import Typography from 'ui/atoms/Typography'
import Wrapper from 'ui/atoms/Wrapper'

import Logo from 'assets/imgs/logo.png'
import search from 'assets/imgs/search.png'
const Home: NextPage = () => {
    return (
        <Wrapper>
            <Image
                width='24px'
                height='24px'
                radius='50%'
                alt='hi'
                src='https://i.pinimg.com/564x/b9/cd/cc/b9cdccde10d5a581874f58bb7e914962.jpg'
            />
            home
            <Button />
            <Input src={search} placeholder='오늘은 무엇을 만들어 볼까요?' />
            <Typography
                _onClick={() => {
                    console.log('hi')
                }}
            />
        </Wrapper>
    )
}

export default Home
