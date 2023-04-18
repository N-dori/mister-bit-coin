import { applyMiddleware, combineReducers,compose, legacy_createStore as createStore } from "redux"
import { contactReducers } from "./reducers/contact.reducer"

import thunk from "redux-thunk"
import { userReducers } from "./reducers/user.reducer"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    contactModule: contactReducers,
    userModule: userReducers
})
export const store = createStore(rootReducer ,composeEnhancers(applyMiddleware(thunk)))

window.gStore = store 