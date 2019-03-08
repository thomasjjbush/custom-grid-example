export function selectFilter(payload) { 
    return function action(dispatch) {
        dispatch({
            type: 'NEW_FILTER_SELECTED',
            payload
        })
    }
}

		