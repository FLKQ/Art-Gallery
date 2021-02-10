import React from 'react'
import {TestimonialContainer, TestimonialHolder, TestimonialsTextHolder, TestimonialsTitle, TestimonialsSubtext, TestimonialsButton, TestimonialsSection} from './Testimonials.elements';

const Testimonials = () => {
    return (
        <>
            <TestimonialsSection>
                <TestimonialContainer>
                    <TestimonialHolder>
                        <TestimonialsTextHolder>
                            <TestimonialsTitle>Testimonials</TestimonialsTitle>
                            <TestimonialsSubtext>Display objects of artistic, cultural, or scientific significance for the education of the public.</TestimonialsSubtext>
                        </TestimonialsTextHolder>
                            <TestimonialsButton>EXPLORE ALL</TestimonialsButton>
                    </TestimonialHolder>
                </TestimonialContainer>
            </TestimonialsSection>
        </>
    )
}

export default Testimonials
