import React from 'react'
import {TestimonialContainer, TestimonialHolder, TestimonialsTextHolder, TestimonialsTitle, TestimonialsSubtext, TestimonialsButton, TestimonialsSection} from './Testimonials.elements';
import {BsStarFill, BsStar} from 'react-icons/bs';
import RatingCard from './RatingCard';
import PersonTwo from '../Images/PersonTwo.jpg';
import PersonFirst from '../Images/PersonFirst.jpg';

const Testimonials = () => {
    return (
        <>
            <TestimonialsSection>
                <TestimonialContainer>
                    <TestimonialHolder>
                    <TestimonialsTitle>Testimonials</TestimonialsTitle>
                        <TestimonialsTextHolder>
                            <TestimonialsSubtext>Display objects of artistic, cultural, or scientific significance for the education of the public.</TestimonialsSubtext>
                            <TestimonialsButton style={{fontFamily: 'duera'}}>EXPLORE ALL</TestimonialsButton>
                        </TestimonialsTextHolder>
                        </TestimonialHolder>
                </TestimonialContainer>
                {/* <RatingCard start1={<BsStarFill/>} start2={<BsStarFill/>} start3={<BsStarFill/>}
                start4={<BsStarFill/>} start5={<BsStarFill/>} comment="Museums teach critical thinking,
                empathy,and other generally important skills and dispositions. Trips to museums help
                get kids excited" photo={PersonFirst} name="Antonin Hafer" date="10 Jan 2021" />
                <RatingCard/> */}
            </TestimonialsSection>
        </>
    )
}

export default Testimonials
