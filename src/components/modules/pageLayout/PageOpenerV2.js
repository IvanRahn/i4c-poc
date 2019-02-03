import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper, Breadcrumb, Link, HTMLContent, InternalLink} from './../../modules';



const ImageContainer = styled.img`
width: 100%;
height: auto; 
position: relative;
top: 0;

@media (min-width: 500px){
    width: 100%;
    height: auto; 
    position: relative;
    /* top: -110px; */
}
`
const Section = styled.div `
width: ${props => props.width || "100%"};
@media (min-width: 768px){
    width: 50%;
    height: ${props => props.height || "auto"};
}
`
const Wrapper = styled.div`
text-align: left;
padding: 48px;
@media (min-width: 768px){
    margin-top: 20%;
}
`

const H2 = styled.h2`
margin-top: 80px;
&:empty{
    display: none;
}

`
const LinkContainer = styled.div`
margin-top: 30px;
`

class PageOpener extends Component {

    render () {
        const { color, image, heading, text, breadcrumbs, children, apple } = this.props;        
        return (
            <>
            <SectionWrapper align_start color={color} height= "auto" padding="0">
                <Section height="100%">
                        <Breadcrumb mobile>
                            {breadcrumbs ? breadcrumbs.map(breadcrumb => <Link key={breadcrumb.text} to={breadcrumb.to} text={breadcrumb.text} />) : null} 
                        </Breadcrumb>    
                    <ImageContainer src= {image} alt="Cherring man" />
                    {/* first received child is a vertical list */}
                    {children[0]}
                </Section>
                <Section>
                    <Wrapper>
                        <Breadcrumb>
                            {breadcrumbs ? breadcrumbs.map(breadcrumb => <Link key={breadcrumb.text} to={breadcrumb.to} text={breadcrumb.text} />) : null}             
                         </Breadcrumb>  
                        <h1>{heading}</h1> 
                        <HTMLContent content={text}/>

                        {/* <H2>{heading}</H2>
                        <HTMLContent content={text}/> */}

                        <H2>{apple}</H2>
                        <HTMLContent content={null}/>
                        
                        <LinkContainer>
                            <InternalLink text="DOWNLOAD PDF" color="green" />
                            {/* <InternalLink text="DOWNLOAD PDF" color="green" /> */}
                        </LinkContainer>

                    </Wrapper>               
                </Section>
                        {/* second received child is horizontal list*/}
                        {children[1]}
                        {/* third received child is  vertical list again, but for desktop view it is rendered here*/}
                        {children[2]}
            </SectionWrapper>
            
            </>  
        )
    } 
}

export default PageOpener

