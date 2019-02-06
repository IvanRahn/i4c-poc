import React, {Component} from 'react';
import styled from 'styled-components';
import {ImpactStatsCard} from '..';



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
            const { content} = this.props
			console.log('TCL: CardSection -> render -> content', content)
            console.log("PROPS", this.props)
            return (
                <>
               <Div>
                    {content.map((content) => {
                    return (
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