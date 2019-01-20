import { combineReducers} from "redux";
import featuredCauseCardReducer from "./featured_cause_cards_reducer"
import impact_reducer from "./impact_reducer"
export default combineReducers({
    causes: featuredCauseCardReducer,
    impact: impact_reducer
});