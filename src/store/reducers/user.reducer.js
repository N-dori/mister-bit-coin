
export const SET_USER = 'SET_USER '
export const ADD_USER = 'ADD_USER '
export const UPDATE_USER = 'UPDATE_USER '
export const REMOVE_USER = 'EMOVE_USER '
export const SPEND_BALANCE = 'SPEND_BALANCE '


const INITIAL_STATE = {
  loggdingUser:null

}
export function userReducers(state=INITIAL_STATE, action = {} ){
  switch (action.type) {
    case SET_USER:
        return {
            ...state,
            loggdingUser: {...action.user}
        }
    
    case ADD_USER:
        return {
            ...state,
            user: [...state.user, action.contact]
        }
    case REMOVE_USER:
        return {
            ...state,
            user: state.user.filter(contact => contact._id !== action.contactId)
        }
    case UPDATE_USER:
        return {
            ...state,
            user: state.user.map(contact => contact._id === action.contact._id ? action.contact : contact )
        }
    case SPEND_BALANCE:
        return {
            ...state,
         filterBy:{...action.filterBy}
        }
        
       
  
    default:
         return state
 
  } 
    
}