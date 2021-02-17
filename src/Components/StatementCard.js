import React, {useEffect, useRef} from 'react'
import {StatementCardContainer, IconTextHolder, StatementIconMasks,
    StatementIconPalettee, StatementIconUniversity, StatementTitle,
    StatementTitleBottom, TitlesHolder,StatementSubTitle,IconHolder,WholeStatementHolder}from './StatementCard.elements';
import {gsap, Power3} from 'gsap';


function StatementCard (props) {

    let TitleAnimation = useRef(null);
    let TitleBotAnimation = useRef(null);
    let SubtitleAnimation = useRef(null);
    let IconAnimation = useRef(null);
     

     useEffect(() => {
        gsap.fromTo(TitleAnimation, {x: 40 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0.7, ease: Power3.easeOut});
        gsap.fromTo(SubtitleAnimation, {y: 40 , opacity: 0}, {y: 0, opacity: 1, duration: 2, delay: 1, ease: Power3.easeOut});
        gsap.fromTo(IconAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0.7, ease: Power3.easeOut});

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
