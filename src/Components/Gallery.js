import React from 'react'
import {ExhibitionSection, ExhibitionContainer, NavigationHolder, NavigationMenu, NavigationItem, NavigationLinks,
    ExhibitionTitle, SubTitle,CardHolder, ButtonHolder, LoadMoreButton, GalleryImg} from './Gallery.elements';
import {Button} from '../GlobalStyle';
import './HeaderElements.css';
import Face from '../Images/nex.jpg';

import {useState, useEffect} from 'react';

const Gallery = () => {
    return (
        <>
            <ExhibitionSection>
                    <ExhibitionContainer>                        
                                <ExhibitionTitle>Explore Our Gallery</ExhibitionTitle>
                              
                                <SubTitle>From a visitor or community perspective,the purpose can also depend on one's point of view.</SubTitle>             
                            <CardHolder>
                                <div className = "FirstImg">
                                <GalleryImg src={Face} style={{width: '500px', height: '410px'}}/>
                                </div>
                                <div className = "SecondImg">
                                <GalleryImg src={Face} style={{width: '500px', height: '550px'}}/>
                                </div>
                                <div className = "ThirdImg">
                                <GalleryImg src={Face} style={{width: '500px', height: '270px'}}/>
                                </div>
                                <div className = "FourthImg">
                                <GalleryImg src={Face} style={{width: '500px', height: '410px'}}/>
                                </div>
                                <div className = "FifthImg">
                                <GalleryImg src={Face} style={{width: '500px', height: '270px'}}/>
                                </div>
                                <div className = "SixthImg">
                                <GalleryImg src={Face} style={{width: '500px', height: '550px'}}/>
                                </div>
                            </CardHolder>
                            <ButtonHolder>
                                <LoadMoreButton style={{fontFamily: 'duera'}}>EXPLORE MORE</LoadMoreButton>
                            </ButtonHolder>
                    </ExhibitionContainer>
            </ExhibitionSection>
            
        </>
    )
}

export default Gallery
