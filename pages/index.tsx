import type { NextPage } from 'next'
import Head from 'next/head'

import styles from 'styles/Home.module.css'

import Button from 'ui/atoms/Button'
import Grid from 'ui/atoms/Grid'

import Image from 'ui/atoms/Image'
import Input from 'ui/atoms/Input'
import Typography from 'ui/atoms/Typography'
import Wrapper from 'ui/atoms/Wrapper'
const Home: NextPage = () => {
    return (
        <Wrapper>
            home
            <Button />
            <Image
                alt='hi'
                src='https://i.pinimg.com/564x/b9/cd/cc/b9cdccde10d5a581874f58bb7e914962.jpg'
            />
            <Input />
            <Typography
                _onClick={() => {
                    console.log('hi')
                }}
            />
        </Wrapper>
    )
}

export default Home
