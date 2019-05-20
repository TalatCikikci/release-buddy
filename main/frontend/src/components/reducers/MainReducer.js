import {combineReducers} from "redux-immutable";
import TabReducer from "./TabReducer";
import RequirementReducer from "./RequirementReducer";

export default function get_reducers () {
    return combineReducers({
        tabs: TabReducer,
        requirements: RequirementReducer
    });
}