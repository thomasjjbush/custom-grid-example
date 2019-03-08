export function userSearch(value) {
    return function action(dispatch) {
        dispatch({
            type: 'USER_SEARCH',
            payload: value
        })
    }
}

		

		