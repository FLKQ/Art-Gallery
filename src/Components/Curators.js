import React from 'react'
import Card from './Card';
import {CuratorsContainer, CuratorsHolder, CuratorsTitle, CuratorsSubtextTop,
     CuratorsPhotosHolder, AllCuratorsButton, AllCuratorsButtonHolder, CuratorsSubtextBot} from './Curators.elements';
import jaquon from '../Images/Jaquon.jpg';
import nuria from '../Images/Nuria.jpg';
import oluchi from '../Images/Oluchi.jpg';
import tua from '../Images/Tua.jpg';
import './HeaderElements.css';

const Curators = () => {
    return (
        <>
            <CuratorsContainer>
                <CuratorsHolder>
                    <CuratorsTitle>Team Of Curators</CuratorsTitle>
                    <CuratorsSubtextTop>Visitor or community perspective,the purpose
                        
                    </CuratorsSubtextTop>
                    <CuratorsSubtextBot>
                        can also depend on one's poin of view.
                    </CuratorsSubtextBot>
                    <CuratorsPhotosHolder>
                        <Card type="General" title="Jaquon Hart" link={jaquon} widthlol="320" size="350" radius="10"/>
                        <Card type="Art & Science" title="Nuria Pelayo" link={nuria} widthlol="320" size="350" radius="10"/>
                        <Card type="History" title="Oluchi Mazi" link={oluchi} widthlol="320" size="350" radius="10"/>
                        <Card type="Nature" title="Tua Manuera" link={tua} widthlol="320" size="350" radius="10"/>
                    </CuratorsPhotosHolder>
                    <AllCuratorsButtonHolder>
                    <AllCuratorsButton style={{fontFamily: 'duera'}}>ALL CURATORS</AllCuratorsButton>
                    </AllCuratorsButtonHolder>
                </CuratorsHolder>
            </CuratorsContainer>
        </>
    )
}

export default Curators
