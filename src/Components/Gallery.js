import React from 'react'
import {GallerySection, GalleryContainer,
    GalleryTitle, GallerySubTitle,CardHolder, ButtonHolder, ExploreMoreButton, GalleryImg} from './Gallery.elements';
import {Button} from '../GlobalStyle';
import './HeaderElements.css';
import Face from '../Images/GalleryFirst.jpg';
import AwesomeDrawing from '../Images/GallerySecond.jpg';
import UnrealLight from '../Images/GalleryThird.jpg';
import OutOfWords from '../Images/GalleryFourth.jpg';
import Xxx from '../Images/GalleryFifth.jpg';
import Girl from '../Images/GallerySixth.jpg';

import {useState, useEffect, useRef} from 'react';
import {gsap, Power3} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

const Gallery = () => {

    gsap.registerPlugin(ScrollTrigger);

    let TitleAnimation = useRef(null);
    let SubtitleAnimation = useRef(null);
    let FirstImageAnimation = useRef(null);
    let ButtonAnimation = useRef(null);
    let SecondImageAnimation = useRef(null);
    let ThirdImageAnimation = useRef(null);
    let FourthImageAnimation = useRef(null);
    let FifthImageAnimation = useRef(null);
    let SixthImageAnimation = useRef(null);

    useEffect(() => {
        gsap.fromTo(TitleAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
            scrollTrigger: {trigger: TitleAnimation, start: 'top center+=100',toggleActions:'play none none none'}});
        gsap.fromTo(SubtitleAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 2,delay: 0, ease: Power3.easeOut,
            scrollTrigger: {trigger: SubtitleAnimation, start: 'top center+=100',toggleActions:'play none none none'}});
        gsap.fromTo(FirstImageAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 2,delay: 0, ease: Power3.easeOut,
            scrollTrigger: {trigger: FirstImageAnimation, start: 'top top+=400',toggleActions:'play none none none'}});
        gsap.fromTo(SecondImageAnimation, {y: -40 , opacity: 0}, {y: 0, opacity: 1, duration: 2,delay: 1, ease: Power3.easeOut,
            scrollTrigger: {trigger: SecondImageAnimation, start: 'top top+=400',toggleActions:'play none none none'}});
        gsap.fromTo(ThirdImageAnimation, {x: 40 , opacity: 0}, {x: 0, opacity: 1, duration: 2,delay: 0.6, ease: Power3.easeOut,
            scrollTrigger: {trigger: ThirdImageAnimation, start: 'top top+=400',toggleActions:'play none none none'}});
        gsap.fromTo(FourthImageAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 2,delay: 0.4, ease: Power3.easeOut,
            scrollTrigger: {trigger: FourthImageAnimation, start: 'top center+=300',toggleActions:'play none none none'}});
        gsap.fromTo(FifthImageAnimation, {y: 40 , opacity: 0}, {y: 0, opacity: 1, duration: 2,delay: 0.8, ease: Power3.easeOut,
            scrollTrigger: {trigger: FifthImageAnimation, start: 'top center+=500',toggleActions:'play none none none'}});
        gsap.fromTo(SixthImageAnimation, {x: 40 , opacity: 0}, {x: 0, opacity: 1, duration: 2,delay: 0.2, ease: Power3.easeOut,
            scrollTrigger: {trigger: SixthImageAnimation, start: 'top center+=200',toggleActions:'play none none none'}});
        gsap.fromTo(ButtonAnimation, {y: 40, opacity: 0}, {y: 0, opacity: 1, duration: 1, delay: 0 , ease: Power3.easeOut,
            scrollTrigger: {trigger: ButtonAnimation, start: 'top bottom',toggleActions:'play none none none'}})
    }, [])


    return (
        <>
            <GallerySection>
                    <GalleryContainer>                        
                                <GalleryTitle ref={el => {TitleAnimation = el}}>Explore Our Gallery</GalleryTitle>
                              
                                <GallerySubTitle ref={el => {SubtitleAnimation = el}}>From a visitor or community perspective,the purpose can also depend on one's point of view.</GallerySubTitle>             
                            <CardHolder>
                                <div className = "FirstImg" ref={el => {FirstImageAnimation = el}}>
                                <GalleryImg src={Face} style={{ height: '410px'}}/>
                                </div>
                                <div className = "SecondImg" ref={el => {SecondImageAnimation = el}}>
                                <GalleryImg src={AwesomeDrawing} style={{ height: '550px'}}/>
                                </div>
                                <div className = "ThirdImg" ref={el => {ThirdImageAnimation = el}}>
                                <GalleryImg src={UnrealLight} style={{ height: '270px'}}/>
                                </div>
                                <div className = "FourthImg" ref={el => {FourthImageAnimation = el}}>
                                <GalleryImg src={OutOfWords} style={{ height: '410px'}}/>
                                </div>
                                <div className = "FifthImg" ref={el => {FifthImageAnimation = el}}>
                                <GalleryImg src={Xxx} style={{ height: '270px'}}/>
                                </div>
                                <div className = "SixthImg" ref={el => {SixthImageAnimation = el}}>
                                <GalleryImg src={Girl} style={{ height: '550px'}}/>
                                </div>
                            </CardHolder>
                            <ButtonHolder>
                                <ExploreMoreButton style={{fontFamily: 'duera'}} ref={el => {ButtonAnimation = el}}>EXPLORE MORE</ExploreMoreButton>
                            </ButtonHolder>
                    </GalleryContainer>
            </GallerySection>
            
        </>
    )
}

export default Gallery
