import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {fromJS} from 'immutable';

import DataProvider from "./DataProvider";
import Table from "./Table";
import RequirementModelComponent from './RequirementModel';

import RequirementReducer from "./RequirementReducer";

const initialState = {
    tabs: [
        {name: "Goal Model", id: "model", active: true},
    ],
    requirements: [
        {name: "req1", id: "req1", x: 100, y:200},
        {name: "req2", id: "req2", x: 200, y:100}
    ]
};
let store = createStore(RequirementReducer, fromJS(initialState));

ReactDOM.render(
	<Provider store={store}>
		<div>
			<RequirementModelComponent />
		</div>
	</Provider>,
	document.getElementById('app')
);

const App = () => (
  <DataProvider endpoint="api/v1/goals/goal"
                render={data => <Table data={data} />} />
);

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App />, wrapper) : null;
