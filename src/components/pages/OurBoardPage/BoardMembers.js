import React, {Component} from 'react';
import styled from 'styled-components';
import {HorizontalCard, SectionWrapper} from './../../modules/'; 
import {connect} from "react-redux"; 
import {getContent} from "./../../../actions"
import {Loading} from "./../../modules"


const SmallHorizontalCard = styled(HorizontalCard)`
img {
    border-radius: 50%;
    height: 250px;
    width: 250px;
}
`


class BoardMembers extends Component {
    componentDidMount() {

        this.props.getContent("our-team/members")
    }
    
    render() { 
        const {member, memberError, memberIsFetching} = this.props; 
        console.log(member)
        if (memberIsFetching) {
            return <Loading/>

        } else if (memberError || !member|| !member[0]){
            return <div>error</div>
        }       
             
            return ( 
            <>
                        <SectionWrapper key={member._id} height="auto">                        

            {member.map((member) => {
                
                    return (
                            <SmallHorizontalCard 
                            key={member._id}
                            CardName = {member.title}
                            CardHeading = {member.content.heading} 
                            CardText= {member.content.text}
                            CardImage={member.image ? member.image.secure_url : null} 
                            /> 
                            )
                            
                        })}
                        </SectionWrapper>

            </> 
            )
                
                
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

export default connect(mapStateToProps, {getContent})(BoardMembers);







