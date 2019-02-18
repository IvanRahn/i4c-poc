import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper, CauseCard, InternalLink, Loading, TreeSVG} from ".."
import { connect } from 'react-redux';
import {getContent} from "../../../actions";

const H = styled.h1`
    width:100%;
    margin-bottom: 40px;
    text-align: left;
    grid-column: 1/13;
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
grid-column: span 12;
`
const GridWrapper = styled(SectionWrapper)`
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-template-areas: ". content .";
grid-column-gap: 16px;

`
const CardList = styled.div `
grid-column: span 12;
display: flex;
flex-direction: column;
@media only screen and (min-width: 760px) {
    grid-column: 2/12;
    flex-direction: row;
}
`

class FeacturedCauseSection extends Component {
    componentDidMount () {
        const {causes, getContent} = this.props;
        if (!causes) {
        getContent("causes");
        }
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
            <GridWrapper 
            color={color} 
            height="auto"
            padding="72px 24px"
            mobilePadding="48px 24px"
            >
                <H>Featured Causes</H>
                {this.props.children}
                <CardList>
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
                </CardList>
                <Div>
                <InternalLink width="auto" to="/cause" text="view every cause we care about" color="grey"/>
                </Div>
            </GridWrapper>
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
