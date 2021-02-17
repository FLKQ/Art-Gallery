import React, {useRef, useEffect} from 'react'
import {TestimonialContainer, TestimonialHolder, TestimonialsTextHolder, TestimonialsTitle, TestimonialsSubtext, TestimonialsButton,
     TestimonialsSection, RatingCardWrapper,RatingCardSpreader} from './Testimonials.elements';
import {BsStarFill, BsStar} from 'react-icons/bs';
import RatingCard from './RatingCard';
import PersonTwo from '../Images/PersonTwo.jpg';
import PersonFirst from '../Images/PersonFirst.jpg';
import {gsap, Power3} from 'gsap';

const Testimonials = () => {

    let TitleAnimation = useRef(null);
    let SubtitleAnimation = useRef(null);
    let ButtonAnimation = useRef(null);
     let FirstCardAnimation = useRef(null);
    let SecondCardAnimation = useRef(null);

    useEffect(() => {
        gsap.fromTo(TitleAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0.5, ease: Power3.easeOut});
        gsap.fromTo(SubtitleAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0.8, ease: Power3.easeOut});
        gsap.fromTo(ButtonAnimation, {x: 40 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0.8, ease: Power3.easeOut});
        gsap.fromTo(FirstCardAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 1.2, ease: Power3.easeOut});
        gsap.fromTo(SecondCardAnimation, {x: 40 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 1.2, ease: Power3.easeOut});

    },[])


    return (
        <>
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
             
        </>
    )
}

export default Testimonials
