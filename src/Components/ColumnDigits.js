import React, {useEffect, useRef} from 'react'
import {ColumnDigitsHolder, DigitTitle, DigitSubtitle} from './AboutUs.elements';
import {gsap, Power3} from 'gsap';;


function ColumnDigits(props) {


    let TitleAnimation = useRef(null);
    let SubtitleAnimation = useRef(null);
    let SubtitleBotAnimation = useRef(null);
     

     useEffect(() => {
        gsap.fromTo(TitleAnimation, {y: 40 , opacity: 0}, {y: 0, opacity: 1, duration: 2, delay: 0.7, ease: Power3.easeOut});
        gsap.fromTo(SubtitleAnimation, {x: 40 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 1.5, ease: Power3.easeOut});
        gsap.fromTo(SubtitleBotAnimation, {x: 40 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 1.5, ease: Power3.easeOut});


    },[]);



    return (
        <>
            <DigitTitle ref={el => {TitleAnimation = el}}>{props.digitTitle}</DigitTitle>
            <ColumnDigitsHolder>
                <DigitSubtitle ref={el => {SubtitleAnimation = el}}>{props.digitSubTop}</DigitSubtitle>
                <DigitSubtitle ref={el => {SubtitleBotAnimation = el}}>{props.digitSubBot}</DigitSubtitle>
            </ColumnDigitsHolder>
            
        </>
    )
}

export default ColumnDigits
