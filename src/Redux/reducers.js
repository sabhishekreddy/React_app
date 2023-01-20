

function customreducer(state={user: "abhishekreddy77373@gmail.com"},action){
    switch(action.type){
        case "AddUser":
            return {
                ...state,
                user:action.payload.user,
            }
        default:
            return state;       
    }
}

export default customreducer;