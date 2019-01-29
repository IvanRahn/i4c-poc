import React, {Component} from 'react';
import styled from 'styled-components';
import {InternalLink, SectionWrapper} from './../../modules';
import {connect} from "react-redux"; 
import {getContent} from "./../../../actions"


const Section = styled.div `
height: 50%;
width: ${props => props.width || "100%"};
text-align: center;
@media (min-width: 768px){
    width: 50%;
}
`


class FindOutMore extends Component {
    componentDidMount() {
        this.props.getContent("our-team/find-out-more")
    }
    
    render() { 
        const {findout, findoutError, findoutIsFetching} = this.props; 
        if (!findoutIsFetching && findout ) {

            return ( 
                <SectionWrapper>
                    <Section width="100%">
                        <h2>All this works because of our Donors.</h2>
                        <InternalLink text="FIND OUT MORE" color="green" />
                    </Section>
                </SectionWrapper>
            )
                } else if (findoutError || !findout|| !findout[0]){
                    return <div>error</div>
                }      
                return null
    } 
}

const mapStateToProps = (state) => {
    const {findout, findoutIsFetching, findoutError} = state.findout
    return {
        findout, 
        findoutIsFetching,
        findoutError

    }
}

export default connect(mapStateToProps, {getContent})(FindOutMore);





















// import React, { Component } from "react";
// import styled from 'styled-components';
// import ButtonLink from "./../../modules/ButtonLink";


// const DivTextStyle = styled.div`
//     display:flex;
//     flex-direction:column;
//     justify-content:center;
//     align-items: center; 
//     font-size:20px;
// ` 





// class FindOutMore extends Component {
    
//     render() { 
//         const {message} = this.props;
//         return (  
//             <DivTextStyle>
//                 {message}
//                 <ButtonLink text="FIND OUT MORE" color={"green"} href="#" />                
//             </DivTextStyle>
//         );
//     }
// }
 
// export default FindOutMore;
