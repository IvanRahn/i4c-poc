import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWithWave, Loading, MoreI4cCard} from "../../../modules";
import { connect } from 'react-redux';
import getContent from '../../../../actions/keystoneActions';
import { brandWhite } from '../../../modules/BrandStyle';

const H = styled.h1`
width: 100%;
text-align: center;
margin-bottom: 88px;
color: ${brandWhite};
`
class DonateSection extends Component {
    componentDidMount() {
        this.props.getContent("causes/donate-card")
        
    }
    render() {

        const {color, content, isFetching, error} = this.props;
        if (isFetching) {
            return (<Loading/>)
            } else if (error || !content || !content[0]){
                return <div>error</div>
            }
        
        
        return (
            <>

            <SectionWithWave id="HowItWorks" color={color} height="auto" padding="52px 0 52px" >
                <H>Donate once, give forever</H>

                {content.map((content) => {
                        return (
                            <MoreI4cCard
                            key={content._id} 
                            CardText={content.text}
                            CardImage={content.image ? content.image.secure_url : null}
                            CardHeading={content.heading}
                            />
                        )
                }) }

            </SectionWithWave>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    const {content, isFetching, error} = state.causeDonateCard
    return {
        content,
        isFetching,
        error,
    }
}
export default connect(mapStateToProps, {
    getContent
})(DonateSection);
