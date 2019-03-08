const initialState = { value : "" };

export default function(state = initialState, action) {
    switch ( action.type ) {
        case "USER_SEARCH":
            return {...state, value: action.payload}
        case "USER_CLEAR_SEARCH":
            return {...state, value: ""}
        default: 
            return state
    }
}