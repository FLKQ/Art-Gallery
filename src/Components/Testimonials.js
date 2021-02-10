import React from 'react'
import {TestimonialContainer, TestimonialHolder, TestimonialsTextHolder, TestimonialsTitle, TestimonialsSubtext, TestimonialsButton, TestimonialsSection} from './Testimonials.elements';

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
            </TestimonialsSection>
        </>
    )
}

export default Testimonials
