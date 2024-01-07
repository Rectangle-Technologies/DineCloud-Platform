import { combineReducers } from "redux"
import authReducer from "./authReducer"
import errorReducer from "./errorReducer"
import loadingReducer from "./loadingStateReducer"

// V1
// export default combineReducers({
//     auth: authReducer,
//     errors: errorReducer,
//     loading: loadingReducer,
// })

// V2
const staticReducers = {
    auth: authReducer,
    errors: errorReducer,
    loading: loadingReducer,
}

function createReducer(asyncReducers = {}) {
    return combineReducers({
        ...staticReducers,
        ...asyncReducers,
    })
}

export default createReducer