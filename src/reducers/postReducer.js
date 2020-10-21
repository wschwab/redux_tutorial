import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
    // this next one represents a new post to be added
    item: {}
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            break;
        default:
            return state;
    }
}