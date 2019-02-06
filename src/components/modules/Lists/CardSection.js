import React, {Component} from 'react';
import styled from 'styled-components';
import {ImpactStatsCard} from '..';



const Div = styled.div `
    display: flex;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0 24px;
@media only screen and (min-width: 960px){
}
`

class CardSection extends Component {
    render() { 
            const { content} = this.props
			console.log('TCL: CardSection -> render -> content', content)
            return (
                <>
               <Div>
                    {content.map((content, i) => {
                    return (
                        <ImpactStatsCard 
                        value = {content.value}
                        text={content.text}
                        image={content.image}
                         key={content.image ? content.image.secure_url : i}/>
                    )
                    }) }
</Div>
                </>
             );
            }
}


export default CardSection;