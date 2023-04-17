
export const userService ={
    getUser,
}
const USER_KEY = 'userDB'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

const user = {
name: "Ochoa Hyde",
coins: 100,
moves: []
}


function getUser(){
    return user
}

function signup (credentials){

    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}