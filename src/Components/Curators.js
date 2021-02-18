import React, {useRef, useEffect} from 'react'
import Card from './Card';
import {CuratorsContainer, CuratorsHolder, CuratorsTitle, CuratorsSubtextTop,
     CuratorsPhotosHolder, AllCuratorsButton, AllCuratorsButtonHolder, CuratorsSubtextBot} from './Curators.elements';
import jaquon from '../Images/Jaquon.jpg';
import nuria from '../Images/Nuria.jpg';
import oluchi from '../Images/Oluchi.jpg';
import tua from '../Images/Tua.jpg';
import './HeaderElements.css';
import {gsap, Power3} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

const Curators = () => {

    gsap.registerPlugin(ScrollTrigger);

    let TitleAnimation = useRef(null);
    let SubtitleAnimation = useRef(null);
    let SubtitleBotAnimation = useRef(null);
     let FirstCardAnimation = useRef(null);
    let SecondCardAnimation = useRef(null);
    let ThirdCardAnimation = useRef(null);
    let FourthCardAnimation = useRef(null);
    let ButtonAnimation = useRef(null);

    useEffect(() => {
        gsap.fromTo(TitleAnimation, {x: 40 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
            scrollTrigger: {trigger: TitleAnimation, start: 'top center',toggleActions:'play none none none'}});
        gsap.fromTo(SubtitleAnimation, {x: 60 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0.4, ease: Power3.easeOut,
            scrollTrigger: {trigger: SubtitleAnimation, start: 'top center',toggleActions:'play none none none'}});
        gsap.fromTo(SubtitleBotAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0.4, ease: Power3.easeOut,
            scrollTrigger: {trigger: SubtitleBotAnimation, start: 'top center',toggleActions:'play none none none'}});
        gsap.fromTo(FirstCardAnimation, {x: 60 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0.6, ease: Power3.easeOut,
            scrollTrigger: {trigger: FirstCardAnimation, start: 'top center',toggleActions:'play none none none'}});
        gsap.fromTo(SecondCardAnimation, {x: 60 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0.8, ease: Power3.easeOut,
            scrollTrigger: {trigger: SecondCardAnimation, start: 'top center',toggleActions:'play none none none'}});
        gsap.fromTo(ThirdCardAnimation, {x: 60 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 1, ease: Power3.easeOut,
            scrollTrigger: {trigger: ThirdCardAnimation, start: 'top center',toggleActions:'play none none none'}});
        gsap.fromTo(FourthCardAnimation, {x: 60 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 1.2, ease: Power3.easeOut,
            scrollTrigger: {trigger: FourthCardAnimation, start: 'top center',toggleActions:'play none none none'}});
        gsap.fromTo(ButtonAnimation, {y: 60 , opacity: 0}, {y: 0, opacity: 1, duration: 1, delay: 1.2, ease: Power3.easeOut,
            scrollTrigger: {trigger: ButtonAnimation, start: 'top center+=450',toggleActions:'play none none none'}});


    },[])

    return (
        <>
            <CuratorsContainer>
                <CuratorsHolder>
                    <CuratorsTitle ref={el => {TitleAnimation = el}}>Team Of Curators</CuratorsTitle>
                    <CuratorsSubtextTop ref={el => {SubtitleAnimation = el}}>Visitor or community perspective,the purpose
                        
                    </CuratorsSubtextTop>
                    <CuratorsSubtextBot ref={el => {SubtitleBotAnimation = el}}>
                        can also depend on one's poin of view.
                    </CuratorsSubtextBot>
                    <CuratorsPhotosHolder>
                        <div ref={el => {FirstCardAnimation = el}}>
                        <Card type="General" title="Jaquon Hart" link={jaquon} widthlol="320" size="350" radius="10"/>
                        </div>
                        <div ref={el => {SecondCardAnimation = el}}>
                        <Card type="Art & Science" title="Nuria Pelayo" link={nuria} widthlol="320" size="350" radius="10"/>
                        </div>
                        <div ref={el => {ThirdCardAnimation = el}}>
                        <Card type="History" title="Oluchi Mazi" link={oluchi} widthlol="320" size="350" radius="10"/>
                        </div>
                        <div ref={el => {FourthCardAnimation = el}}>
                        <Card type="Nature" title="Tua Manuera" link={tua} widthlol="320" size="350" radius="10"/>
                        </div>
                    </CuratorsPhotosHolder>
                    <AllCuratorsButtonHolder>
                    <AllCuratorsButton style={{fontFamily: 'duera'}} ref={el => {ButtonAnimation = el}}>ALL CURATORS</AllCuratorsButton>
                    </AllCuratorsButtonHolder>
                </CuratorsHolder>
            </CuratorsContainer>
        </>
    )
}

export default Curators
