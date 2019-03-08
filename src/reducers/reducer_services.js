const initialState = { loading : true }
export default function(state = initialState, action) {
    switch ( action.type ) {
        case "SERVICE_REQUEST":
            return Object.assign({}, state, {content: null}, {loading : true})

        case "SERVICE_RESPONSE":
            return Object.assign({}, state, {content: action.payload}, {loading: false})

        case "UNPOPULATE_DATA":
            return Object.assign({}, state, {content: action.payload}, {loading: true})

        default: 
            return state
    }
}