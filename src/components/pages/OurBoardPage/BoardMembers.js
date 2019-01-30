import React, {Component} from 'react';
import styled from 'styled-components';
import {Card, SectionWrapper} from './../../modules'; 
import {connect} from "react-redux"; 
import {getContent} from "./../../../actions"
import {Loading} from "./../../modules"





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
            {member.map((member) => {
                
                    return (

                        <SectionWrapper key={member._id} height="550px">                        
                            <Card 
                            key={member._id}
                            CardName = {member.title}
                            CardHeading = {member.content.heading} 
                            CardText= {member.content.text}
                            CardImage={member.image ? member.image.secure_url : null} 
                            /> 
                        </SectionWrapper>
                    )
                
            })}

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































// import React, {Component} from "react"; 
// import styled from 'styled-components';
// import HTMLContent from '../../modules/HTMLContent'; 
// import VolunteerCard from './../../modules/VolunteerCard'; 
 









// class BoardMembers extends Component { 
//     render() { 
//         const {memberName, memberHeading, memberText, memberImage} = this.props; 

//         return (  
            
//                 <VolunteerCard 
//                 CardName = {memberName}
//                 CardHeading = {memberHeading} 
//                 CardText= {memberText}
//                 CardImage={memberImage}

//                 />

//         );
//     }
// }
 


// export default BoardMembers;