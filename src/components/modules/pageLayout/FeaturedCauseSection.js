import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper, CauseCard, InternalLink, Loading, TreeSVG} from ".."
import { connect } from 'react-redux';
import {getContent} from "../../../actions";

const H = styled.h1`
    width:100%;
    text-align: center;
`

const Div = styled.div`
width: 100%;
text-align: center; 
padding: 12px;
`


class FeacturedCauseSection extends Component {
    componentDidMount () {
        this.props.getContent("causes");
    }
    render() {
        const {color, causes, causesIsFetching, causesError, cardCount} = this.props
        if (causesIsFetching) {
            return <Loading/>
        } else if (causesError || !causes) {
            return <div>Error</div>
        }
        return (
            <>
            <SectionWrapper color={color} height="auto">
                <H>Featured Causes</H>
                {this.props.children}
                {causes.filter(cause => cause.featuredAsCard).map((cause, i) => {
                    
                    if (i < cardCount) {
                        return (
                        
                        <CauseCard 
                        key={cause._id}
                        to={`cause/${cause.slug}`}
                        CardHeading={cause.cardContent.heading} 
                        CardText={cause.cardContent.text} 
                        CardImage={cause.cardContent.image?  
                            cause.cardContent.image.secure_url 
                            : 
                            null}  
                            />
                        )
                    }
                    return null
                })}
                <Div>
                <InternalLink auto="auto" to="/cause" text="view every cause we care about" color="grey"/>
                </Div>
            </SectionWrapper>
                <TreeSVG color="green"/>
            
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

export default connect(mapStateToProps, {
    getContent
})(FeacturedCauseSection);
