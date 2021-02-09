import React from 'react'
import {ColumnDigitsHolder, DigitTitle, DigitSubtitle} from './AboutUs.elements';

function ColumnDigits(props) {
    return (
        <>
            <DigitTitle>{props.digitTitle}</DigitTitle>
            <ColumnDigitsHolder>
                <DigitSubtitle>{props.digitSubTop}</DigitSubtitle>
                <DigitSubtitle>{props.digitSubBot}</DigitSubtitle>
            </ColumnDigitsHolder>
            
        </>
    )
}

export default ColumnDigits
