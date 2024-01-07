import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
} from "redux"
import thunk from "redux-thunk"
import rootReducer from "./services/rootService"
// import StateLoader from "./utils/stateLoader"

// const stateLoader = new StateLoader()
// const initialState = stateLoader.loadState() || {}

const initialState = {}
const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
)

store.asyncReducers = {}
store.injectReducer = (key, reducer) => {
    console.log(store.asyncReducers, store.getState())
    store.asyncReducers[key] = reducer
    console.log(store.asyncReducers, store.getState())
    store.replaceReducer(rootReducer(store.asyncReducers))
}

// sample reducer injection
// store.injectReducer("sample", )

// store.subscribe(() => {
//     // this is just a function that saves state to localStorage
//     stateLoader.saveState(store.getState())
// })

export function addStoreReducer(key, reducer) {
    store.injectReducer(key, reducer)
}

export default store