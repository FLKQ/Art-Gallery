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

const Gallery = () => {
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
        gsap.fromTo(TitleAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0.5, ease: Power3.easeOut});
        gsap.fromTo(SubtitleAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 2,delay: 1, ease: Power3.easeOut});
    }, [])


    return (
        <>
            <GallerySection>
                    <GalleryContainer>                        
                                <GalleryTitle ref={el => {TitleAnimation = el}}>Explore Our Gallery</GalleryTitle>
                              
                                <GallerySubTitle ref={el => {SubtitleAnimation = el}}>From a visitor or community perspective,the purpose can also depend on one's point of view.</GallerySubTitle>             
                            <CardHolder>
                                <div className = "FirstImg" ref={el => {FirstImageAnimation = el}}>
                                <GalleryImg src={Face} style={{width: '450px', height: '410px'}}/>
                                </div>
                                <div className = "SecondImg" ref={el => {SecondImageAnimation = el}}>
                                <GalleryImg src={AwesomeDrawing} style={{width: '450px', height: '550px'}}/>
                                </div>
                                <div className = "ThirdImg" ref={el => {ThirdImageAnimation = el}}>
                                <GalleryImg src={UnrealLight} style={{width: '450px', height: '270px'}}/>
                                </div>
                                <div className = "FourthImg" ref={el => {FourthImageAnimation = el}}>
                                <GalleryImg src={OutOfWords} style={{width: '450px', height: '410px'}}/>
                                </div>
                                <div className = "FifthImg" ref={el => {FifthImageAnimation = el}}>
                                <GalleryImg src={Xxx} style={{width: '450px', height: '270px'}}/>
                                </div>
                                <div className = "SixthImg" ref={el => {SixthImageAnimation = el}}>
                                <GalleryImg src={Girl} style={{width: '450px', height: '550px'}}/>
                                </div>
                            </CardHolder>
                            <ButtonHolder>
                                <ExploreMoreButton style={{fontFamily: 'duera'}}>EXPLORE MORE</ExploreMoreButton>
                            </ButtonHolder>
                    </GalleryContainer>
            </GallerySection>
            
        </>
    )
}

export default Gallery
