import React from 'react'
import {StatementCardContainer, IconTextHolder, StatementIconMasks,
    StatementIconPalettee, StatementIconUniversity, StatementTitle, StatementSubTitle,IconHolder,WholeStatementHolder}from './StatementCard.elements';


function StatementCard (props) {
    return (
        <>
            <WholeStatementHolder>
                <StatementCardContainer>
                    <IconTextHolder>
                        <IconHolder>
                            {props.icon}
                        </IconHolder>
                            <StatementTitle>{props.StatementTitle}</StatementTitle>
                    </IconTextHolder>
                            <StatementSubTitle>{props.StatementSubTitle}</StatementSubTitle>
                </StatementCardContainer>
                </WholeStatementHolder>
            
        </>
    )
}



export default StatementCard
