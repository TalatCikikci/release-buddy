import {Map, fromJS} from 'immutable';

const initialState = [
        {name: "Goal Model", id: "model", active: true},
        {name: "Add Goals", id: "goals", active: false}
    ];


export default function tabs (state=initialState, action) {

	switch(action.type) {

		case 'ON_TAB_CLICKED':
			return state.map((tab) => {
				return tab.set('active', tab.get('id') === action.tabId);
			});

		default:
      		return state;
	}
}