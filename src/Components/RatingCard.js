import React from 'react'
import {RatingCardContainer, RatingHolder, RatingComment, RatingPersonHolder,
    RatingPersonPhoto, RatingPersonName, RatingPersonDate, RatingCardHolder, RatingCardWrapper,RatingPersonInfoHolder} from './Testimonials.elements';
import {BsStarFill, BsStar} from 'react-icons/bs';

const RatingCard = props => {
    return (
        <>
            <RatingCardContainer>
                <RatingCardHolder>
                        <RatingHolder>
                            {props.star1}
                            {props.star2}
                            {props.star3}
                            {props.star4}
                            {props.star5}
                        </RatingHolder>
                        <RatingComment>{props.comment}</RatingComment>
                            <RatingPersonHolder>
                                <RatingPersonPhoto src={props.photo}/>
                                <RatingPersonInfoHolder>
                                    <RatingPersonName>{props.name}</RatingPersonName>
                                    <RatingPersonDate>{props.date}</RatingPersonDate>
                            </RatingPersonInfoHolder>
                        </RatingPersonHolder>
                    </RatingCardHolder>
            </RatingCardContainer>
            
        </>
    )
}

export default RatingCard
