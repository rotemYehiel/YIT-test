
export function setColor(color) {
    return async dispatch => {
        dispatch({ type: 'SET_COLOR', color })
    }
}
export function setCategoryName(newName) {
    return async dispatch => {
        dispatch({ type: 'SET_CATEGORY_NAME', newName })
    }
}