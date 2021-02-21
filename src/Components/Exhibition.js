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
import {ScrollTrigger} from 'gsap/ScrollTrigger';



const Exhibition = () => {
    gsap.registerPlugin(ScrollTrigger);

    
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
    let TriggerAnimation = useRef(null);

    useEffect(() => {
        
        gsap.fromTo(MenuAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 2,delay: 0, ease: Power3.easeOut,
            scrollTrigger: {trigger: MenuAnimation, start: 'top center',toggleActions:'play none none none'}});
        gsap.fromTo(TitleAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
            scrollTrigger: {trigger: TitleAnimation, start: 'top center',toggleActions:'play none none none'}});
        gsap.fromTo(SubtitleAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 2,delay: 0, ease: Power3.easeOut,
            scrollTrigger: {trigger: SubtitleAnimation, start: 'top center+=100',toggleActions:'play none none none'}});
        gsap.fromTo(FirstCardAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 2,delay: 0, ease: Power3.easeOut,
            scrollTrigger: {trigger: FirstCardAnimation, start: 'top center',toggleActions:'play none none none'}});
        gsap.fromTo(ButtonAnimation, {y: 20, opacity: 0}, {y:0, opacity: 1, duration: 1.5, delay: 0 , ease: Power3.easeOut,
            scrollTrigger: {trigger: ButtonAnimation, start: 'top center+=200',toggleActions:'play none none none'}});
        gsap.fromTo(SecondCardAnimation, {y: 40 , opacity: 0}, {y: 0, opacity: 1, duration: 2,delay: 1, ease: "elastic",
        scrollTrigger: {trigger: SecondCardAnimation, start: 'top center',toggleActions:'play none none none'}});
        gsap.fromTo(ThirdCardAnimation, {x: 40 , opacity: 0}, {x: 0, opacity: 1, duration: 2,delay: 0, ease: Power3.easeOut,
            scrollTrigger: {trigger: ThirdCardAnimation, start: 'top center',toggleActions:'play none none none'}});
        gsap.fromTo(FourthCardAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 2,delay: 0, ease: Power3.easeOut,
            scrollTrigger: {trigger: FourthCardAnimation, start: 'top center',toggleActions:'play none none none'}});
        gsap.fromTo(FifthCardAnimation, {y: 40 , opacity: 0}, {y: 0, opacity: 1, duration: 2,delay: 1, ease: "elastic",
        scrollTrigger: {trigger: FifthCardAnimation, start: 'top center',toggleActions:'play none none none'}});
        gsap.fromTo(SixthCardAnimation, {x: 40 , opacity: 0}, {x: 0, opacity: 1, duration: 2,delay: 0, ease: Power3.easeOut,
            scrollTrigger: {trigger: SixthCardAnimation, start: 'top center',toggleActions:'play none none none'}});

            
    
        
    }, []);

    let TypeReference = useRef(null);

    const [color, setColor] = useState(true);
    const [sort, setSort] = useState(false);
    const [generalSort, setGeneralSort] = useState(false);
    const [historySort, setHistorySort] = useState(false);
    const [scienceSort, setScienceSort] = useState(false);
    const [technologySort, setTechnologySort] = useState(false);
    const [artSort, setArtSort] = useState(false);

    const handleColor = () => setColor(!color);
    const handleSort = () => setSort(!sort);
    const handleGeneralSort = () => setGeneralSort(!generalSort);
    const handleHistorySort = () => setHistorySort(!historySort);
    const handleScienceSort = () => setScienceSort(!scienceSort);
    const handleTechnologySort = () => setTechnologySort(!technologySort);
    const handleArtSort = () => setArtSort(!artSort);

    const GeneralSortFalse = () => setGeneralSort(false);
    const SeeAllSortFalse = () => setSort(false);
    const HistorySortFalse = () => setHistorySort(false);
    const ScienceSortFalse = () => setScienceSort(false);
    const TechnologySortFalse = () => setTechnologySort(false);
    const ArtSortFalse = () => setArtSort(false);

    function handleBorder() {
        if(color){
            return <NavigationLinks to = '/' style={{color: "#b895fa"}} onClick={handleColor}>See All</NavigationLinks>
        }else
             return <NavigationLinks to='/' onClick={handleColor}>See All</NavigationLinks>
    };

    function handleImage(newDispay){
        if(sort){
            seeAllRef.current.style.color = "#b895fa";
            document.querySelector(".historyItems").style.display = "unset";
            document.querySelector(".scienceItems").style.display = "unset";
            document.querySelector(".technologyItems").style.display = "unset";
            document.querySelector(".artItems").style.display = "unset";
            document.querySelector(".generalOne").style.display = "unset";
            document.querySelector(".generalTwo").style.display = "unset";
            
        }else {
            seeAllRef.current.style.color = "#7c7b7d";
        }

    };

    function sortImagesByGeneral(newDisplay) {
        if(generalSort){
            generalRef.current.style.color = "#b895fa";
            document.querySelector(".generalOne").style.display = "unset";
            document.querySelector(".generalTwo").style.display = "unset";
            document.querySelector(".historyItems").style.display = "none";
            document.querySelector(".scienceItems").style.display = "none";
            document.querySelector(".technologyItems").style.display = "none";
            document.querySelector(".artItems").style.display = "none";
            

        }else {
            generalRef.current.style.color = "#7c7b7d";
        }
    };

    function sortImagesByHistory(newDisplay) {
        if(historySort){
            historyRef.current.style.color = "#b895fa";
            document.querySelector(".historyItems").style.display = "unset";
            document.querySelector(".scienceItems").style.display = "none";
            document.querySelector(".technologyItems").style.display = "none";
            document.querySelector(".artItems").style.display = "none";
            document.querySelector(".generalOne").style.display = "none";
            document.querySelector(".generalTwo").style.display = "none";

        }else {
            historyRef.current.style.color = "#7c7b7d";
        }
    };

    function sortImagesByScience(newDisplay) {
        if(scienceSort){
            scienceRef.current.style.color = "#b895fa";
            document.querySelector(".historyItems").style.display = "none";
            document.querySelector(".scienceItems").style.display = "unset";
            document.querySelector(".technologyItems").style.display = "none";
            document.querySelector(".artItems").style.display = "none";
            document.querySelector(".generalOne").style.display = "none";
            document.querySelector(".generalTwo").style.display = "none";

        }else {
            scienceRef.current.style.color = "#7c7b7d";
        }
    };

    function sortImagesByTechnology(newDisplay) {
        if(technologySort){
            technologyRef.current.style.color = "#b895fa";
            document.querySelector(".historyItems").style.display = "none";
            document.querySelector(".scienceItems").style.display = "none";
            document.querySelector(".technologyItems").style.display = "unset";
            document.querySelector(".artItems").style.display = "none";
            document.querySelector(".generalOne").style.display = "none";
            document.querySelector(".generalTwo").style.display = "none";

        }else {
            technologyRef.current.style.color = "#7c7b7d";
        }
    };

    function sortImagesByArt(newDisplay) {
        if(artSort){
            artRef.current.style.color = "#b895fa";
            document.querySelector(".historyItems").style.display = "none";
            document.querySelector(".scienceItems").style.display = "none";
            document.querySelector(".technologyItems").style.display = "none";
            document.querySelector(".artItems").style.display = "unset";
            document.querySelector(".generalOne").style.display = "none";
            document.querySelector(".generalTwo").style.display = "none";

        }else {
            artRef.current.style.color = "#7c7b7d";
        }
    };

    useEffect(() => {
        handleImage();
        handleBorder();
        sortImagesByHistory();
        sortImagesByGeneral();
        sortImagesByScience();
        sortImagesByTechnology();
        sortImagesByArt();
    },[generalSort,historySort,scienceSort,technologySort,artSort,sort]);

    const generalRef = useRef();
    const historyRef = useRef();
    const scienceRef = useRef();
    const technologyRef = useRef();
    const artRef = useRef();
    const seeAllRef = useRef();
    return (
        <>
            <ExhibitionSection>
                    <ExhibitionContainer>
                            <NavigationHolder>
                                <ExhibitionTitle ref={el => {TitleAnimation = el}}>Current Exhibition</ExhibitionTitle>
                                <SubTitle ref={el => {SubtitleAnimation = el}}>The purpose of modern museums is to collect, preserve, interpret, and display objects.</SubTitle>
                                    <NavigationMenu ref={el => {MenuAnimation = el}}>
                                        <NavigationItem onClick={() => {handleColor(); handleSort(); handleImage()}} ref={el=>{TypeReference = el}}>    
                                            <NavigationLinks to='/' onClick={() => {handleImage(); handleSort(); HistorySortFalse();
                                            TechnologySortFalse(); ArtSortFalse(); ScienceSortFalse(); GeneralSortFalse(); }} ref={seeAllRef}>See All</NavigationLinks>
                                        </NavigationItem>
                                        <NavigationItem> 
                                            <NavigationLinks to='/' onClick={() => {handleGeneralSort(); sortImagesByGeneral();HistorySortFalse();
                                            TechnologySortFalse(); ArtSortFalse(); ScienceSortFalse(); SeeAllSortFalse();}} ref={generalRef}>General</NavigationLinks>
                                        </NavigationItem>
                                       
                                        <NavigationItem>    
                                            <NavigationLinks to='/'onClick = { () => {handleHistorySort(); sortImagesByHistory(); GeneralSortFalse(); SeeAllSortFalse();
                                            ScienceSortFalse(); TechnologySortFalse(); ArtSortFalse();}} ref={historyRef}>History</NavigationLinks>
                                        </NavigationItem>
                                        <NavigationItem>    
                                            <NavigationLinks to='/' onClick = { () => {handleScienceSort(); sortImagesByScience(); GeneralSortFalse(); SeeAllSortFalse();
                                            HistorySortFalse(); ArtSortFalse(); TechnologySortFalse();}} ref={scienceRef}>Science</NavigationLinks>
                                        </NavigationItem>
                                        <NavigationItem>    
                                            <NavigationLinks to='/' onClick = { () => {handleTechnologySort(); sortImagesByTechnology(); GeneralSortFalse(); SeeAllSortFalse();
                                            HistorySortFalse(); ArtSortFalse(); ScienceSortFalse(); }} ref={technologyRef}>Technology</NavigationLinks>
                                        </NavigationItem>
                                        <NavigationItem>    
                                            <NavigationLinks to='/' onClick = { () => {handleArtSort(); sortImagesByArt(); GeneralSortFalse(); SeeAllSortFalse();
                                            HistorySortFalse(); ScienceSortFalse(); TechnologySortFalse();}} ref={artRef}>Art</NavigationLinks>
                                        </NavigationItem>
                                    </NavigationMenu>
                            </NavigationHolder>
                            <CardHolder >
                                <div className = "generalOne">
                                <FirstCard ref={el => {FirstCardAnimation = el}}>
                            <Card type="General" title="Galleries have multiple roles,both visible and invisible" date="1 Jan - 7 Jan 2021" link={Mask} id="general" icon={<FaCalendarAlt/>}/>
                            </FirstCard>
                            </div>
                            <div className="historyItems">
                            <SecondCard ref={el => {SecondCardAnimation = el}}>
                            <Card type="History" title="Artists,often by going above and beyond the normal work" date="8 Jan - 15 Jan 2021" link={Magazine} size="450" id="history" icon={<FaCalendarAlt/>}/>
                            </SecondCard>
                            </div>
                            <div className="scienceItems">
                            <ThirdCard ref={el => {ThirdCardAnimation = el}}>
                            <Card type="Science" title="Promoting their artists,and selling the works" date="16 Jan - 23 Jan 2021" link={Abstract} id="science" icon={<FaCalendarAlt/>}/>
                            </ThirdCard>
                            </div>
                            <div className="technologyItems">
                            <FourthCard ref={el => {FourthCardAnimation = el}}>
                            <Card type="Technology" title="Financial management or book publishing in order to help" date="24 Jan - 31 Jan 2021" link={Cube} id="technology" icon={<FaCalendarAlt/>}/>
                            </FourthCard>
                            </div>
                            <div className="artItems">
                            <FifthCard ref={el => {FifthCardAnimation = el}}>
                            <Card type="Art" title="Commision is the percentage of the art sale price" date="1 Feb - 14 Feb 2021" link={Aquarel} size="450" id="art" icon={<FaCalendarAlt/>}/>
                            </FifthCard>
                            </div>
                            <div className = "generalTwo">
                            <SixthCard ref={el => {SixthCardAnimation = el}}>
                            <Card type="General" title="Art sale price that a gallery keeps, with the remainder" date="15 Feb - 22 Feb 2021" link={Squares} id="general" icon={<FaCalendarAlt/>}/>
                            </SixthCard>
                            </div>
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
