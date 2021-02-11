import React from 'react'
import {TestimonialContainer, TestimonialHolder, TestimonialsTextHolder, TestimonialsTitle, TestimonialsSubtext, TestimonialsButton,
     TestimonialsSection, RatingCardWrapper,RatingCardSpreader} from './Testimonials.elements';
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

                 <RatingCardWrapper>
                     <RatingCardSpreader>
             <RatingCard star1={<BsStarFill style={{width: '20px', height: '20px'}}/>} star2={<BsStarFill style={{width: '20px', height: '20px'}}/>} star3={<BsStarFill style={{width: '20px', height: '20px'}}/>}
                star4={<BsStarFill style={{width: '20px', height: '20px'}}/>} star5={<BsStarFill style={{width: '20px', height: '20px'}}/>} comment="Museums teach critical thinking,
                empathy,and other generally important skills and dispositions. Trips to museums help
                get kids excited" photo={PersonTwo} name="Antonin Hafer" date="10 Jan 2021" />
                <RatingCard star1={<BsStarFill style={{width: '20px', height: '20px'}}/>} star2={<BsStarFill style={{width: '20px', height: '20px'}}/>} star3={<BsStarFill style={{width: '20px', height: '20px'}}/>}
                star4={<BsStarFill style={{width: '20px', height: '20px'}}/>} star5={<BsStar style={{width: '20px', height: '20px'}}/>} comment="About school subjects.Museums teach
                subject-specific content and skills.Museums expand the general world knowledge of students." photo={PersonFirst} name="Paulina Gayosos" date="7 Jan 2021" />
                </RatingCardSpreader>
            </RatingCardWrapper>    
                 
            </TestimonialsSection>
             
        </>
    )
}

export default Testimonials
