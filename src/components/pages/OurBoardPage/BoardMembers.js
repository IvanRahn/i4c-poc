import React, {Component} from 'react';
import styled from 'styled-components';
import VolunteerCard from './../../modules/VolunteerCard'; 
import {connect} from "react-redux"; 
import {getContent} from "./../../../actions"
import SectionWrapper from '../../modules/SectionWrapperV2';





class BoardMembers extends Component {
    componentDidMount() {

        this.props.getContent("our-team/members")
    }
    
    render() { 
        const {member, memberError, memberIsFetching} = this.props;  
        if (!memberIsFetching && member ) {       
            return ( 
            <>
            {member.map((member) => {
                
                    return (

                        <SectionWrapper height="550px">                        
                            <VolunteerCard 
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