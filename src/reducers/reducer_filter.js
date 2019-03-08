const initialState = { value: "" };

export default function(state = initialState, action) {
    switch ( action.type ) {
        case "NEW_FILTER_SELECTED":
            return {...state, value: action.payload}
        default: 
            return state
    }
}