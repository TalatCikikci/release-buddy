import React from "react";
import ReactDOM from "react-dom";
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {combineReducers} from 'redux-immutable';
import {fromJS} from 'immutable';

import {HeaderComponent} from './Header';
import {RequirementModelComponent} from './RequirementModel';
import {RootContainer} from './RootContainer';
import Login from './Login';
import NotFound from './NotFound';

import get_reducers from './reducers/MainReducer';
import Registration from "./Registration";

const release_buddy = get_reducers();

const initialState = {
    tabs: [
        {name: "Goal Model", id: "model", active: true},
        {name: "Add Goals", id: "goals", active: false}
    ],
    requirements: {
        u1: [
            {name: "req1", id: "req1", x: 25, y:150},
            {name: "req3", id: "req3", x: 150, y:50}
        ],
        u2: [
            {name: "req2", id: "req2", x: 100, y:100},
            {name: "req4", id: "req4", x: 50, y:25}
        ]
    },
    auth: {
        token: localStorage.getItem("token"),
        isAuthenticated: null,
        isLoading: true,
        user: null,
        errors: {},
    }
};

let store = createStore(release_buddy, fromJS(initialState), applyMiddleware(thunk));

const App = () => (
        <Provider store={store}>
{/*            <RootContainer />*/}
            <BrowserRouter>
                <HeaderComponent/>
                <Switch>
                    <Route exact path="/release-buddy/register" component={Registration} />
                    <Route exact path="/release-buddy/" component={RequirementModelComponent} />
                    <Route exact path="/release-buddy/login" component={Login} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
	    </Provider>
);

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App />, wrapper) : null;
