import React from 'react'
import {CardContainer, CardImageHolder, CardImage, CardTextHolder, CardType, CardTitle, CardDateHolder, CardDateIcon,
    CardDateText} from './Card.elements.js';
    import Mask from '../Images/nex.jpg';

    function Card(props) {
        return(
            <>
            <CardContainer>
                <CardImageHolder>
                    <CardImage src={props.link} style={{height: props.size + 'px'}}/>
                </CardImageHolder>
                <CardTextHolder>
                    <CardType>{props.type}</CardType>
                    <CardTitle>{props.title}</CardTitle>
                    <CardDateHolder>
                            <CardDateIcon/>
                            <CardDateText>{props.date}</CardDateText>
                    </CardDateHolder>
                </CardTextHolder>
            </CardContainer>
        </>
        )
}

export default Card


