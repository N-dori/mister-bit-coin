import { userService } from "../../services/user.service";
import { SET_USER } from "../reducers/user.reducer";


export function loadloggedinUser(){
    try{

        return async(dispatch,getState)=>{
            const user= await userService.getUser()
            const action = {
                type: SET_USER,
                user
            }
           dispatch(action)
    }
     
    }catch(err){
        console.log('can not load User',err);
    }
}
export function sepndBalance(move){
    try{

        return async(dispatch,getState)=>{
            const user= await userService.handelFundsTransfer(move)
            const action = {
                type: SET_USER,
                user
            }
           dispatch(action)
    }
     
    }catch(err){
        console.log('can not load User',err);
    }
}