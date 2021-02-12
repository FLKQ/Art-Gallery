import React from 'react'
import {StatementCardContainer, IconTextHolder, StatementIconMasks,
    StatementIconPalettee, StatementIconUniversity, StatementTitle,
    StatementTitleBottom, TitlesHolder,StatementSubTitle,IconHolder,WholeStatementHolder}from './StatementCard.elements';


function StatementCard (props) {
    return (
        <>
            <WholeStatementHolder style={{width: props.stretched + '%'}}>
                <StatementCardContainer>
                    <IconTextHolder>
                        <IconHolder>
                            {props.icon}
                        </IconHolder>
                        <TitlesHolder>
                            <StatementTitle style={{color: props.fadedaway}}>{props.StatementTitle}</StatementTitle>
                            <StatementTitleBottom style={{color: props.fadedaway}}>{props.StatementTitleBottom}</StatementTitleBottom>
                        </TitlesHolder>                    
                    </IconTextHolder>
                            <StatementSubTitle>{props.StatementSubTitle}</StatementSubTitle>
                </StatementCardContainer>
                </WholeStatementHolder>
            
        </>
    )
}



export default StatementCard
