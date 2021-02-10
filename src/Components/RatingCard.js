import React from 'react'
import {RatingCardContainer, RatingHolder, RatingComment, RatingPersonHolder,
    RatingPersonPhoto, RatingPersonName, RatingPersonDate,RatingPersonInfoHolder} from './GetTicket.elements';

const RatingCard = props => {
    return (
        <>
            <RatingCardContainer>
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
            </RatingCardContainer>
            
        </>
    )
}

export default RatingCard
