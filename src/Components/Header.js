import React from 'react'
import {Button} from '../GlobalStyle';
import {Head, HeaderContainer, HeaderTitle, HeaderButtonHolder, HeaderButton,HeaderTitleBottom,BottomCircle, BottomCircleInner} from './Header.elements';

const Header = () => {
    return (
        <>
            <Head>
                <HeaderContainer>
                    <HeaderTitle>ART </HeaderTitle>
                    <HeaderTitleBottom>GALLERY</HeaderTitleBottom>
                    <BottomCircle/>
                    <BottomCircleInner/>
                    <HeaderButtonHolder>
                        <HeaderButton style={{fontFamily: 'duera'}}>EXHIBITIONS</HeaderButton>
                    </HeaderButtonHolder>
                </HeaderContainer>
            </Head>
            
        </>
    )
}

export default Header
