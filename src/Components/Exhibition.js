import React from 'react'
import {ExhibitionSection, ExhibitionContainer, NavigationHolder, NavigationMenu, NavigationItem, NavigationLinks,
    ExhibitionTitle, SubTitle,CardHolder} from './Exhibition.elements';
import Card from './Card';
import Mask from '../Images/nex.jpg';



const Exhibition = () => {
    return (
        <>
            <ExhibitionSection>
                    <ExhibitionContainer>
                            <NavigationHolder>
                                <ExhibitionTitle>Current Exhibition</ExhibitionTitle>
                                <SubTitle>The purpose of modern museums is to collect, preserve, interpret, and display objects.</SubTitle>
                                    <NavigationMenu>
                                        <NavigationItem>    
                                            <NavigationLinks to='/'>See All</NavigationLinks>
                                        </NavigationItem>
                                        <NavigationItem>    
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
                            <Card type="General" title="Galleries have multiple roles,both visible and invisible" date="1 Jan - 7 Jan 2021" link={Mask}/>
                            <Card type="General" title="Galleries have multiple roles,both visible and invisible" date="1 Jan - 7 Jan 2021" link={Mask}/>
                            <Card type="General" title="Galleries have multiple roles,both visible and invisible" date="1 Jan - 7 Jan 2021" link={Mask}/>
                            <Card type="General" title="Galleries have multiple roles,both visible and invisible" date="1 Jan - 7 Jan 2021" link={Mask}/>
                            <Card type="General" title="Galleries have multiple roles,both visible and invisible" date="1 Jan - 7 Jan 2021" link={Mask}/>
                            </CardHolder>
                    </ExhibitionContainer>
            </ExhibitionSection>
            
        </>
    )
}

export default Exhibition
