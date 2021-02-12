import React from 'react'
import {TicketButton} from './GetTicket.elements';
import StatementCard from './StatementCard';
import {ContactUsSection, ContactUsContainer, ContactUsWrapper, ContactUsInfoWrapper, ContactUsTitle, ContactUsSubtitle} from './ContactUs.elements';
import {MdPhoneInTalk} from 'react-icons/md'
import {GrMail} from 'react-icons/gr'
import {IoLocationSharp} from 'react-icons/io5';

const ContactUs = () => {
    return (
        <>
            <ContactUsSection>
                <ContactUsContainer>
                    <ContactUsWrapper>
                        <ContactUsInfoWrapper>
                            <ContactUsTitle style={{marginBottom: '0px'}}>Contact</ContactUsTitle>
                            <ContactUsTitle style={{paddingTop: '0px'}}>With Us Now</ContactUsTitle>
                            <ContactUsSubtitle>Modern museums is to collect, preserve, interpret, and display objects of artistic.</ContactUsSubtitle>
                            <StatementCard stretched="40" StatementTitle="+1(234)567-89-00" icon={<MdPhoneInTalk style={{width: '30px', height: '30px', color: 'black'}}/>}/>
                            <StatementCard stretched="40" StatementTitle="artmuseum@info.com" icon={<GrMail style={{width: '30px', height: '30px', color: 'black'}}/>}/>
                            <StatementCard stretched="40" StatementTitle="artmuseum@info.com" icon={<IoLocationSharp style={{width: '30px', height: '30px', color: 'black'}}
                            />}/>
                            <TicketButton style={{fontFamily: 'duera', marginTop: '20px'}}>BUY TICKET</TicketButton>
                        </ContactUsInfoWrapper>
                    </ContactUsWrapper>
                </ContactUsContainer>
            </ContactUsSection>
        </>
    )
}

export default ContactUs
