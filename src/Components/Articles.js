import React from 'react'
import {ArticlesSection, ArticlesImagesWrapper, ArticlesContainer, ArticlesTitle, ArticlesSubtext, ArticlesWrapper,ImageContainer} from './Articles.elements';
import ArticlesCard from './ArticlesCard';

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
                    <ArticlesImagesWrapper>
                        <ArticlesCard type="Exhibitions" date="14 Jan 2021" subtext="An art gallery is a place where
                        one can see and buy" inside="absolute"/>
                    </ArticlesImagesWrapper>
                    </ImageContainer>
            </ArticlesSection>
        </>
    )
}

export default Articles
