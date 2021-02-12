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
                    <ArticlesCard type="Events" date="12 Jan 2021" subtext="Artworks by emerging, established or master artists" distance="25" fullsize="70"/>
                </SideCardHolder>
                <SideCardHolder>
                    <ArticlesImageSide src={sidesecond}/>
                    <ArticlesCard type="Art & Science" date="8 Jan 2021" subtext="Physical galleries, where exhibitions" distance="25" fullsize="70" />
                </SideCardHolder>
                <SideCardHolder>
                    <ArticlesImageSide src={sidethird}/>
                    <ArticlesCard type="History" date="3 Jan 2021" subtext="Space, and virtual galleries, where exhibitions" distance="25" fullsize="70"/>
                </SideCardHolder>
            </SideCardWrapper>
        </>
    )
}

export default ArticlesSideCard
