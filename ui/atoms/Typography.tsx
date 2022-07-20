import React from 'react'
import styled from 'styled-components'

interface Props {
    text?: string
    color?: string
    margin?: string
    _onClick?: React.MouseEventHandler<HTMLElement>
    mt?: string
    w?: string
    align?: string
    type: string
}

const Typography = ({
    text,
    color,
    margin,
    _onClick,
    mt,
    w,
    align,
    type,
}: Props) => {
    switch (type) {
        case 'Large1':
            return (
                <Large1Typo
                    color={color}
                    margin={margin}
                    mt={mt}
                    w={w}
                    align={align}
                    onClick={_onClick}>
                    {text}
                </Large1Typo>
            )
        case 'Large2':
            return (
                <Large2Typo
                    color={color}
                    margin={margin}
                    mt={mt}
                    w={w}
                    align={align}
                    onClick={_onClick}>
                    {text}
                </Large2Typo>
            )
        case 'Sub1':
            return (
                <Sub1Typo
                    color={color}
                    margin={margin}
                    mt={mt}
                    w={w}
                    align={align}
                    onClick={_onClick}>
                    {text}
                </Sub1Typo>
            )
        case 'Sub2':
            return (
                <Sub2Typo
                    color={color}
                    margin={margin}
                    mt={mt}
                    w={w}
                    align={align}
                    onClick={_onClick}>
                    {text}
                </Sub2Typo>
            )
        case 'Body1':
            return (
                <Body1Typo
                    color={color}
                    margin={margin}
                    mt={mt}
                    w={w}
                    align={align}
                    onClick={_onClick}>
                    {text}
                </Body1Typo>
            )
        case 'Body2':
            return (
                <Body2Typo
                    color={color}
                    margin={margin}
                    mt={mt}
                    w={w}
                    align={align}
                    onClick={_onClick}>
                    {text}
                </Body2Typo>
            )
        case 'Body3':
            return (
                <Body3Typo
                    color={color}
                    margin={margin}
                    mt={mt}
                    w={w}
                    align={align}
                    onClick={_onClick}>
                    {text}
                </Body3Typo>
            )
        case 'Caption1':
            return (
                <Caption1Typo
                    color={color}
                    margin={margin}
                    mt={mt}
                    w={w}
                    align={align}
                    onClick={_onClick}>
                    {text}
                </Caption1Typo>
            )
        case 'Caption2':
            return (
                <Caption2Typo
                    color={color}
                    margin={margin}
                    mt={mt}
                    w={w}
                    align={align}
                    onClick={_onClick}>
                    {text}
                </Caption2Typo>
            )
        case 'Button':
            return (
                <ButtonTypo
                    color={color}
                    margin={margin}
                    mt={mt}
                    w={w}
                    align={align}
                    onClick={_onClick}>
                    {text}
                </ButtonTypo>
            )
        case 'Tag':
            return (
                <TagTypo
                    color={color}
                    margin={margin}
                    mt={mt}
                    w={w}
                    align={align}
                    onClick={_onClick}>
                    {text}
                </TagTypo>
            )
        case 'Social':
            return (
                <SocialTypo
                    color={color}
                    margin={margin}
                    mt={mt}
                    w={w}
                    align={align}
                    onClick={_onClick}>
                    {text}
                </SocialTypo>
            )

        default:
            return (
                <Body1Typo
                    color={color}
                    margin={margin}
                    mt={mt}
                    w={w}
                    align={align}
                    onClick={_onClick}>
                    {text}
                </Body1Typo>
            )
    }
}
interface styledProps {
    color?: string
    margin?: string
    mt?: string
    w?: string
    align?: string
}

const StyledTypography = styled.p<styledProps>`
    color: ${(props) => props.color};
    margin-top: ${(props) => props.mt};
    margin: ${(props) => props.margin};
    width: ${(props) => props.w};
    text-align: ${(props) => props.align};
`

const Large1Typo = styled(StyledTypography)`
    font-size: 24pt;
    font-weight: 600;
    line-height: 120%;
`

const Large2Typo = styled(StyledTypography)`
    font-size: 20pt;
    font-weight: 600;
    line-height: 120%;
`
const Sub1Typo = styled(StyledTypography)`
    font-size: 16pt;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 0.1px;
`
const Sub2Typo = styled(StyledTypography)`
    font-size: 14pt;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 0.1px;
`
const Body1Typo = styled(StyledTypography)`
    font-size: 20pt;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.15px;
`
const Body2Typo = styled(StyledTypography)`
    font-size: 16pt;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.15px;
`
const Body3Typo = styled(StyledTypography)`
    font-size: 14pt;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.25px;
`
const Caption1Typo = styled(StyledTypography)`
    font-size: 12pt;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: 0.4px;
`
const Caption2Typo = styled(StyledTypography)`
    font-size: 12pt;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0.25px;
`
const ButtonTypo = styled(StyledTypography)`
    font-size: 14pt;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: 1px;
`
const TagTypo = styled(StyledTypography)`
    font-size: 12pt;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 0.4px;
`
const SocialTypo = styled(StyledTypography)`
    font-size: 14pt;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: 0.15px;
`
export default Typography
