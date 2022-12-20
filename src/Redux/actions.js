
function adduser(user){
    return {
        type: "AddUser",
        payload: {
            description: user,
        }
    }
}

export default adduser;