import {combineReducers} from "redux-immutable";
import tabs from "./TabReducer";
import requirements from "./requirementReducer";
import auth from "./authReducer";
import addComponent from "./goalGraphReducer";

export default function get_reducers () {
    return combineReducers({
        auth: auth,
        tabs: tabs,
        requirements: requirements,
        nodes: addComponent
    });
}