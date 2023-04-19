import { storageService } from "./storage.service"
export const userService = {
    getUser,
    getEmptyUser,
    signup,
    handelFundsTransfer,
    getEmpyMove,
}
const USER_KEY = 'userDB'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

const user = null


function getUser() {
    return new Promise((resolve) => {
const loggedinUser =storageService.load(STORAGE_KEY_LOGGEDIN_USER)
console.log('loggedinUser',loggedinUser);

resolve(loggedinUser) 
        })


}

function signup(credentials) {
    storageService.store(STORAGE_KEY_LOGGEDIN_USER, credentials)
    return user
}
function getEmptyUser() {
    return {
        name: "",
        coins: 100,
        moves: []
    }
}
function getEmpyMove () {
    return {
    toId: "",
    to: "",
    at: 0, 
    coins: 0,
   }
}
async function handelFundsTransfer(move){

    const user = await getUser()
    user.coins -= move.coins
    user.moves.push(move)
    storageService.store(STORAGE_KEY_LOGGEDIN_USER, user)
    console.log('user',user);
    
    return new Promise((resolve) => {
    
       resolve(user) 
    })

}
//Add the functions:
// - signup(name)
// - addMove(contact, amount)
// Use the local storage to save/ load the user