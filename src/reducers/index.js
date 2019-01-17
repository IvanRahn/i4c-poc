import { combineReducers} from "redux";
import contentReducer from "./content_reducer"
export default combineReducers({
    content: contentReducer
});