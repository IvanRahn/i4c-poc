import React, {Component} from "react";
import BoardDutySection from "./BoardDutySection";
import BoardMembers from "./BoardMembers";
import FindOutMore from "./FindOutMore";

class BoardPage extends Component {
    render() {
        return (
            <>
                <BoardDutySection />
                <BoardMembers />
                <FindOutMore /> 
            </>
        );
    }
}


export default BoardPage; 
