const loaderReducer = (state = false, action) => {
    switch (action.type) {
        case 'INIT_LOADER':
            return true;
        case 'CLOSE_LOADER':
            return false;
        default:
            return state;
    }
}

export default loaderReducer;