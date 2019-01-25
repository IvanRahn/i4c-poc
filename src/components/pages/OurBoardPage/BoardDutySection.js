import React, {Component} from "react"; 
import styled from 'styled-components'; 
import SectionWrapper from '../../modules/SectionWrapperV2';
import image from './../../../img/handshake.jpg';
import {connect} from "react-redux"; 
import {getContent} from "./../../../actions"


const ImageContainer = styled.img`
height: auto; 
width: auto; 
max-width: 600px; 
max-height: 600px;
margin: -140px auto 0 auto; 
`

const Section = styled.div `
width: ${props => props.width || "100%"};
text-align: center;
@media (min-width: 768px){
    width: 50%;
}
`
const Wrapper = styled.div`
text-align: left;
padding-right: 180px;
`
const P = styled.p`
margin-bottom: ${props => props.margin || "0px"};

`

const BorderP = styled.p`
color: white;
background-color: green;
`



class BoardDutySection extends Component {
    componentDidMount() {
        this.props.getContent("our-team/our-promise")
    }
    
    render() { 
        const {promise, promiseError, promiseIsFetching} = this.props; 
        if (!promiseIsFetching && promise ) {
            return ( 
                <SectionWrapper>
                <Section>
                    <ImageContainer src= {image} />
                </Section>

                <Section>
                    <Wrapper>
                        <BorderP>ABOUT INVESTING FOR CHARITY LTD>BOARD OF TRUSTEES</BorderP>
                        <h1>"Our Promise To You Quote"</h1> 
                        <P margin="70px">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</P>
                    </Wrapper>               
                </Section>
            </SectionWrapper>
        )
            } else if (promiseError || !promise|| !promise[0]){
                return <div>error</div>
            }      
            return null
    } 
}

const mapStateToProps = (state) => {
    const {promise, promiseIsFetching, promiseError} = state.promise
    return {
        promise, 
        promiseIsFetching,
        promiseError

    }
}

export default connect(mapStateToProps, {getContent})(BoardDutySection);

