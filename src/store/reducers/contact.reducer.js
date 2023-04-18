
export const SET_CONTACTS = 'SET_CONTACTS '
export const ADD_CONTACT = 'ADD_CONTACT '
export const UPDATE_CONTACT = 'UPDATE_CONTACT '
export const REMOVE_CONTACTS = 'REMOVE_CONTACTS '
export const SET_FILTER_BY = 'SET_FILTER_BY '


const INITIAL_STATE = {
     contacts:null,
        SelectedContactId:null,
           filterBy:{
            email:'',
            name:'',
            phone:'',
}
}
export function contactReducers(state=INITIAL_STATE, action = {} ){
  switch (action.type) {
    case SET_CONTACTS:
        return {
            ...state,
            contacts: action.contacts
        }
    
    case ADD_CONTACT:
        return {
            ...state,
            contacts: [...state.contacts, action.contact]
        }
    case REMOVE_CONTACTS:
        return {
            ...state,
            contacts: state.contacts.filter(contact => contact._id !== action.contactId)
        }
    case UPDATE_CONTACT:
        return {
            ...state,
            contacts: state.contacts.map(contact => contact._id === action.contact._id ? action.contact : contact )
        }
    case SET_FILTER_BY:
        return {
            ...state,
         filterBy:{...action.filterBy}
        }
        
       
  
    default:
         return state
 
  } 
    
}