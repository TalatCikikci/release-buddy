const initState = {
    newNodes: []
};

const goalGraphReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_NODE':
            return {
                ...state,
                newNodes: action.nodeName
            };
        default:
            return state
    }
};

export default goalGraphReducer
/*




function addComponent(state = { initState }, action) {
    return Object.assign({}, state, {newNodes : [action.nodeName]});
}

export default addComponent
*/
