const initState = {
    posts: [
        {id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat', x: 25, y:150},
        {id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat', x: 150, y:50},
        {id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat', x: 100, y:100},
        {id: '4', title: 'Something Happened', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat', x: 50, y:25}
    ]
};

const requirementReducer = (state = initState, action) => {
    if (action.type === 'DELETE_REQUIREMENT') {
        let newRequirements = state.posts.filter(requirement => {
            return action.id !== requirement.id
        });
        return {
            ...state,
            requirements: newRequirements
        }
    }
    return state;
};

export default requirementReducer;