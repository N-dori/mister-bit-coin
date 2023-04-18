import { contactService } from "../../services/contact.service"
import { ADD_CONTACT, REMOVE_CONTACTS, SET_CONTACTS, SET_FILTER_BY, UPDATE_CONTACT } from "../../store/reducers/contact.reducer"
import { userService } from "../../services/user.service"

export function loadContacts(){
    try{

        return async(dispatch,getState)=>{
            const contacts= await contactService.getContacts(getState().contactModule.filterBy)
            const action = {
                type: SET_CONTACTS,
                contacts
            }
           dispatch(action)
    }
     
    }catch(err){
        console.log('can not load contacts',err);
    }
}
export function handelFundsTransfer(currMove,updatedContact){
    try{
        console.log('in actions currMove',currMove);
        return async(dispatch,getState)=>{
          const contact =  await contactService.saveContact({...updatedContact})
            const action = {
                type:UPDATE_CONTACT,
                contact
            }
           dispatch(action)
     
    }
     
    }catch(err){
        console.log('can not handelFundsTransfer',err);
    }
}
export function removeContact(contactId){
    
    return async(dispatch,getState) => {
    try{
            await contactService.deleteContact(contactId)
            const action = {type: REMOVE_CONTACTS, contactId}
            dispatch(action)
    }catch(err){
        console.log('can not remove contact',err);
    }
}
}

export function saveContact(NewContact){
    return async(dispatch,getState) => {
    try{
        if(!NewContact._id){
            const contact=   await  contactService.saveContact(NewContact)
            const action = {type:ADD_CONTACT, contact}
            dispatch(action)

        }else{
            const contact=   await  contactService.saveContact(NewContact)
            const action = {type:UPDATE_CONTACT, contact}
            dispatch(action)
        }
    }catch(err){
        console.log('can not add contact',err);
    }
}

}
export function setFilterBy(filterBy){

    return (dispatch) => {
            const action = {type: SET_FILTER_BY, filterBy}
            dispatch(action)
 
}
}