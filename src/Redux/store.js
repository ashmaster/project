import { createStore } from 'redux'
const initialState = {
    user: null,
    posts: [],
    cat: '',
    search: ''
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_USER": {
            const updatedUser = action.payload;
            return { ...state, user: updatedUser }
        }
        case "UPDATE_POST": {
            const updatedPost = action.payload;
            return { ...state, posts: updatedPost }
        }
        case "ADD_POST": {
            const newPost = action.payload;
            const currPosts = state.posts;
            currPosts.push(newPost);
            return { ...state, posts: currPosts }
        }

        case "UPDATE_CAT": {
            const updatedCat = action.payload;
            return { ...state, cat: updatedCat }
        }

        case "UPDATE_SEARCH": {
            const updatedSearch = action.payload;
            return { ...state, search: updatedSearch }
        }
        default: return state
    }
}

export const store = createStore(reducer)