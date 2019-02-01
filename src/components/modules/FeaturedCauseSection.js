import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper, CauseCard, InternalLink, Loading} from "./"
import { connect } from 'react-redux';
import {getContent} from "./../../actions";

const H = styled.h1`
    width:100%;
    text-align: center;
`
const SVG = styled.svg`
width: 100%;
height: 80px;
margin: auto auto -26px;
padding: 0;
path {
   fill: green;
}
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
                <InternalLink auto="auto" text="view every cause we care about" color="grey"/>
                </Div>
            </SectionWrapper>
                    <SVG viewBox="-20 -20 100 100">
                <path d="m30.5 24.1c0.1-2.8-2.2-9.8-2.2-9.8 0.7 0.1 5.2 6.8 4.7 9.6 4.3-1 7.3-5.1 6.7-9.5l-0.1-0.6c-1-7.4-9.3-12.2-9.7-12.4l-0.9-0.5-0.8 0.7c-0.3 0.2-5.7 5.5-6.3 11.8-0.1 0.8-0.1 1.7 0 2.5l0.1 0.6c0.1 0.7 0.3 1.3 0.5 1.9-5.9-3.5-13.6-2.4-14-2.3l-1.1 0.2-0.1 1.1c0 0.4-0.5 8.6 3.5 14.4 0.5 0.8 1.1 1.5 1.8 2.1l0.5 0.5c2.8 2.6 6.5 3.3 9.7 2.2 0.3-0.1 0.7-0.3 0.9-0.6l0.1-0.1c0.7-0.6 1-1.5 0.8-2.5-0.4-2.7-6.8-7.3-6.8-7.3 0.6-0.3 8 2.8 9 5.4 0 0.1 0 0.1 0.1 0.2 0.2 0.7 0.3 1.5 0.3 2.3l-0.2 13.4h-2.3c-4.4 0.4-8.7 1.4-12.8 3.1-1 0.4-2 1-3.2 1.7 0.1 0.1 0.2 0.1 0.2 0.2 0.5 0.4 0.9 0.8 1.3 1.1 1.1 0.8 2.3 1.5 3.5 2.1 4.3 2.3 9.2 3.7 14.6 3.7 5.3 0 10.4-1.4 14.8-3.8 1.9-0.9 3.7-2 5.4-3.6l0.1-0.1c-3.2-2-6.6-3.1-10.1-3.8-1.9-0.4-3.9-0.4-5.8-0.7l-2.8 0.1 0.1-7.4c1.1 2.4 3.3 4.3 6.1 4.8l0.6 0.1c0.8 0.2 1.7 0.2 2.5 0.2 6.3-0.1 12-5.1 12.3-5.3l0.8-0.7-0.4-1c-0.2-0.4-4.3-9.1-11.6-10.6l-0.6-0.1c-2.7-0.6-5.5 0.3-7.4 2 3.1 0.9 7.3 4.1 7.4 4.7 0 0-6.4-2.8-9.3-2.3 0 0 0 0.1-0.1 0.1l0.2-7.8z"/>
                </SVG>
            
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
