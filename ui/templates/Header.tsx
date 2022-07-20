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

const Header = () => {
    const [isLogin, setIsLogin] = React.useState(false)
    return (
        <HeaderWrapper>
            <Link href='/autu/login' passHref>
                <Image src={logoImg.src} alt='logo' />
            </Link>

            {isLogin ? (
                <Wrapper
                    display='flex'
                    justify='center'
                    align='center'
                    margin='0 11px 0 0'>
                    <Icon alt='profileIcon' src={profileImg.src} />
                </Wrapper>
            ) : (
                <Typography text='로그인' type='Sub2' />
            )}
        </HeaderWrapper>
    )
}

export default Header
