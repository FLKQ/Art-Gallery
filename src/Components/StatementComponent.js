import React from 'react'
import StatementCard from './StatementCard';
import {WholeStatementHolder} from './StatementCard.elements';


const StatementComponent = () => {
    return (
        <>
        <WholeStatementHolder>
            <StatementCard StatementTitle="Collect Art" StatementSubTitle="Modern Museums is to collect, preserve,interpret, and display objects
            of artistic,cultural,or scietific"/>
            <StatementCard StatementTitle="Collect Art" StatementSubTitle="Modern Museums is to collect, preserve,interpret, and display objects
            of artistic,cultural,or scietific"/>
            <StatementCard StatementTitle="Collect Art" StatementSubTitle="Modern Museums is to collect, preserve,interpret, and display objects
            of artistic,cultural,or scietific"/> 
        </WholeStatementHolder>
            
        </>
    )
}

export default StatementComponent
