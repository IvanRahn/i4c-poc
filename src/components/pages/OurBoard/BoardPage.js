import React, { } from "react";
import BoardDutySection from "./BoardDutySection";
import image from "./../../../img/cartoon.jpg";
import BoardMembers from "./BoardMembers";




const BoardPage = () => {
        return (
            
            <>
                <BoardDutySection 
                    boardQuote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta porta turpis, vitae placerat nibh tristique nec. Praesent auctor, enim nec iaculis convallis, lacus arcu facilisis est, quis auctor nisi erat vitae mi. Cras et nunc eu mauris luctus tempus sit amet sed nulla. Sed vehicula dapibus faucibus. Nullam cursus, libero sit amet viverra sodales, dolor enim tristique purus, a bibendum mi nibh sed lectus."

                    dutyImage = {image} 

                    boardRespons = "Praesent auctor, enim nec iaculis convallis, lacus arcu facilisis est, quis auctor nisi erat vitae mi. Cras et nunc eu mauris luctus tempus sit amet sed nulla. Sed vehicula dapibus faucibus. Nullam cursus, libero sit amet viverra sodales, dolor enim tristique purus " 
                    /> 

                <BoardMembers 
                    
                    memberName="This is a heading" memberText="This is some text" memberImage={image}  
                    memberName="This is a heading" memberText="This is some text" memberImage={image} 
                    memberName="This is a heading" memberText="This is some text" memberImage={image} 
                
                />
            </>
        );
    }


export default BoardPage