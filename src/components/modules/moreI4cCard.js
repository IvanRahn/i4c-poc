import React, {Component} from "react";
import styled from "styled-components";

const StyledCard = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
border-radius: 5px;

`
const DivContainer = styled.div`
padding: 2px 16px;
`

class MoreI4cCard extends Component {
    
    render(){

        const {CardText, CardHeading} = this.props;

        return(
            <div>
                <StyledCard>
                    <DivContainer>
                        <h3>{CardHeading}</h3>
                        <p>{CardText}</p>
                    </DivContainer>
                </StyledCard>
            </div>
        )
    }
}

export default MoreI4cCard;