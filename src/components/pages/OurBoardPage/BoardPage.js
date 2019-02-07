import React, {Component} from "react";
import BoardDutySection from "./BoardDutySection";
import BoardMembers from "./BoardMembers";
import FindOutMore from "./FindOutMore";
import withTracker from '../../google_analytics/withTracker';
import { withRouter } from 'react-router-dom';

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
