import React, {Component} from 'react';
import styled from 'styled-components';
import image from "./../../../../img/cartoon.jpg";
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
		console.log('TCL: MoreI4cSection -> render -> causes', causes)
        if (causesIsFetching) {
            return <Loading/>
        } else if (causesError || !causes) {
            return <div>Error</div>
        }
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
                    CardImage={cause.cardImage.secure_url}  />
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
