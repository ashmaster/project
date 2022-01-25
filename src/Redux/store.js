import {createStore} from 'redux'
const initialState = {
    user: {},
    posts: [],
}

function reducer(state = initialState, action){
    switch(action.type){
        case "UPDATE_USER" : {
             const updatedUser = action.payload;
             return {...state, user: updatedUser}
        }
        case "ADD_POST" : {
            const newPost = action.payload;
            const currPosts = state.posts;
            currPosts.push(newPost);
            return {...state, posts: currPosts}
        }
        default: return state
    }
}

export const store = createStore(reducer)