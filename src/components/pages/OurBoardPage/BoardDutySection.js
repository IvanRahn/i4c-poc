import React, {Component} from "react"; 
import styled from 'styled-components'; 
import {SectionWrapper, InternalLink} from '../../modules';
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
		console.log(promise)
        if (promiseIsFetching) {
            return <div>Loading</div>

        } else if (promiseError || !promise|| !promise[0]){
            return <div>error</div>
        }     
        
            return ( 
                <SectionWrapper>
                <Section>
                    <ImageContainer src= {promise[0].image? promise[0].image.secure_url : image} alt="Cherring man" />
                </Section>

                <Section>
                    <Wrapper>
                        <BorderP>{promise[0].link}</BorderP>
                        <h1>{promise[0].content.heading}</h1> 
                        <InternalLink text={promise[0].content.link.text} />
                        <P margin="70px"> {promise[0].content.text} </P>
                    </Wrapper>               
                </Section>
            </SectionWrapper>
        )
            
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

