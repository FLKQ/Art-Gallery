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

import {useState, useEffect} from 'react';

const Gallery = () => {
    return (
        <>
            <GallerySection>
                    <GalleryContainer>                        
                                <GalleryTitle>Explore Our Gallery</GalleryTitle>
                              
                                <GallerySubTitle>From a visitor or community perspective,the purpose can also depend on one's point of view.</GallerySubTitle>             
                            <CardHolder>
                                <div className = "FirstImg">
                                <GalleryImg src={Face} style={{width: '450px', height: '410px'}}/>
                                </div>
                                <div className = "SecondImg">
                                <GalleryImg src={AwesomeDrawing} style={{width: '450px', height: '550px'}}/>
                                </div>
                                <div className = "ThirdImg">
                                <GalleryImg src={UnrealLight} style={{width: '450px', height: '270px'}}/>
                                </div>
                                <div className = "FourthImg">
                                <GalleryImg src={OutOfWords} style={{width: '450px', height: '410px'}}/>
                                </div>
                                <div className = "FifthImg">
                                <GalleryImg src={Xxx} style={{width: '450px', height: '270px'}}/>
                                </div>
                                <div className = "SixthImg">
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
