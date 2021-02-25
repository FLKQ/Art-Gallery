import React, {useRef, useEffect} from 'react'
import {TestimonialContainer, TestimonialHolder, TestimonialsTextHolder, TestimonialsTitle, TestimonialsSubtext, TestimonialsButton,
     TestimonialsSection, RatingCardWrapper,RatingCardSpreader, WrapperDiv} from './Testimonials.elements';
import {BsStarFill, BsStar} from 'react-icons/bs';
import RatingCard from './RatingCard';
import PersonTwo from '../Images/PersonTwo.jpg';
import PersonFirst from '../Images/PersonFirst.jpg';
import {gsap, Power3} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

const Testimonials = () => {

    gsap.registerPlugin(ScrollTrigger);

    let TitleAnimation = useRef(null);
    let SubtitleAnimation = useRef(null);
    let ButtonAnimation = useRef(null);
     let FirstCardAnimation = useRef(null);
    let SecondCardAnimation = useRef(null);

    let CurrentWidth = window.innerWidth;

    useEffect(() => {
        if(CurrentWidth >= 1024){
        gsap.fromTo(TitleAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
            scrollTrigger: {trigger: TitleAnimation, start: 'top center+=100',toggleActions:'play none none none'}});
        gsap.fromTo(SubtitleAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0.3, ease: Power3.easeOut,
            scrollTrigger: {trigger: SubtitleAnimation, start: 'top center+=100',toggleActions:'play none none none'}});
        gsap.fromTo(ButtonAnimation, {y: 40 , opacity: 0}, {y: 0, opacity: 1, duration: 2, delay: 0.3, ease: Power3.easeOut,
            scrollTrigger: {trigger: ButtonAnimation, start: 'top center+=100',toggleActions:'play none none none'}});
        gsap.fromTo(FirstCardAnimation, {y: 40 , opacity: 0}, {y: 0, opacity: 1, duration: 2, delay: 0.3, ease: Power3.easeOut,
            scrollTrigger: {trigger: FirstCardAnimation, start: 'top center+=50',toggleActions:'play none none none'}});
        gsap.fromTo(SecondCardAnimation, {y: 40 , opacity: 0}, {y: 0, opacity: 1, duration: 2, delay: 0.3, ease: Power3.easeOut,
            scrollTrigger: {trigger: SecondCardAnimation, start: 'top center+=50',toggleActions:'play none none none'}});
        }else{
            gsap.fromTo(TitleAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
                scrollTrigger: {trigger: TitleAnimation, start: 'top center+=100',toggleActions:'play none none none'}});
            gsap.fromTo(SubtitleAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
                scrollTrigger: {trigger: SubtitleAnimation, start: 'top center+=100',toggleActions:'play none none none'}});
            gsap.fromTo(ButtonAnimation, {y: 40 , opacity: 0}, {y: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
                scrollTrigger: {trigger: ButtonAnimation, start: 'top center+=100',toggleActions:'play none none none'}});
            gsap.fromTo(FirstCardAnimation, {y: 40 , opacity: 0}, {y: 0, opacity: 1, duration: 0.8, delay: 0, ease: Power3.easeOut,
                scrollTrigger: {trigger: FirstCardAnimation, start: 'top center+=50',toggleActions:'play none none none'}});
            gsap.fromTo(SecondCardAnimation, {y: 40 , opacity: 0}, {y: 0, opacity: 1, duration: 0.8, delay: 0, ease: Power3.easeOut,
                scrollTrigger: {trigger: SecondCardAnimation, start: 'top center+=50',toggleActions:'play none none none'}});
        };

    },[])


    return (
        <>
        <WrapperDiv>
            <TestimonialsSection>
                <TestimonialContainer>
                    <TestimonialHolder>
                    <TestimonialsTitle ref={el => {TitleAnimation = el}}>Testimonials</TestimonialsTitle>
                        <TestimonialsTextHolder>
                            <TestimonialsSubtext ref={el => {SubtitleAnimation = el}}>Display objects of artistic, cultural, or scientific significance for the education of the public.</TestimonialsSubtext>
                            <TestimonialsButton style={{fontFamily: 'duera'}} ref={el => {ButtonAnimation = el}}>EXPLORE ALL</TestimonialsButton>
                        </TestimonialsTextHolder>
                        </TestimonialHolder>
                </TestimonialContainer>

                 <RatingCardWrapper>
                     <RatingCardSpreader>
            <div ref={el => {FirstCardAnimation = el}}>
             <RatingCard  star1={<BsStarFill style={{width: '20px', height: '20px'}}/>} star2={<BsStarFill style={{width: '20px', height: '20px'}}/>} star3={<BsStarFill style={{width: '20px', height: '20px'}}/>}
                star4={<BsStarFill style={{width: '20px', height: '20px'}}/>} star5={<BsStarFill style={{width: '20px', height: '20px'}}/>} comment="Museums teach critical thinking,
                empathy,and other generally important skills and dispositions. Trips to museums help
                get kids excited" photo={PersonTwo} name="Antonin Hafer" date="10 Jan 2021" />
             </div> 
             <div ref={el => {SecondCardAnimation = el}}>  
                <RatingCard  star1={<BsStarFill style={{width: '20px', height: '20px'}}/>} star2={<BsStarFill style={{width: '20px', height: '20px'}}/>} star3={<BsStarFill style={{width: '20px', height: '20px'}}/>}
                star4={<BsStarFill style={{width: '20px', height: '20px'}}/>} star5={<BsStar style={{width: '20px', height: '20px'}}/>} comment="About school subjects.Museums teach
                subject-specific content and skills.Museums expand the general world knowledge of students." photo={PersonFirst} name="Paulina Gayosos" date="7 Jan 2021" />
             </div>  
                </RatingCardSpreader>
            </RatingCardWrapper>    
                 
            </TestimonialsSection>
        </WrapperDiv> 
            
        </>
    )
}

export default Testimonials
