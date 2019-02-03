import React from 'react';
import {SectionWrapper, CauseCard, InternalLink} from '../../../modules';
import  styled  from 'styled-components';

const Div = styled.div`
    width: 100%;
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
        <SectionWrapper height="80vh">
            <Div> 
                <p>always pass 3 children, 1st and 2nd are the same vertical list (for mobile and desktop layout they go in different places, 3rd one is horizontal list), if there's no vertical or horizontal list on the page pass an empty fragment " </p>
            </Div>
            <Div><CauseCard 
            key={cause._id}
            to={`cause/${cause.slug}`}
            CardHeading={cause.cardContent.heading} 
            CardText="always pass 3 children, 1st and 2nd are the same vertical list (for mobile and desktop layout they go in different places, 3rd one is horizontal list), if there's no vertical or horizontal list on the page pass an empty fragment " 
            >
            <ul>
                <li>fasfasdf</li>
                <li>fasfasdf</li>
                <li>fasfasdf</li>
                <li>fasfasdf</li>
            </ul>
            <InternalLink text="asdfasDF" color="white"/>
            </CauseCard></Div>
        </SectionWrapper>
        </>
    )
}
export default SecondSection