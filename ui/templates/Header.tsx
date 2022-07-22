import React from 'react'
import Link from 'next/link'

import HeaderWrapper from 'ui/atoms/HeaderWrapper'
import Wrapper from 'ui/atoms/Wrapper'
import Typography from 'ui/atoms/Typography'
import Icon from 'ui/atoms/Icon'
import Image from 'ui/atoms/Image'

import logoImg from 'assets/imgs/logo.png'
import alarmImg from 'assets/imgs/alarm.png'
import profileImg from 'assets/imgs/profile.png'
import { Sub2Font } from 'assets/fonts'

const Header = () => {
    const [isLogin, setIsLogin] = React.useState(false)
    return (
        <HeaderWrapper>
            <Link href='/' passHref>
                <a>
                    <Image
                        width='75px'
                        height='12px'
                        src={logoImg.src}
                        alt='logo'
                    />
                </a>
            </Link>

            {isLogin ? (
                <Wrapper
                    display='flex'
                    justify='center'
                    align='center'
                    margin='0 11px 0 0'>
                    <Icon
                        alt='alarmIcon'
                        src={alarmImg.src}
                        margin='0 11px 0 0'
                    />
                    <Icon alt='profileIcon' src={profileImg.src} />
                </Wrapper>
            ) : (
                <Link href='/auth/login' passHref>
                    <a>
                        <Typography font={Sub2Font}>로그인</Typography>
                    </a>
                </Link>
            )}
        </HeaderWrapper>
    )
}

export default Header
