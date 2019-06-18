import authReducer from './authReducer'
import requirementReducer from './requirementReducer'
import { combineReducers } from 'redux'
import addComponent from "./goalGraphReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  requirement: requirementReducer,
  nodes: addComponent,
});

export default rootReducer
