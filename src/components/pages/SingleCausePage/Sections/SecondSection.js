import React from 'react';
import {SectionWrapper, InternalLink, ProposalCardAnchor, QuoteCard} from '../../../modules';
import  styled  from 'styled-components';

const Div = styled.div`
    width: 100%;
    padding: 0 24px 24px;
    max-width: 500px;
    @media only screen and (min-width: 500px) {
        width: 50%;
    }
`
const Hr = styled.hr`
    border: 1px solid black;
    width: 80%;
`


const SecondSection = ({cause}) => {
    return (
        <>
            <Hr/>
        <SectionWrapper height="auto" justify="space-around"padding="52px 24px">
            <Div> 
                <h2>Test Heading</h2>
                <p>always pass 3 children, 1st and 2nd are the same vertical list (for mobile and desktop layout they go in different places, 3rd one is horizontal list), if there's no vertical or horizontal list on the page pass an empty fragment " </p>
            </Div>
            <Div>
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
        </>
    )
}
export default SecondSection