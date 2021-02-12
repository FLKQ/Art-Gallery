import React from 'react'
import {FooterMenuHolder, FooterMenuItem, FooterMenuLink} from './Footer.elements';

const FooterMenu = props => {
    return (
        <>
            <FooterMenuHolder>
                <FooterMenuItem style={{marginBottom: '20px'}}>
                    <FooterMenuLink to='/' style={{color: '#e3f88f'}}>{props.title}</FooterMenuLink>
                </FooterMenuItem>
                <FooterMenuItem>
                    <FooterMenuLink to='/'>{props.second}</FooterMenuLink>
                </FooterMenuItem>
                <FooterMenuItem>
                    <FooterMenuLink to='/'>{props.third}</FooterMenuLink>
                </FooterMenuItem>
                <FooterMenuItem>
                    <FooterMenuLink to='/'>{props.fourth}</FooterMenuLink>
                </FooterMenuItem>
                <FooterMenuItem>
                    <FooterMenuLink to='/'>{props.fifth}</FooterMenuLink>
                </FooterMenuItem>
                

            </FooterMenuHolder>
            
        </>
    )
}

export default FooterMenu
