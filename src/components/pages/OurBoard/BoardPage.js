import React, { Component } from "react";
import BoardDutySection from "./BoardDutySection";
import image from "./../../../img/cartoon.jpg";
import styled from 'styled-components';
import BoardMembers from "./BoardMembers";
import {connect} from "react-redux";
import {getContent} from "./../../../actions";
import {SectionWrapper} from "../../modules"; 
import FindOutMore from "./FindOutMore";


const H = styled.h1`
    width:100%;
    text-align: center;
`
const BoardDiv = styled.div `
display: flex;
flex-direction: column;
margin-top: 4em;
`

class BoardPage extends Component { 
    componentDidMount() {
        this.props.getContent("our-team")
    }
    
    render() { 
        const {member, memberError, memberIsFetching} = this.props; 
        console.log("Members: ", this.props)
        if (!memberIsFetching && member ) {
            console.log("member", member);
            return ( 

                <div>
                    <H>Board Memebers</H>
                    <SectionWrapper> 

                        <BoardDutySection 
                            boardQuote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta porta turpis, vitae placerat nibh tristique nec. Praesent auctor, enim nec iaculis convallis, lacus arcu facilisis est, quis auctor nisi erat vitae mi. Cras et nunc eu mauris luctus tempus sit amet sed nulla. Sed vehicula dapibus faucibus. Nullam cursus, libero sit amet viverra sodales, dolor enim tristique purus, a bibendum mi nibh sed lectus."

                            dutyImage = {image} 

                            boardRespons = "Praesent auctor, enim nec iaculis convallis, lacus arcu facilisis est, quis auctor nisi erat vitae mi. Cras et nunc eu mauris luctus tempus sit amet sed nulla. Sed vehicula dapibus faucibus. Nullam cursus, libero sit amet viverra sodales, dolor enim tristique purus " 
                        /> 
                </SectionWrapper> 
                <SectionWrapper> 
                        <BoardDiv>
                            {member.map((member) => {
                            
                                return ( 

                        <BoardMembers 
                            key={member._id}
                            memberName={member.title}
                            memberHeading={member.content.heading} 
                            memberText={member.content.text} 
                            memberImage={member.image ?  member.image.secure_url : null}  
                        />
                            )
                        })} 
                        </BoardDiv>
                </SectionWrapper>
                <SectionWrapper>

                    <FindOutMore 
                    message="What if we told you a singel donation can continuously fund a charity? "
                    />
                </SectionWrapper>

                </div>
            ) 
        } else if (memberError || !member|| !member[0]){
                return <div>error</div>
            } 
        
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
    
    export default connect(mapStateToProps, {getContent})(BoardPage); 