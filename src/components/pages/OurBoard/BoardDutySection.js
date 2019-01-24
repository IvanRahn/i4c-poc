import React, {Component} from "react"; 
import styled from 'styled-components'; 
import SectionWrapper from '../../modules/SectionWrapperV2';
import image from './../../../img/cartoon.jpg';
import {connect} from "react-redux"; 
import {getContent} from "./../../../actions"


const ImageContainer = styled.img`
height: auto; 
width: auto; 
max-width: 600px; 
max-height: 600px;
margin: -200px auto 0 auto; 
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
        const {member, memberError, memberIsFetching} = this.props; 
        if (!memberIsFetching && member ) {
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
            } else if (memberError || !member|| !member[0]){
                return <div>error</div>
            }      
            return null
    } 
}

const mapStateToProps = (state) => {
    const {member, memberIsFetching, memberError} = state.member
    return {
        member, 
        memberIsFetching,
        memberError

    }
}

export default connect(mapStateToProps, {getContent})(BoardDutySection);







// const ImageContainer = styled.img`
//     display: flex;
//     flex-direction: column;
//     height: 265px;
//     width: 430px;
    
//     margin: auto; 
//     margin-right: 10em;
// `
// const BreadCrumb = styled.text`
//   display: inline-block;
//   padding: 0.5rem 0;
//   margin: 0.5rem 0rem;
//   width: 32rem;
//   background: green;
//   color: white;
//   border: 2px solid white;
// `
// const DivStyle = styled.div`
//     display: flex;
    
// `

// const TextStyle = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     width: 500px;
    
// `








// class BoardDutySection extends Component {
    
//     render() { 
//         const {dutyImage, boardQuote, boardRespons} = this.props;

//         return (  
           
//                 <DivStyle> 
//                     <div>
//                         <ImageContainer src= {dutyImage}/>
//                     </div>  
//                     <TextStyle>
//                     <BreadCrumb> "ABOUT INVESTING FOR CHARITY LTD > BOARD OF TRUSTEES" </BreadCrumb>
//                         <h3> {boardQuote} </h3> 
//                         <h3> {boardRespons} </h3>
//                     </TextStyle>
//                 </DivStyle>
          
//         );
//     }
// }
 
// export default BoardDutySection; 