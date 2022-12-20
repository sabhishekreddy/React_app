

function customreducer(state,action){
    if(action.type === "AddUser")
        return {
            ...state,
            user:action.payload.user,
        }
}

export default customreducer;