import {React, useState, useEffect, useRef} from 'react'
import {ArticlesSection, ArticlesImagesWrapper, ArticlesContainer,
    ImageContainerCenterer, ArticlesTitle, GetTicketWrapper, ArticlesSubtext, NewsletterCardInput, ArticlesWrapper,ImageContainer,GetTicketButton} from './Articles.elements';
import ArticlesCard from './ArticlesCard';
import ArticlesSideCard from './ArticlesSideCard';
import GetTicket from './GetTicket';
import {TicketButton} from './GetTicket.elements';
import {gsap, Power3} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';



const Articles = () => {

    gsap.registerPlugin(ScrollTrigger);

    let TitleAnimation = useRef(null);
    let SubtitleAnimation = useRef(null);
    let SubtitleBotAnimation = useRef(null);
     let ArticleCardAnimation = useRef(null);
     let ArticleTicketAnimation = useRef(null);

    const[ticket,setTicket] = useState(false);

    const ChooseTicket = () =>{
        if(window.innerWidth <= 960){
            setTicket(true);
        }else {
            setTicket(false);
        }
    };

    const ShowTicket = () => {
        if(ticket){
            return(              
            <GetTicket titledistance="70" clicker={<GetTicketButton style={{fontFamily: 'duera', marginBottom: '70px'}}>SUBSCRIBE</GetTicketButton>} fullsize="100" centererdistace="0" buttondistance="0" spacevalue="space-between" title="Newsletter" subtitle="Get your latest news about gallery." value="SUBSCRIBE" colored='#e3f88f'
                        textstyle = "black"field={<NewsletterCardInput type="text" placeholder="Your Email" style={{ borderRadius: '5px', border: 'none',
                        fontSize: "22px", color: 'black'}}/>}/> )
        }else{
            return(
            <GetTicket clicker={<GetTicketButton style={{fontFamily: 'duera'}}>SUBSCRIBE</GetTicketButton>} fullsize="100" centererdistace="150" buttondistance="150" spacevalue="space-between" title="Newsletter" subtitle="Get your latest news about gallery." value="SUBSCRIBE" colored='#e3f88f'
                        textstyle = "black"field={<NewsletterCardInput type="text" placeholder="Your Email" style={{padding: '20px 80px 20px 30px', borderRadius: '5px', border: 'none',
                        fontSize: "22px", color: 'black'}}/>}/>)
        }
    };

    useEffect(() => {
        ChooseTicket();
        ShowTicket();
        console.log(ticket);

        gsap.fromTo(TitleAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
            scrollTrigger: {trigger: TitleAnimation, start: 'top center',toggleActions:'play none none none'}});
        gsap.fromTo(SubtitleAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0.2, ease: Power3.easeOut,
            scrollTrigger: {trigger: SubtitleAnimation, start: 'top center',toggleActions:'play none none none'}});
        gsap.fromTo(SubtitleBotAnimation, {x: 40 , opacity: 0}, {x: 0, opacity: 1, duration: 2, delay: 0.4, ease: Power3.easeOut,
            scrollTrigger: {trigger: SubtitleBotAnimation, start: 'top center',toggleActions:'play none none none'}});
        gsap.fromTo(ArticleCardAnimation, {x: -40 , opacity: 0}, {x: 0, opacity: 1, duration: 1, delay: 0.6, ease: Power3.easeOut,
            scrollTrigger: {trigger: ArticleCardAnimation, start: 'top center',toggleActions:'play none none none'}});
        gsap.fromTo(ArticleTicketAnimation, {y: 60 , opacity: 0}, {y: 0, opacity: 1, duration: 2, delay: 0, ease: Power3.easeOut,
            scrollTrigger: {trigger: ArticleTicketAnimation, start: 'top center+=125',toggleActions:'play none none none'}});

    },[]);

window.addEventListener("resize", ChooseTicket)

    return (
        <>
            <ArticlesSection>
                <ArticlesContainer>
                    <ArticlesWrapper>
                        <ArticlesTitle ref={el => {TitleAnimation = el}}>Latest Articles</ArticlesTitle>
                        <ArticlesSubtext ref={el => {SubtitleAnimation = el}}>Significance for the education of the public. From</ArticlesSubtext>
                        <ArticlesSubtext ref={el => {SubtitleBotAnimation = el}}>a visitor or community perspective.</ArticlesSubtext>
                    </ArticlesWrapper>
                </ArticlesContainer>
                <ImageContainer>
                    <ImageContainerCenterer>
                        <ArticlesImagesWrapper ref={el => {ArticleCardAnimation = el}}>
                            <ArticlesCard type="Exhibitions" date="14 Jan 2021" subtext="An art gallery is a place where
                            one can see and buy" inside="absolute"/>
                        </ArticlesImagesWrapper>
                            <ArticlesSideCard/>
                        </ImageContainerCenterer>
                    </ImageContainer>
                    <GetTicketWrapper ref={el => {ArticleTicketAnimation = el}}>
                        {ShowTicket()}
                    </GetTicketWrapper>
            </ArticlesSection>
        </>
    )
}

export default Articles
