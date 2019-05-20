import {Map, fromJS} from 'immutable';

export default function(state, action) {
	switch(action.type) {
		case 'REQUIREMENT_MOVED':
			return state
				.update('u1', _updateRequirementPositionInLine(action))
				.update('u2', _updateRequirementPositionInLine(action));
	}
	return state;
}

function _updateRequirementPositionInLine(action) {
	return connection => connection.map(requirement => {
        if(requirement.get('id') === action.id) {
            return requirement.set('x', action.x).set('y', action.y);
        }
        return requirement;
    })
}