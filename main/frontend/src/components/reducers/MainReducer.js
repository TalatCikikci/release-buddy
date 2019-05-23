import {combineReducers} from "redux-immutable";
import tabs from "./TabReducer";
import requirements from "./RequirementReducer";
import auth from "./AuthenticationReducer"

export default function get_reducers () {
    return combineReducers({
        auth: auth,
        tabs: tabs,
        requirements: requirements
    });
}