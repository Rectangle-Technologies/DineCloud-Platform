import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
} from "redux"
import thunk from "redux-thunk"
import rootReducer from "./services/rootService"

const initialState = {}
const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
)

store.asyncReducers = {}
store.injectReducer = (key, reducer) => {
    store.asyncReducers[key] = reducer
    var updatedReducer = rootReducer(store.asyncReducers)
    store.replaceReducer(updatedReducer);
}

export function addStoreReducer(key, reducer) {
    store.injectReducer(key, reducer)
}

export default store