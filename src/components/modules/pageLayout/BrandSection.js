import React, {Component, Fragment} from 'react';
import styled from 'styled-components';
import {SectionWrapper, Breadcrumb, Link, HTMLContent, InternalLink} from './../../modules';



const ImageContainer = styled.img`
width: 50%;
max-width: 720px;
max-height: 480px;
height: auto; 
position: relative;
top: 0;
`

const SectionLeft = styled.div `
width: ${props => props.width || "100%"};
@media (min-width: 768px){
    width: 50%;
    height: ${props => props.height || "auto"};
    margin-top: 80px;
}
`
const SectionRight = styled.div `
width: ${props => props.width || "100%"};
@media (min-width: 768px){
    width: 50%;
    height: ${props => props.height || "auto"};
}
`

const Wrapper = styled.div`
text-align: left;
padding: 48px;
`

const LinkContainer = styled.div`
margin-top: 30px;
`

class BrandOpener extends Component {

    render () {
        const { color, image1, image2, link, marginTop, information  } = this.props;  
        return (
            <>
            <SectionWrapper align_start color={color} height= "auto" padding="0">
                <SectionLeft height="100%"> 
                    <ImageContainer src= {image1} alt="Brand" />
                    <ImageContainer src= {image2} alt="Brand" />
                    {/* first received child is a vertical list */}
                </SectionLeft>
                <SectionRight>
                    <Wrapper marginTop={marginTop}>
                        {information ? information.map((information) => {

                        return(
                            <Fragment key={information.heading}>
                            <HTMLContent  content={information.heading} />
                            <HTMLContent content={information.text} />
                            </Fragment>
                        )
                        } ) : null}

                        {link ? link.map((link) => {

                        return(
                            <InternalLink text={link.linkText} color={link.linkColor} location={link.linkLocation} key={link.linkText}  />
                        )
                        } ) : null}

                    </Wrapper>               
                </SectionRight>
            </SectionWrapper>
            
            </>  
        )
    } 
}

export default BrandOpener

