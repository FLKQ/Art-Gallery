import React from 'react'
import {Button} from '../GlobalStyle';
import {Head, HeaderContainer, HeaderTitle, HeaderButtonHolder, HeaderButton,HeaderTitleBottom,BottomCircle, BottomCircleInner, LeftToTitleImage
, RightToTitleImage, LeftCenterImage, RightCenterImage, TopCircle, TopCircleInner, TopBorder } from './Header.elements';

const Header = () => {
    return (
        <>
            <Head>
                <HeaderContainer>
                    <HeaderTitle>ART </HeaderTitle>
                    <HeaderTitleBottom>GALLERY</HeaderTitleBottom>
                    <BottomCircle/>
                    <BottomCircleInner/>
                    <LeftToTitleImage/>
                    <RightToTitleImage/>
                    <LeftCenterImage/>
                    <RightCenterImage/>
                    <TopCircle/>
                    <TopCircleInner/>
                    <TopBorder/>
                    <HeaderButtonHolder>
                        <HeaderButton style={{fontFamily: 'duera'}}>EXHIBITIONS</HeaderButton>
                    </HeaderButtonHolder>
                </HeaderContainer>
            </Head>
            
        </>
    )
}

export default Header
