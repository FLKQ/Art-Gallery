import React, {useEffect, useRef} from 'react'
import {ArticlesImageSide, SideCardWrapper, SideCardHolder} from './Articles.elements';
import ArticlesCard from './ArticlesCard';
import sidefirst from '../Images/SideFirst.jpg';
import sidesecond from '../Images/SideSecond.jpg';
import sidethird from '../Images/SideThird.jpg'
import {gsap, Power3} from 'gsap';


const ArticlesSideCard = () => {

    let FistCardAnimation = useRef(null);
    let SecondCardAnimation = useRef(null);
    let ThirdCardAnimation = useRef(null);
    let ArticleCardAnimation = useRef(null);

     useEffect(() => {
        gsap.fromTo(FistCardAnimation, {x: 50 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 1.5, ease: Power3.easeOut});
        gsap.fromTo(SecondCardAnimation, {x: 80 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 1.6, ease: Power3.easeOut});
        gsap.fromTo(ThirdCardAnimation, {x: 100 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 1.7, ease: Power3.easeOut});

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
