import React from 'react'
import {ImageInsideText, ImageInsideTypeDateHolder, ImageInsideType, ImageInsideDate, ImageInsideSubtext} from './Articles.elements';


const ArticlesCard = props => {
    return (
        <>
            <ImageInsideText style={{position: props.inside, marginLeft: props.distance + 'px' }}>
                <ImageInsideTypeDateHolder>
                    <ImageInsideType>{props.type}</ImageInsideType>
                    <ImageInsideDate>{props.date}</ImageInsideDate>
                </ImageInsideTypeDateHolder>
                    <ImageInsideSubtext style={{width: props.fullsize + '%'}}>{props.subtext}</ImageInsideSubtext>
            </ImageInsideText>
        </>
    )
}



export default ArticlesCard
