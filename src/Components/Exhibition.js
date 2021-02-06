import React from 'react'
import {ExhibitionSection, ExhibitionContainer, NavigationHolder, NavigationMenu, NavigationItem, NavigationLinks,
    ExhibitionTitle, SubTitle,CardHolder, ButtonHolder, LoadMoreButton} from './Exhibition.elements';
import {Button} from '../GlobalStyle';
import Card from './Card';
import Mask from '../Images/nex.jpg';
import Magazine from '../Images/second.jpg';
import Abstract from '../Images/third.jpg';
import Cube from '../Images/fourth.jpg';
import Aquarel from '../Images/fifth.jpg';
import Squares from '../Images/sixth.jpg';
import {useState, useEffect} from 'react';


const Exhibition = () => {

    const [color, setColor] = useState(true);
    const [sort, setSort] = useState(false);

    const handleColor = () => setColor(!color);
    const handleSort = () => setSort(!sort);

    function handleBorder() {
        if(color){
            return <NavigationLinks to = '/' style={{borderBottom: '2px solid #8a66ad'}} onClick={handleColor}>See All</NavigationLinks>
        }else
             return <NavigationLinks to='/' onClick={handleColor}>See All</NavigationLinks>
    }

    function handleImage(newDispay){
        if(handleSort){
            let x = document.getElementById("general");
            
        }

    }

    return (
        <>
            <ExhibitionSection>
                    <ExhibitionContainer>
                            <NavigationHolder>
                                <ExhibitionTitle>Current Exhibition</ExhibitionTitle>
                                <SubTitle>The purpose of modern museums is to collect, preserve, interpret, and display objects.</SubTitle>
                                    <NavigationMenu>
                                        <NavigationItem onClick={() => {handleColor(); handleSort(); handleImage('none')}}>    
                                            {handleBorder()}
                                        </NavigationItem>
                                        <NavigationItem id="general">    
                                            <NavigationLinks to='/'>General</NavigationLinks>
                                        </NavigationItem>
                                        <NavigationItem>    
                                            <NavigationLinks to='/'>History</NavigationLinks>
                                        </NavigationItem>
                                        <NavigationItem>    
                                            <NavigationLinks to='/'>Science</NavigationLinks>
                                        </NavigationItem>
                                        <NavigationItem>    
                                            <NavigationLinks to='/'>Technology</NavigationLinks>
                                        </NavigationItem>
                                        <NavigationItem>    
                                            <NavigationLinks to='/'>Art</NavigationLinks>
                                        </NavigationItem>
                                    </NavigationMenu>
                            </NavigationHolder>
                            <CardHolder>
                            <Card type="General" title="Galleries have multiple roles,both visible and invisible" date="1 Jan - 7 Jan 2021" link={Mask}/>
                            <Card type="History" title="Artists,often by going above and beyond the normal work" date="8 Jan - 15 Jan 2021" link={Magazine} size="450"/>
                            <Card type="Science" title="Promoting their artists,and selling the works" date="16 Jan - 23 Jan 2021" link={Abstract}/>
                            <Card type="Technology" title="Financial management or book publishing in order to help" date="24 Jan - 31 Jan 2021" link={Cube}/>
                            <Card type="Art" title="Commision is the percentage of the art sale price" date="1 Feb - 14 Feb 2021" link={Aquarel} size="450"/>
                            <Card type="General" title="Art sale price that a gallery keeps, with the remainder" date="15 Feb - 22 Feb 2021" link={Squares}/>
                            </CardHolder>
                            <ButtonHolder>
                                <LoadMoreButton style={{fontFamily: 'duera'}}>LOAD MORE</LoadMoreButton>
                            </ButtonHolder>
                    </ExhibitionContainer>
            </ExhibitionSection>
            
        </>
    )
}

export default Exhibition
