import { combineReducers} from "redux";
import featuredCauseCardReducer from "./featured_cause_cards_reducer";
import impact_reducer from "./impact_reducer";
import cause_reducer from "./cause_reducer"; 
import board_members_reducer from "./board_members_reducer";
import aboutFirstSection from "./about_first_section";
import aboutSecondSection from "./about_second_section";
import aboutThirdSection from "./about_third_section";
import aboutVolunteerSection from "./about_volunteer_section";

import how_it_works_steps_reducer from "./how_it_works_steps_reducer"

export default combineReducers({
    causes: featuredCauseCardReducer,
    impact: impact_reducer,
    cause: cause_reducer,
    member: board_members_reducer,
    aboutFirst: aboutFirstSection,
    aboutSecond: aboutSecondSection,
    aboutThird: aboutThirdSection,
    aboutVolunteer: aboutVolunteerSection,
    steps: how_it_works_steps_reducer,
});