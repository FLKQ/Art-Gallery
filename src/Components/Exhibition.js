import React, {useRef} from 'react'
import {ExhibitionSection, ExhibitionContainer, NavigationHolder, NavigationMenu, NavigationItem, NavigationLinks,
    ExhibitionTitle, SubTitle,CardHolder, ButtonHolder, LoadMoreButton, FirstCard, SecondCard, ThirdCard, FourthCard, FifthCard, SixthCard} from './Exhibition.elements';
import {Button} from '../GlobalStyle';
import './HeaderElements.css';
import Card from './Card';
import Mask from '../Images/nex.jpg';
import Magazine from '../Images/second.jpg';
import Abstract from '../Images/third.jpg';
import Cube from '../Images/fourth.jpg';
import Aquarel from '../Images/fifth.jpg';
import Squares from '../Images/sixth.jpg';
import {useState, useEffect} from 'react';
import {FaCalendarAlt} from 'react-icons/fa';
import {gsap, Power3} from 'gsap';



const Exhibition = () => {

    let TitleAnimation = useRef(null);
    let SubtitleAnimation = useRef(null);
    let MenuAnimation = useRef(null);
    let FirstCardAnimation = useRef(null);
    let ButtonAnimation = useRef(null);
    let SecondCardAnimation = useRef(null);
    let ThirdCardAnimation = useRef(null);
    let FourthCardAnimation = useRef(null);
    let FifthCardAnimation = useRef(null);
    let SixthCardAnimation = useRef(null);

    useEffect(() => {
        gsap.fromTo(MenuAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 2,delay: 1.5, ease: Power3.easeOut});
        gsap.fromTo(TitleAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0.5, ease: Power3.easeOut});
        gsap.fromTo(SubtitleAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 2,delay: 1, ease: Power3.easeOut});
        gsap.fromTo(FirstCardAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 2,delay: 2, ease: Power3.easeOut});
        gsap.fromTo(ButtonAnimation, {scaleX: 1.5, opacity: 0}, {scaleX: 1, opacity: 1, duration: 2.1, delay: 3 , ease: Power3.easeOut})
        gsap.fromTo(SecondCardAnimation, {y: 40 , opacity: 0}, {y: 0, opacity: 1, duration: 2,delay: 3, ease: "elastic"});
        gsap.fromTo(ThirdCardAnimation, {x: 40 , opacity: 0}, {x: 0, opacity: 1, duration: 2,delay: 2, ease: Power3.easeOut});
        gsap.fromTo(FourthCardAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 2,delay: 2, ease: Power3.easeOut});
        gsap.fromTo(FifthCardAnimation, {y: 40 , opacity: 0}, {y: 0, opacity: 1, duration: 2,delay: 3, ease: "elastic"});
        gsap.fromTo(SixthCardAnimation, {x: 40 , opacity: 0}, {x: 0, opacity: 1, duration: 2,delay: 2, ease: Power3.easeOut});
        
    }, [])

    const [color, setColor] = useState(true);
    const [sort, setSort] = useState(false);

    const handleColor = () => setColor(!color);
    const handleSort = () => setSort(!sort);

    function handleBorder() {
        if(color){
            return <NavigationLinks to = '/' style={{borderBottom: '2px solid #b895fa'}} onClick={handleColor}>See All</NavigationLinks>
        }else
             return <NavigationLinks to='/' onClick={handleColor}>See All</NavigationLinks>
    }

    function handleImage(newDispay){
        if(handleSort){
            let x = document.getElementById("general");
            
        }else ;

    }

    return (
        <>
            <ExhibitionSection>
                    <ExhibitionContainer>
                            <NavigationHolder>
                                <ExhibitionTitle ref={el => {TitleAnimation = el}}>Current Exhibition</ExhibitionTitle>
                                <SubTitle ref={el => {SubtitleAnimation = el}}>The purpose of modern museums is to collect, preserve, interpret, and display objects.</SubTitle>
                                    <NavigationMenu ref={el => {MenuAnimation = el}}>
                                        <NavigationItem onClick={() => {handleColor(); handleSort(); handleImage()}}>    
                                            {handleBorder()}
                                        </NavigationItem>
                                        <NavigationItem>    
                                            <NavigationLinks to='/'>General</NavigationLinks>
                                        </NavigationItem>
                                        <NavigationItem>    
                                            <NavigationLinks to='/'>History</NavigationLinks>
                                        </NavigationItem>
                                        <NavigationItem>    
                                            <NavigationLinks to='/'>Science</NavigationLinks>
                                        </NavigationItem>
                                        <NavigationItem>    
                                            <NavigationLinks to='/'>Technology</NavigationLinks>
                                        </NavigationItem>
                                        <NavigationItem>    
                                            <NavigationLinks to='/'>Art</NavigationLinks>
                                        </NavigationItem>
                                    </NavigationMenu>
                            </NavigationHolder>
                            <CardHolder >
                                <FirstCard ref={el => {FirstCardAnimation = el}}>
                            <Card type="General" title="Galleries have multiple roles,both visible and invisible" date="1 Jan - 7 Jan 2021" link={Mask} id="general" icon={<FaCalendarAlt/>}/>
                            </FirstCard>
                            <SecondCard ref={el => {SecondCardAnimation = el}}>
                            <Card type="History" title="Artists,often by going above and beyond the normal work" date="8 Jan - 15 Jan 2021" link={Magazine} size="450" id="history" icon={<FaCalendarAlt/>}/>
                            </SecondCard>
                            <ThirdCard ref={el => {ThirdCardAnimation = el}}>
                            <Card type="Science" title="Promoting their artists,and selling the works" date="16 Jan - 23 Jan 2021" link={Abstract} id="science" icon={<FaCalendarAlt/>}/>
                            </ThirdCard>
                            <FourthCard ref={el => {FourthCardAnimation = el}}>
                            <Card type="Technology" title="Financial management or book publishing in order to help" date="24 Jan - 31 Jan 2021" link={Cube} id="technology" icon={<FaCalendarAlt/>}/>
                            </FourthCard>
                            <FifthCard ref={el => {FifthCardAnimation = el}}>
                            <Card type="Art" title="Commision is the percentage of the art sale price" date="1 Feb - 14 Feb 2021" link={Aquarel} size="450" id="art" icon={<FaCalendarAlt/>}/>
                            </FifthCard>
                            <SixthCard ref={el => {SixthCardAnimation = el}}>
                            <Card type="General" title="Art sale price that a gallery keeps, with the remainder" date="15 Feb - 22 Feb 2021" link={Squares} id="general" icon={<FaCalendarAlt/>}/>
                            </SixthCard>
                            </CardHolder>
                            <ButtonHolder>
                                <LoadMoreButton style={{fontFamily: 'duera'}} ref={el => {ButtonAnimation = el}}>LOAD MORE</LoadMoreButton>
                            </ButtonHolder>
                    </ExhibitionContainer>
            </ExhibitionSection>
            
        </>
    )
}

export default Exhibition
