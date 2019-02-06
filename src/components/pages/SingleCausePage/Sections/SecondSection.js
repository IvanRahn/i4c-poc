import React from 'react';
import {SectionWrapper, ProposalCardAnchor, QuoteCard, ErrorBoundary} from '../../../modules';
import  styled  from 'styled-components';
import {brandGrey} from "./../../../modules/BrandStyle"
const Div = styled.div`
    width: 100%;
    padding: 0 24px;
    margin-bottom: 40px;
    max-width: 500px;
    h2 {
        text-align: left;
    }
    @media only screen and (min-width: 500px) {
        width: ${props => props.width || "50%"};
    }
`
const Hr = styled.hr`
    border: 1px solid ${brandGrey};
    width: 80%;
    display: none;
    @media only screen and (min-width: 500px) {
        display: block;
        margin-top: 52px;
    }
`
const Download = styled.a`
  border-bottom: 3px solid white;
    display: inline-block;
    color: white;
    text-decoration: none;	
    width: fit-content;
    margin: 12px 8px 16px;
    padding-bottom: 8px;
    font-size: 16px;
    :hover, :focus {
        color: blue;
    }
`


const SecondSection = ({cause}) => {
    return (
        <ErrorBoundary>
            <Hr/>
        <SectionWrapper height="auto" justify="space-around" padding="52px 0 0">
            <Div width="40%"> 
                <h2>Test Heading</h2>
                <p>always pass 3 children, 1st and 2nd are the same vertical list (for mobile and desktop layout they go in different places, 3rd one is horizontal list), if there's no vertical or horizontal list on the page pass an empty fragment " </p>
            </Div>
            <Div width="60%">
                <ProposalCardAnchor
            key={cause._id}
            to={`cause/${cause.slug}`}
            CardHeading={cause.middleSection.heading} 
            CardText={cause.middleSection.text} 
            CardImage={
              cause.middleSection.cardIcon ?  cause.middleSection.cardIcon.secure_url : null
            }
            >
            
            <Download href={cause.middleSection.cardFile ? cause.middleSection.cardFile.secure_url : null}>
             
            DOWNLOAD PDF
            </Download>
            </ProposalCardAnchor></Div>
            <QuoteCard
            quote="I'm a very motivational quote
            I'm a very motivational quote
                    I'm a very motivational quote"
            author="I'm the author"
            />
        </SectionWrapper>
        </ErrorBoundary>
            )
}
export default SecondSection