import React, {useRef, useEffect} from 'react'
import {Button} from '../GlobalStyle';
import {Head, HeaderContainer, HeaderTitle, HeaderButtonHolder, HeaderButton,HeaderTitleBottom,BottomCircle, BottomCircleInner, LeftToTitleImage
, RightToTitleImage, LeftCenterImage, RightCenterImage, TopCircle, TopCircleInner, TopBorderOuter, TopBorderInner,TopBorderOuterBox,TopBorderInnerBox,BottomBorder } from './Header.elements';
import Circle from './Сircle';
import {gsap, Power3} from 'gsap';

const Header = () => {

    let TitleTopAnimation = useRef(null);
    let TitleBottomAnimation = useRef(null);
    let ButtonAnimation = useRef(null);
    let LeftCenterImageAnimation = useRef(null);
    let LeftToTitleImageAnimation = useRef(null);
    let RightCenterImageAnimation = useRef(null);
    let RightToTitleImageAnimation = useRef(null);
    let TopCircleAnimation = useRef(null);
    let BottomCircleAnimation = useRef(null);

    useEffect(() => {

        gsap.fromTo(TitleTopAnimation, {y: -20 , opacity: 0}, {y: 0, opacity: 1, duration: 2.5 , delay: 1.5, ease: Power3.easeOut})
        gsap.fromTo(TitleBottomAnimation, {y: 20 , opacity: 0}, {y: 0, opacity: 1, duration: 2.5 , delay: 1.5, ease: Power3.easeOut})
        gsap.fromTo(ButtonAnimation, {scaleX: 2, opacity: 0}, {scaleX: 1, opacity: 1, duration: 2.1, delay: 2.5 , ease: Power3.easeOut})
        gsap.fromTo(LeftCenterImageAnimation, {x: -20, opacity: 0}, {x: 0, opacity: 1, duration: 0.5, delay: 4 , ease: Power3.easeOut})
        gsap.fromTo(RightCenterImageAnimation, {x: 20, opacity: 0}, {x: 0, opacity: 1, duration: 0.5, delay: 4.2 , ease: Power3.easeOut})
        gsap.fromTo(LeftToTitleImageAnimation, {x: 20, opacity: 0}, {x: 0, opacity: 1, duration: 0.5, delay: 4.4 , ease: Power3.easeOut})
        gsap.fromTo(RightToTitleImageAnimation, {x: -20, opacity: 0}, {x: 0, opacity: 1, duration: 0.5, delay: 4.6 , ease: Power3.easeOut})
        gsap.fromTo(TopCircleAnimation, {y: -20, opacity: 0}, {y: 0, opacity: 1, duration: 0.5, delay: 4.6 , ease: Power3.easeOut})
        gsap.fromTo(BottomCircleAnimation, {x: -20, opacity: 0}, {x: 0, opacity: 1, duration: 0.5, delay: 4.8 , ease: Power3.easeOut})

    }, [])

    return (
        <>
            <Head>
                <HeaderContainer>
                    <HeaderTitle ref={el => {TitleTopAnimation = el}}>ART </HeaderTitle>
                    <HeaderTitleBottom ref={el => {TitleBottomAnimation = el}}>GALLERY</HeaderTitleBottom>
                    <BottomCircle ref={el => {BottomCircleAnimation = el}}/>
                    <BottomCircleInner/>
                    <LeftToTitleImage ref={el => {LeftToTitleImageAnimation = el}}/>
                    <RightToTitleImage ref={el => {RightToTitleImageAnimation = el}}/>
                    <LeftCenterImage ref={el => {LeftCenterImageAnimation = el}}/>
                    <RightCenterImage ref={el => {RightCenterImageAnimation = el}}/>
                    <TopCircle ref={el => {TopCircleAnimation = el}}/>
                    <TopCircleInner/>
                    <TopBorderOuter/>
                    <TopBorderInner/>
                    <TopBorderOuterBox />
                    <TopBorderInnerBox/>
                    <Circle/>
                    <BottomBorder/>
                    <HeaderButtonHolder>
                        <HeaderButton style={{fontFamily: 'duera'}} ref={el => {ButtonAnimation = el}}>EXHIBITIONS</HeaderButton>
                    </HeaderButtonHolder>
                </HeaderContainer>
            </Head>
            
        </>
    )
}

export default Header
