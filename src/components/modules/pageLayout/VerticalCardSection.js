import React, {Component} from 'react';
import styled from 'styled-components';
import SmallHorizontalCard from '../../modules/SmallHorizontalCard';
import image from '../../../img/placeholder_circle_profile_520x520.jpg';


const Wrapper = styled.div`
    width: 470px;
`

class VerticalCardSection extends Component {

    render() { 
        if(true){
            return (
                <Wrapper>
                    <SmallHorizontalCard CardText="Invesint for charity will do this blah" CardImage={image} />
                    <SmallHorizontalCard CardText="Invesint for charity will do this blah" CardImage={image} /> 
                    <SmallHorizontalCard CardText="Invesint for charity will do this blah" CardImage={image} /> 
                    <SmallHorizontalCard CardText="Invesint for charity will do this blah" CardImage={image} />
                </Wrapper> 
             );
            }
            return(null);
    }
}
 
export default VerticalCardSection;