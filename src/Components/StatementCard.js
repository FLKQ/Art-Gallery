import React, {useEffect, useRef} from 'react'
import {StatementCardContainer, IconTextHolder, StatementIconMasks,
    StatementIconPalettee, StatementIconUniversity, StatementTitle,
    StatementTitleBottom, TitlesHolder,StatementSubTitle,IconHolder,WholeStatementHolder}from './StatementCard.elements';
import {gsap, Power3} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';


function StatementCard (props) {

    gsap.registerPlugin(ScrollTrigger);

    let TitleAnimation = useRef(null);
    let TitleBotAnimation = useRef(null);
    let SubtitleAnimation = useRef(null);
    let IconAnimation = useRef(null);
     

     useEffect(() => {
        gsap.fromTo(TitleAnimation, {x: 0 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
            scrollTrigger: {trigger: TitleAnimation, start: 'top center+=50',toggleActions:'play none none none'}});
        gsap.fromTo(SubtitleAnimation, {y: 40 , opacity: 0}, {y: 0, opacity: 1, duration: 2, delay: 0.3, ease: Power3.easeOut,
            scrollTrigger: {trigger: SubtitleAnimation, start: 'top center+=50',toggleActions:'play none none none'}});
        gsap.fromTo(IconAnimation, {x: -30 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
            scrollTrigger: {trigger: IconAnimation, start: 'top center+=90',toggleActions:'play none none none'}});
        gsap.fromTo(TitleBotAnimation, {x: 0 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
            scrollTrigger: {trigger: TitleBotAnimation, start: 'top center+=100',toggleActions:'play none none none'}});

    },[]);

    return (
        <>
            <WholeStatementHolder style={{width: props.stretched + '%'}}>
                <StatementCardContainer>
                    <IconTextHolder>
                        <IconHolder ref={el => {IconAnimation = el}}>
                            {props.icon}
                        </IconHolder>
                        <TitlesHolder>
                            <StatementTitle style={{color: props.fadedaway}} ref={el => {TitleAnimation = el}}>{props.StatementTitle}</StatementTitle>
                            <StatementTitleBottom style={{color: props.fadedaway}} ref={el => {TitleBotAnimation = el}}>{props.StatementTitleBottom}</StatementTitleBottom>
                        </TitlesHolder>                    
                    </IconTextHolder>
                            <StatementSubTitle ref={el => {SubtitleAnimation = el}}>{props.StatementSubTitle}</StatementSubTitle>
                </StatementCardContainer>
                </WholeStatementHolder>
            
        </>
    )
}



export default StatementCard
