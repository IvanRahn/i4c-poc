import { combineReducers} from "redux";
import impact_reducer from "./impact_reducer";
import cause_reducer from "./cause_reducer"; 
import board_members_reducer from "./board_members_reducer";
import aboutFirstSection from "./about_first_section";
import aboutSecondSection from "./about_second_section";
import aboutThirdSection from "./about_third_section";
import aboutVolunteerSection from "./about_volunteer_section";
import homePageTeamSectionReducer from "./home_page_team_section"
import howItWorksStepsReducer from "./how_it_works_steps_reducer"

export default combineReducers({
    impact: impact_reducer,
    causes: cause_reducer,
    member: board_members_reducer,
    aboutFirst: aboutFirstSection,
    aboutSecond: aboutSecondSection,
    aboutThird: aboutThirdSection,
    aboutVolunteer: aboutVolunteerSection,
    steps: howItWorksStepsReducer,
    teamSection: homePageTeamSectionReducer,
});