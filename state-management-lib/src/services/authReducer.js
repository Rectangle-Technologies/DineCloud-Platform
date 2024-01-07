import { LOGIN, LOGOUT } from "./actions/type"

const initialState = {
    isAuthenticated: false,
    token: "",
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload.token,
                user: action.payload.user,
            }
        case LOGOUT:
            return initialState
        default:
            return state
    }
}