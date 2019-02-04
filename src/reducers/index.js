import { combineReducers} from "redux";
import impact_reducer from "./impact_reducer";
import cause_reducer from "./cause_reducer"; 
import our_team_our_promise_reducer from "./our_team_our_promise_reducer";
import our_team_members_reducer from "./our_team_members_reducer";
import our_team_find_out_reducer from "./our_team_find_out_reducer";
import aboutFirstSection from "./about_first_section";
import aboutSecondSection from "./about_second_section";
import aboutLastSection from "./about_last_section";
import aboutVolunteerSection from "./about_volunteer_section";
import homePageTeamSectionReducer from "./home_page_team_section"
import howItWorksStepsReducer from "./how_it_works_steps_reducer"
import causeHomeCard from "./cause_home_card"
import causeHomeVerticalCard from "./cause_home_card_vertical";
import causeHomePageFirstSection from "./cause_homepage_first_section";

export default combineReducers({
    impact: impact_reducer,
    cause: cause_reducer,
    promise: our_team_our_promise_reducer,
    member: our_team_members_reducer,
    findout: our_team_find_out_reducer,
    aboutFirst: aboutFirstSection,
    aboutSecond: aboutSecondSection,
    aboutLast: aboutLastSection,
    aboutVolunteer: aboutVolunteerSection,
    steps: howItWorksStepsReducer,
    teamSection: homePageTeamSectionReducer,
    causeHomeCard: causeHomeCard,
    causeHomeVerticalCard: causeHomeVerticalCard,
    causeHomePageFirstSection: causeHomePageFirstSection,
});