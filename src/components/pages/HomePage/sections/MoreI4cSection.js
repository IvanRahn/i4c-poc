import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper, MoreI4cCard} from "../../../modules";
import {connect} from "react-redux";
import {Loading} from "./../../../modules"
import {getContent} from '../../../../actions';

const H = styled.h1`
    color: white;
    width:100%;
    text-align: center;
    grid-column: 1;
    @media only screen and (min-width: 500px) {
        grid-column: 1/3;
    };
    @media only screen and (min-width: 960px) {
        grid-column: 1/4;
    }
`
const GridWrapper = styled(SectionWrapper)`
display: grid;
grid-column-gap: 24px;
grid-row-gap: 24px;
grid-template-columns: auto;
@media only screen and (min-width: 500px){
    grid-template-columns: auto auto;
}
@media only screen and (min-width: 960px) {
    grid-template-columns: auto auto auto;
} 
a {
    grid-column: auto;
}


`
class MoreI4cSection extends Component {
    componentDidMount() {
        const {causes} = this.props;
        if(!causes){
        this.props.getContent("impactsection")
        }
    }
    render() {
        const {color, causes, causesError, causesIsFetching} = this.props;
		
        if (causesIsFetching) {
            return <Loading/>
        } else if (causesError || !causes || !causes[0]) {
            return <div>Error</div>
        }
        return (
            <>
            <GridWrapper height="auto" color={color}>
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
                    
            </GridWrapper>
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
export default connect(mapStateToProps, {getContent})(MoreI4cSection);
