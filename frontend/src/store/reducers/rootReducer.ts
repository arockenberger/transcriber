import { firebaseReducer } from "react-redux-firebase"
import { combineReducers } from "redux"
import authReducer from "./authReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
})

export default rootReducer