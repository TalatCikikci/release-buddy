const initialState = {
        u1: [
            {name: "req1", id: "req1", x: 25, y:150},
            {name: "req3", id: "req3", x: 150, y:50}
        ],
        u2: [
            {name: "req2", id: "req2", x: 100, y:100},
            {name: "req4", id: "req4", x: 50, y:25}
        ]
};

export default function requirementReducer (state = initialState, action) {

	switch(action.type) {

		case 'REQUIREMENT_MOVED':
			return state
				.update('u1', _updateRequirementPositionInLine(action))
				.update('u2', _updateRequirementPositionInLine(action));

		default:
      		return state;
	}
}

function _updateRequirementPositionInLine(action) {
	return connection => connection.map(requirement => {
        if(requirement.get('id') === action.id) {
            return requirement.set('x', action.x).set('y', action.y);
        }
        return requirement;
    })
}