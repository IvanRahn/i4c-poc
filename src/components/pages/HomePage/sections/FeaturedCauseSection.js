import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper, CauseCard} from "./../../../modules"
import { connect } from 'react-redux';
import {getContent} from "../../../../actions";
import {Link} from "react-router-dom"

const H = styled.h1`
    width:100%;
    text-align: center;
`



class FeacturedCauseSection extends Component {
    
    componentDidMount () {
        this.props.getContent("causes");
        
    }
    render() {
        const {color, causes, causesIsFetching, causesError} = this.props
        console.log("Causes: ", this.props)
        if (!causesIsFetching && causes) {
        return (
            <SectionWrapper color={color}>
                <H>Featured Causes</H>
                {causes.map((cause,i) => {
                    if (i <= 1 && cause.featuredAsCard === "Yes") {
                        return (
                        <Link to={`cause/${cause.slug}`}><CauseCard 
                        key={cause._id}
                        CardHeading={cause.cardContent.heading} 
                        CardText={cause.cardContent.text} 
                        CardImage={cause.cardImage?  
                            cause.cardImage.secure_url 
                            : 
                            null}  
                            />
                        </Link>
                        )
                    }
                    return null
                })}
            </SectionWrapper>
        )
    } else if (causesError) {
        return <div>Error</div>
    }  
        return (
            <div>loading</div>
        )
    }
}
const mapStateToProps = (state) => {
    const {causes, causesIsFetching, causesError} = state.causes
    return {
        causes,
        causesIsFetching,
        causesError
    }
}

export default connect(mapStateToProps, {
    getContent
})(FeacturedCauseSection);
