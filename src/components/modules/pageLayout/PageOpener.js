import React, {Component, Fragment} from 'react';
import styled from 'styled-components';
import {SectionWrapper, Breadcrumb, Link, HTMLContent, InternalLink, ErrorBoundary} from '..';

const ImageContainer = styled.img`
width: 100%;
max-width: 720px;
max-height: 480px;
height: auto; 
position: relative;
top: 0;
`

const Section = styled.div `
width: ${props => props.width || "100%"};
    h1 {
        margin-top: 32px;
        @media (min-width: 500px) {
        text-align: left;
        }
    }
@media (min-width: 768px){
    width: 50%;
    height: ${props => props.height || "auto"};
}
`

const Wrapper = styled.div`
text-align: left;
padding: 48px 24px;
h2{
    margin-top: 60px;
}

h3{
    margin-top: 60px;
}

@media (min-width: 768px){
    margin-top: ${props => props.marginTop || "20%"};
}
`
const LinkContainer = styled.div`
margin-top: 30px;
`

class PageOpener extends Component {

    render () {
        const { color, image, breadcrumbs, children, link, marginTop, information, padding  } = this.props;  
        return (
            <ErrorBoundary>
            <SectionWrapper align="flex-start" color={color} height= "auto" padding={padding}>
                <Section height="100%">
                        <Breadcrumb mobile>
                            {breadcrumbs ? breadcrumbs.map(breadcrumb => <Link key={breadcrumb.text} to={breadcrumb.to} text={breadcrumb.text} />) : null} 
                        </Breadcrumb>    
                    <ImageContainer src= {image} alt="Cherring man" />
                    {/* first received child is a vertical list */}
                    {children[0]}
                </Section>
                <Section>
                    <Wrapper marginTop={marginTop}>
                        <Breadcrumb>
                            {breadcrumbs ? breadcrumbs.map(breadcrumb => <Link key={breadcrumb.text} to={breadcrumb.to} text={breadcrumb.text} />) : null}             
                         </Breadcrumb>  

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
                            <LinkContainer key={link.linkText}>
                                <InternalLink text={link.linkText} color={link.linkColor} to={link.linkLocation} section={link.linkSection}  />
                            </LinkContainer>
                        )
                        } ) : null}


                    </Wrapper>               
                </Section>
                        {/* second received child is horizontal list*/}
                        {children[1]}
                        {/* third received child is  vertical list again, but for desktop view it is rendered here*/}
                        {children[2]}

            </SectionWrapper>
            
            </ErrorBoundary>        )
    } 
}

export default PageOpener

