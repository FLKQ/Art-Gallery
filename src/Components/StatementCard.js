import React from 'react'
import {StatementCardContainer, IconTextHolder, StatementIconMasks, StatementTitle, StatementSubTitle,IconHolder}from './StatementCard.elements';


function StatementCard (props) {
    return (
        <>
            <StatementCardContainer>
                <IconTextHolder>
                    <IconHolder>
                    <StatementIconMasks/>
                    </IconHolder>
                <StatementTitle>{props.StatementTitle}</StatementTitle>
                </IconTextHolder>
                <StatementSubTitle>{props.StatementSubTitle}</StatementSubTitle>
            </StatementCardContainer>
        </>
    )
}

export default StatementCard
