import React, {Component} from 'react';
import styled from 'styled-components';
import {ImpactCard} from '..';


const Wrapper = styled.div`
grid-column: auto;
margin-bottom: 24px;
    display: ${props => props.display === "desktop" ? "none" : "block"};    
    @media only screen and (min-width: 768px) {
    display: ${props => props.display === "mobile" ? "none" : "block"}
    }
`
const Container = styled.div`
width: 80%;
display: grid;
grid-column-gap: 24px;
grid-row-gap: 24px;
grid-template-columns: 100%;
@media only screen and (min-width: 500px){
grid-template-columns: 50% 50%;
}
@media only screen and (min-width: 960px) {
   
grid-template-columns: 33% 33% 33%;
} 
`

class HorizontalCardSection extends Component {
    render() { 
            const {content, display} = this.props
            return (
                <Container>
                    {content.map((content) => {
                    return (
                        <Wrapper display={display} key={content._id}>
                            <ImpactCard
                            text={content.text}
                            image={content.image.secure_url}
                            heading={content.heading}
                            />
                         </Wrapper>
                    )
                    }) }

                    </Container>
             );
            }
}


export default HorizontalCardSection;