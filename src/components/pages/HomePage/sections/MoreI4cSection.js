import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper, MoreI4cCard} from "../../../modules";
import {connect} from "react-redux";
import {Loading} from "./../../../modules"


const H = styled.h1`
    color: white;
    width:100%;
    text-align: center;
`

class MoreI4cSection extends Component {
    render() {
        const {color, causes, causesError, causesIsFetching} = this.props;
		
        if (causesIsFetching) {
            return <Loading/>
        } else if (causesError || !causes || !causes[0]) {
            return <div>Error</div>
        }
        console.log('TCL: MoreI4cSection -> render -> causes', causes)
        return (
            <>
            <SectionWrapper height="auto" color={color}>
                <H>More from I4C</H>
                {causes.map(cause => {
                    return (
                    <MoreI4cCard 
                    key={cause._id}
                    CardHeading={cause.cardContent.heading}
                    CardText={cause.text} 
                    CardImage={cause.cardContent.image.secure_url}  />
                    )
                })}
                    
            </SectionWrapper>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    const {causes, causesIsFetching, causesError} = state.cause
    return {
        causes,
        causesIsFetching,
        causesError
    }
}
export default connect(mapStateToProps)(MoreI4cSection);
