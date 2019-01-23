import React, {Component} from 'react';
import styled from 'styled-components';
import SectionWrapper from '../../../modules/SectionWrapperV2';
import image from '../../../../img/cartoon.jpg';



class FirstSection extends Component {
    render () {
        const {color} = this.props;
        
        return (
            <SectionWrapper color={color}>
                <p>First section</p>
            </SectionWrapper>
        )
    } 
}


export default FirstSection;
