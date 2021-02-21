import React, {useEffect, useRef} from 'react'
import {ArticlesImageSide, SideCardWrapper, SideCardHolder} from './Articles.elements';
import ArticlesCard from './ArticlesCard';
import sidefirst from '../Images/SideFirst.jpg';
import sidesecond from '../Images/SideSecond.jpg';
import sidethird from '../Images/SideThird.jpg'
import {gsap, Power3} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';


const ArticlesSideCard = () => {

    gsap.registerPlugin(ScrollTrigger);

    let FistCardAnimation = useRef(null);
    let SecondCardAnimation = useRef(null);
    let ThirdCardAnimation = useRef(null);
    let ArticleCardAnimation = useRef(null);

     useEffect(() => {
        gsap.fromTo(FistCardAnimation, {y: 50 , opacity: 0}, {y: 0, opacity: 1, duration: 2, delay: 1.3, ease: Power3.easeOut,
            scrollTrigger: {trigger: FistCardAnimation, start: 'top center',toggleActions:'play none none none'}});
        gsap.fromTo(SecondCardAnimation, {y: 80 , opacity: 0}, {y: 0, opacity: 1, duration: 2, delay: 1.4, ease: Power3.easeOut,
            scrollTrigger: {trigger: SecondCardAnimation, start: 'top center+=100',toggleActions:'play none none none'}});
        gsap.fromTo(ThirdCardAnimation, {y: 100 , opacity: 0}, {y: 0, opacity: 1, duration: 2, delay: 1.5, ease: Power3.easeOut,
            scrollTrigger: {trigger: ThirdCardAnimation, start: 'top center+=300',toggleActions:'play none none none'}});

    },[]);

    
    return (
        <>
            <SideCardWrapper>
                <SideCardHolder ref={el => {FistCardAnimation = el}}>
                    <ArticlesImageSide src={sidefirst}/>
                    <ArticlesCard type="Events" date="12 Jan 2021" subtext="Artworks by emerging, established or master artists" distance="25" fullsize="70"/>
                </SideCardHolder>
                <SideCardHolder ref={el => {SecondCardAnimation = el}}>
                    <ArticlesImageSide src={sidesecond}/>
                    <ArticlesCard type="Art & Science" date="8 Jan 2021" subtext="Physical galleries, where exhibitions" distance="25" fullsize="70" />
                </SideCardHolder>
                <SideCardHolder ref={el => {ThirdCardAnimation = el}}>
                    <ArticlesImageSide src={sidethird}/>
                    <ArticlesCard type="History" date="3 Jan 2021" subtext="Space, and virtual galleries, where exhibitions" distance="25" fullsize="70"/>
                </SideCardHolder>
            </SideCardWrapper>
        </>
    )
}

export default ArticlesSideCard
