import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper, CauseCard, InternalLink, Loading, TreeSVG} from ".."
import { connect } from 'react-redux';
import {getContent} from "../../../actions";

const H = styled.h1`
    width:100%;
    margin-bottom: 40px;
    text-align: left;
    @media only screen and (min-width: 500px) {
    text-align: center;
        
    }
    @media only screen and (min-width: 960px) {
        margin-bottom: 88px;
    }
`

const Div = styled.div`
width: 100%;
text-align: center; 
padding: 24px;
`


class FeacturedCauseSection extends Component {
    componentDidMount () {
        this.props.getContent("causes");
    }
    render() {
        const {color, causes, causesIsFetching, causesError, cardCount, tree} = this.props
        if (causesIsFetching) {
            return <Loading/>
        } else if (causesError || !causes) {
            return <div>Error</div>
        }
        return (
            <>
            <SectionWrapper 
            color={color} 
            height="auto"
            padding="72px 24px"
            mobilePadding="48px 24px"
            >
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
                <InternalLink width="auto" to="/cause" text="view every cause we care about" color="grey"/>
                </Div>
            </SectionWrapper>
                {tree ? <TreeSVG color="green"/> : null}
            
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
