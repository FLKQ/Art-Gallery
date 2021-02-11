import React from 'react'
import {ArticlesImageSide, SideCardWrapper, SideCardHolder} from './Articles.elements';
import ArticlesCard from './ArticlesCard';
import sidefirst from '../Images/SideFirst.jpg';
import sidesecond from '../Images/SideSecond.jpg';
import sidethird from '../Images/SideThird.jpg'


const ArticlesSideCard = () => {
    return (
        <>
            <SideCardWrapper>
                <SideCardHolder>
                    <ArticlesImageSide src={sidefirst}/>
                    <ArticlesCard type="Events" date="12 Jan 2021" subtext="Artworks by emerging, established or master artists" distance="25" />
                </SideCardHolder>
                <SideCardHolder>
                    <ArticlesImageSide src={sidesecond}/>
                    <ArticlesCard type="Art & Science" date="8 Jan 2021" subtext="Physical galleries, where exhi" distance="25"/>
                </SideCardHolder>
                <SideCardHolder>
                    <ArticlesImageSide src={sidethird}/>
                    <ArticlesCard type="History" date="3 Jan 2021" subtext="An art gallery is a place where
                        one can see and buy" distance="25"/>
                </SideCardHolder>
            </SideCardWrapper>
        </>
    )
}

export default ArticlesSideCard
