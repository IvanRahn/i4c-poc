import React, {Component} from "react"; 
import styled from 'styled-components'; 
import {SectionWrapper, InternalLink, HTMLContent} from '../../modules';
import {connect} from "react-redux"; 
import {getContent} from "./../../../actions"; 



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

const BorderP = styled.p`
a{
color: white;
width: 450px;
}
background-color: green;
`



class BoardDutySection extends Component {
    componentDidMount() {
        this.props.getContent("our-team/our-promise")
    }
    
    render() { 
        const {promise, promiseError, promiseIsFetching} = this.props; 
        if (promiseIsFetching) {
            return <div>Loading</div>

        } else if (promiseError || !promise|| !promise[0]){
            return <div>error</div>
        }     
        
            return ( 
                <SectionWrapper>
                <Section>
                    <ImageContainer src= {promise[0].image ? promise[0].image.secure_url : null} alt="Cherring man" />
                </Section>

                <Section>
                    <Wrapper>
                        <BorderP>
                        <InternalLink text={promise[0].link.text} />
                        </BorderP>
                        <h1>{promise[0].content.heading}</h1> 
                        <HTMLContent margin="70px" content={promise[0].content.text} />
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

