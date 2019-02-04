import { combineReducers} from "redux";
import impact_reducer from "./impact_reducer";
import cause_reducer from "./cause_reducer"; 
import board_members_top_page_reducer from "./board_members_top_page_reducer";
import our_team_our_promise_reducer from "./our_team_our_promise_reducer";
import our_team_members_reducer from "./our_team_members_reducer";
import our_team_find_out_reducer from "./our_team_find_out_reducer";
import aboutFirstSection from "./about_first_section";
import aboutSecondSection from "./about_second_section";
import aboutThirdSection from "./about_third_section";
import aboutVolunteerSection from "./about_volunteer_section";
import homePageTeamSectionReducer from "./home_page_team_section"; 
import howItWorksStepsReducer from "./how_it_works_steps_reducer"; 
import story_cause_reducer from "./story_cause_reducer";
import causeHomeCard from "./cause_home_card"; 
import howItWorksHomePageCard from "./how_it_works_home_page_card_reducer";
import howItWorksTopPage from "./how_it_works_top_page_reducer";
import causeHomeVerticalCard from "./cause_home_card_vertical";

export default combineReducers({
    impact: impact_reducer,
    cause: cause_reducer, 
    boardMembersTopPage: board_members_top_page_reducer,
    promise: our_team_our_promise_reducer,
    member: our_team_members_reducer,
    findout: our_team_find_out_reducer,
    aboutFirst: aboutFirstSection,
    aboutSecond: aboutSecondSection,
    aboutThird: aboutThirdSection,
    aboutVolunteer: aboutVolunteerSection,
    steps: howItWorksStepsReducer,
    teamSection: homePageTeamSectionReducer, 
    storycause: story_cause_reducer, 
    causeHomeCard: causeHomeCard,
    howItWorksHomePageCard: howItWorksHomePageCard, 
    howItWorksTopPage: howItWorksTopPage,
    causeHomeVerticalCard: causeHomeVerticalCard,
});