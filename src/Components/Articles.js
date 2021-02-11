import React from 'react'
import {ArticlesSection, ArticlesImagesWrapper, ArticlesContainer,
    ImageContainerCenterer, ArticlesTitle, ArticlesSubtext, ArticlesWrapper,ImageContainer} from './Articles.elements';
import ArticlesCard from './ArticlesCard';
import ArticlesSideCard from './ArticlesSideCard';
import GetTicket from './GetTicket';

const Articles = () => {
    return (
        <>
            <ArticlesSection>
                <ArticlesContainer>
                    <ArticlesWrapper>
                        <ArticlesTitle>Latest Articles</ArticlesTitle>
                        <ArticlesSubtext>Significance for the education of the public. From</ArticlesSubtext>
                        <ArticlesSubtext>a visitor or community perspective.</ArticlesSubtext>
                    </ArticlesWrapper>
                </ArticlesContainer>
                <ImageContainer>
                    <ImageContainerCenterer>
                        <ArticlesImagesWrapper>
                            <ArticlesCard type="Exhibitions" date="14 Jan 2021" subtext="An art gallery is a place where
                            one can see and buy" inside="absolute"/>
                        </ArticlesImagesWrapper>
                            <ArticlesSideCard/>
                        </ImageContainerCenterer>
                    </ImageContainer>
                    <GetTicket title="Newsletter" subtitle="Get your latest news about gallery." value="SUBSCRIBE" colored='#e3f88f'/>
            </ArticlesSection>
        </>
    )
}

export default Articles
