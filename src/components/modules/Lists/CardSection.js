import React, {Component} from 'react';
import styled from 'styled-components';
import {SmallHorizontalCard} from '..';


const Wrapper = styled.div`
    width: auto;
    margin: 0 24px;
    display: ${props => props.display === "desktop" ? "none" : "block"};    
    @media only screen and (min-width: 768px) {
    display: ${props => props.display === "mobile" ? "none" : "block"}
    }
`
const Div = styled.div `
    display: flex;
    justify-content: center;
    width: auto;
    flex-wrap: wrap;
    margin: 0 24px;
@media only screen and (min-width: 960px){

}
`

class CardSection extends Component {
    render() { 
            const { content , display} = this.props
			console.log('TCL: CardSection -> render -> content', content)
            console.log("PROPS", this.props)
            return (
                <>
               <Div>
                    {content.map((content) => {
                    return (
                        // <Wrapper display={display} key={content._id}>
                        //     <SmallHorizontalCard
                        //     CardText={content.text}
                        //     CardImage={content.image.secure_url}
                        //     mobile={this.props.mobile}
                        //     />
                        // </Wrapper>
                        <ImpactStatsCard 
                        value = {content.value}
                        text={content.text}
                        image={content.image}
                         key={content.image.secure_url}/>
                    )
                    }) }
</Div>
                </>
             );
            }
}


export default CardSection;