import React, {Component} from 'react';
import styled from 'styled-components';
import SectionWrapper from '../../../modules/SectionWrapperV2';
import image from '../../../../img/cartoon.jpg';



class ThirdSection extends Component {
    render () {
        const {color} = this.props;
        return (
            <SectionWrapper color={color}>
                <p>third section</p>
            </SectionWrapper>
        )
    } 
}


export default ThirdSection;
