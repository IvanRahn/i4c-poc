import React from 'react';
import {SectionWrapper, InternalLink, ProposalCardAnchor, QuoteCard, ErrorBoundary} from '../../../modules';
import  styled  from 'styled-components';
import {brandGrey} from "./../../../modules/BrandStyle"
const Div = styled.div`
    width: 100%;
    padding: 0 24px;
    margin-bottom: 40px;
    max-width: 500px;
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


const SecondSection = ({cause}) => {
    return (
        <ErrorBoundary>
            <Hr/>
        <SectionWrapper height="auto" justify="space-around" padding="52px 0 0">
            <Div width="40%"> 
                <h3>Test Heading</h3>
                <p>always pass 3 children, 1st and 2nd are the same vertical list (for mobile and desktop layout they go in different places, 3rd one is horizontal list), if there's no vertical or horizontal list on the page pass an empty fragment " </p>
            </Div>
            <Div width="60%">
                <ProposalCardAnchor
            key={cause._id}
            to={`cause/${cause.slug}`}
            CardHeading={cause.cardContent.heading} 
            CardText="<p>always pass 3 children, 1st and 2nd are the same vertical list (for mobile and desktop layout they go in different places, 3rd one is horizontal list), if there's no vertical or horizontal list on the page pass an empty fragment<p>
            <ul>
                <li>fasfasdf</li>
                <li>fasfasdf</li>
                <li>fasfasdf</li>
                <li>fasfasdf</li>
            </ul> " 
            >
            
            <InternalLink text="asdfasDF" color="white"/>
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