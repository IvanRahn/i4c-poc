import { combineReducers} from "redux";
import featuredCauseCardReducer from "./featured_cause_cards_reducer"
import impact_reducer from "./impact_reducer"
import board_members_reducer from "./board_members_reducer";
export default combineReducers({
    causes: featuredCauseCardReducer,
    impact: impact_reducer,
    member: board_members_reducer,
});