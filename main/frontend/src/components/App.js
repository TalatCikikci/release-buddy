import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {combineReducers} from 'redux-immutable';
import {fromJS} from 'immutable';

import {HeaderComponent} from './Header';
import {RequirementModelComponent} from './RequirementModel';

import TabReducer from './TabReducer';
import RequirementReducer from "./RequirementReducer";

const reducer = combineReducers({
	tabs: TabReducer,
	requirements: RequirementReducer
});

const initialState = {
    tabs: [
        {name: "Goal Model", id: "model", active: true},
        {name: "Add Goals", id: "goals", active: false }
    ],
    requirements: {
        u1: [
            {name: "req1", id: "req1", x: 100, y:50}
        ],
        u2: [
            {name: "req2", id: "req2", x: 100, y:100}
        ]
    }
};

let store = createStore(reducer, fromJS(initialState));

const App = () => (
   <Provider store={store}>
		<div>
           <HeaderComponent/>
           <RequirementModelComponent/>
		</div>
	</Provider>
);

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App />, wrapper) : null;
