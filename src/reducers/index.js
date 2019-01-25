import { combineReducers} from "redux";
import featuredCauseCardReducer from "./featured_cause_cards_reducer";
import impact_reducer from "./impact_reducer";
import cause_reducer from "./cause_reducer"; 
import our_team_our_promise_reducer from "./our_team_our_promise_reducer";
import our_team_members_reducer from "./our_team_members_reducer";
import our_team_find_out_reducer from "./our_team_find_out_reducer";
import how_it_works_steps_reducer from "./how_it_works_steps_reducer"

export default combineReducers({
    causes: featuredCauseCardReducer,
    impact: impact_reducer,
    cause: cause_reducer,
    promise: our_team_our_promise_reducer,
    member: our_team_members_reducer,
    findout: our_team_find_out_reducer,
    steps: how_it_works_steps_reducer,
});