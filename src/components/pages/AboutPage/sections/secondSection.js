import React, {Component} from 'react';
import styled from 'styled-components';
import SectionWrapper from '../../../modules/SectionWrapperV2';
import image from '../../../../img/cartoon.jpg';



class SecondSection extends Component {
    render () {
        const {color} = this.props;
        return (
            <SectionWrapper color={color}>
                <p>second section</p>
            </SectionWrapper>
        )
    } 
}


export default SecondSection;
