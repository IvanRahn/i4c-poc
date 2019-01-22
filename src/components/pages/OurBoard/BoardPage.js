import React, { Component } from "react";
import BoardDutySection from "./BoardDutySection";
import image from "./../../../img/cartoon.jpg";
import styled from 'styled-components';
import BoardMembers from "./BoardMembers";
import {connect} from "react-redux";
import {getContent} from "./../../../actions";


const H = styled.h1`
    width:100%;
    text-align: center;
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
                    {member.map((member) => {
                     
                        return ( 
                            
                            
                            
                            <BoardMembers 
                                key={member._id}
                                CardHeading={member.content.heading} 
                                CardText={member.content.text} 
                                CardImage={member.image ?  member.image.secure_url : null}  
                            />
                        )
                    })}

                </div>
            ) 
            
            } else if (memberError || !member|| !member[0]){
                return <div>error</div>
            } 
            
    
        return (
            
            <>
                

                
            </>
        );
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




    // <BoardDutySection 
    //                 boardQuote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta porta turpis, vitae placerat nibh tristique nec. Praesent auctor, enim nec iaculis convallis, lacus arcu facilisis est, quis auctor nisi erat vitae mi. Cras et nunc eu mauris luctus tempus sit amet sed nulla. Sed vehicula dapibus faucibus. Nullam cursus, libero sit amet viverra sodales, dolor enim tristique purus, a bibendum mi nibh sed lectus."

    //                 dutyImage = {image} 

    //                 boardRespons = "Praesent auctor, enim nec iaculis convallis, lacus arcu facilisis est, quis auctor nisi erat vitae mi. Cras et nunc eu mauris luctus tempus sit amet sed nulla. Sed vehicula dapibus faucibus. Nullam cursus, libero sit amet viverra sodales, dolor enim tristique purus " 
    //                 /> 