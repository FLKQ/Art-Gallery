import React,{useRef, useEffect} from 'react';
import {FooterMenuHolder, FooterMenuItem, FooterMenuLink} from './Footer.elements';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {gsap, Power3} from 'gsap';

const FooterMenu = props => {

    let TitleAnimation = useRef(null);
    let ItemOneAnimation = useRef(null);
    let ItemTwoAnimation = useRef(null);
    let ItemThreeAnimation = useRef(null);
    let ItemFourAnimation = useRef(null);


    useEffect(() => {
        gsap.fromTo(TitleAnimation, {x: -50 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
            scrollTrigger: {trigger: TitleAnimation, start: 'top center+=150',toggleActions:'play none none none'}});
        gsap.fromTo(ItemOneAnimation, {x: -80 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
            scrollTrigger: {trigger: ItemOneAnimation, start: 'top center+=150',toggleActions:'play none none none'}});
        gsap.fromTo(ItemTwoAnimation, {x: -100 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0.1, ease: Power3.easeOut,
            scrollTrigger: {trigger: ItemTwoAnimation, start: 'top center+=200',toggleActions:'play none none none'}});
        gsap.fromTo(ItemThreeAnimation, {x: -100 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0.2, ease: Power3.easeOut,
                scrollTrigger: {trigger: ItemThreeAnimation, start: 'top center+=200',toggleActions:'play none none none'}});
        gsap.fromTo(ItemFourAnimation, {y: 100 , opacity: 0}, {y: 0, opacity: 1, duration: 2, delay: 0.3, ease: Power3.easeOut,
                    scrollTrigger: {trigger: ItemFourAnimation, start: 'top center+=250',toggleActions:'play none none none'}});

    },[]);




    return (
        <>
            <FooterMenuHolder>
                <FooterMenuItem style={{marginBottom: '20px'}}>
                    <FooterMenuLink to='/' style={{color: '#e3f88f'}} ref={el => {TitleAnimation = el}}>{props.title}</FooterMenuLink>
                </FooterMenuItem>
                <FooterMenuItem>
                    <FooterMenuLink to='/' ref={el => {ItemOneAnimation = el}}>{props.second}</FooterMenuLink>
                </FooterMenuItem>
                <FooterMenuItem>
                    <FooterMenuLink to='/' ref={el => {ItemTwoAnimation = el}}>{props.third}</FooterMenuLink>
                </FooterMenuItem>
                <FooterMenuItem>
                    <FooterMenuLink to='/' ref={el => {ItemThreeAnimation = el}}>{props.fourth}</FooterMenuLink>
                </FooterMenuItem>
                <FooterMenuItem>
                    <FooterMenuLink to='/' ref={el => {ItemFourAnimation = el}}>{props.fifth}</FooterMenuLink>
                </FooterMenuItem>
                

            </FooterMenuHolder>
            
        </>
    )
}

export default FooterMenu
